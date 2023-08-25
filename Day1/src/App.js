import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import LoginComponent from './Components/LoginComponent';
import HeaderComponent from './Components/HeaderComponent';
// import './Redux/simpleReduxConfig'
import CakeComponent from './Redux/cakeComponent';
import { Provider } from 'react-redux';
import { cakeStore } from './Redux/simpleReduxConfig';
import MegaStorecomponent from './Redux/MegaStorecomponent';
import './ReduxToolkit/simpletoolkitconfig'
import { toolkitStore } from './ReduxToolkit/simpletoolkitconfig';
  export var  loginContext=  createContext()

function App() {


  var  [userName,setUserName] =  useState("")

       

  return (
    <div className="App">


      {/* Provider will provide centralized global store object to all components */}

<Provider store={toolkitStore}>      
  
  <CakeComponent></CakeComponent>
    {/* <CakeComponent></CakeComponent>
    <MegaStorecomponent></MegaStorecomponent> */}


</Provider>

      {/* <loginContext.Provider value={{userName,setUserName}}>
              <HeaderComponent ></HeaderComponent>
              <LoginComponent ></LoginComponent>

             
        </loginContext.Provider> */}
    </div>
  );
}

export default App;
