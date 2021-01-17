<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;

class TodoController extends ApiController
{
    public function index()
    {
        $todos = Todo::orderBy('order')->get();
        return response()->json($todos,200);
    }

    public function markComplete(Todo $todo)
    {
        if($todo->is_completed == 0)
        {
            $todo->is_completed = 1;
        }else{
            $todo->is_completed = 0;
        }

        $todo->save();

        return response()->json($todo,200);
    }


    public function  reorder (Request $request)
    {
        $this->validate($request,[
            'order'=>'required|array',
        ]);

        $order = $request->input('order');

        DB::transaction(function () use ($order){
            foreach ($order as $value){
                Todo::find($value['id'])->update(['order'=>$value['order']]);
            }
        });
    }

    public function store(Request $request)
    {
        // Get user from $request token.
        if (! $user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }

        // Validate all the required parameters have been sent.
        $validator = Validator::make($request->all(), [
            'description' => 'required',
            'ends_at' => 'required',
            'is_completed' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }

        // Warning: Data isn't being fully sanitized yet.
        try {
            $todo = Todo::create([
                'user_id' => $user->id,
                'value' => request('value'),
            ]);
            return response()->json([
                'status' => 201,
                'message' => 'Resource created.',
                'id' => $todo->id
            ], 201);
        } catch (Exception $e) {
            return $this->responseServerError('Error creating resource.');
        }
    }

    public function update(Request $request, $id)
    {
        // Get user from $request token.
        if (! $user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }

        // Validates data.
        $validator = Validator::make($request->all(), [
            'description' => 'string',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }

        try {
            $todo = Todo::where('id', $id)->firstOrFail();
            if ($todo->user_id === $user->id) {
                if (request('description')) {
                    $todo->description = request('description');
                }
                if (request('ends_at')) {
                    $todo->ends_at = request('ends_at');
                }
                if (request('is_completed')) {
                    $todo->is_completed = request('is_completed');
                }
                $todo->save();
                return $this->responseResourceUpdated();
            } else {
                return $this->responseUnauthorized();
            }
        } catch (Exception $e) {
            return $this->responseServerError('Error updating resource.');
        }
    }


    public function destroy(Request $request, $id)
    {
        // Get user from $request token.
        if (! $user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }

        $todo = Todo::where('id', $id)->firstOrFail();

        // User can only delete their own data.
        if ($todo->user_id !== $user->id) {
            return $this->responseUnauthorized();
        }

        try {
            $todo->delete();
            return $this->responseResourceDeleted();
        } catch (Exception $e) {
            return $this->responseServerError('Error deleting resource.');
        }
    }
}
