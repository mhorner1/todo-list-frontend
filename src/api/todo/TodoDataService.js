import axios from "axios";

class TodoDataService{

    retrieveAllTodos(pathvar){

        return axios.get(`http://localhost:8080/users/${pathvar}/todos`);
    }

    deleteTodo(username, id){
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`);
    }
    
}

export default new TodoDataService();