
import './App.css';
import './bootstrap.css'
import {React, Component} from 'react';
// import FirstComponent from './components/learning-examples/FirstComponent.jsx';
// import ThirdComponent from './components/learning-examples/ThirdComponent.jsx';
// import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
class App extends Component {

  render(){
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }

}


// return (
//   <div className="App">
//     <Counter />
//   </div>
// );


// class LearningComponents extends Component{
//   render(){
//     return(
//       <div className="App">
//         Hello World
//         <FirstComponent/>
//         <ThirdComponent/>
//       </div>
//     );
//   }
// }


export default App;
