<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register', 'API\RegisterController@register');
Route::post('login', 'API\RegisterController@login');

Route::get('/todos','TodoController@index');
Route::get('/todo/complete/{todo}','TodoController@markComplete');
Route::post('/todo/reorder','TodoController@reorder');
Route::get('/todo/delete/{id}','TodoController@destroy');
Route::post('/todo/update/{id}','TodoController@update');
Route::post('/todo/save','TodoController@save');
