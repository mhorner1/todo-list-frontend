import axios from "axios";



class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/helloworld');
        // console.log('executed service')
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/helloworldbean');
        // console.log('executed service')
    }

    executeHelloWorldPathService(pathvar){
        return axios.get(`http://localhost:8080/helloworld/${pathvar}`);
        // console.log('executed service')
    }
}



export default new HelloWorldService();