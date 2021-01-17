let apiDomain= "";

if (process.env.NODE_ENV === "production"){
    apiDomain="http://todo.test";
} else {
    apiDomain = "http://todo.test";
}

class UrlService {


    static loginUrl() {
        return apiDomain + "/api/login";
    }

    static getTodoUrl() {
        return apiDomain + "/api/todos";
    }

    static markTodoCompleteUrl(id) {
        return apiDomain + "/api/todo/complete/"+id;
    }

    static changeTodoOrderUrl() {
        return apiDomain + "/api/todo/reorder";
    }


}


export default UrlService;
