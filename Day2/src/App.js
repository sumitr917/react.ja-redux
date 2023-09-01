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
import HeaderAuth from './Authentication/Authentication/Header';
import Auth from './Authentication/Authentication/Authentication';
import UserProfile from './Authentication/Authentication/User.profile';
import { authStore } from './Authentication/Authentication/Authenticationconfig';
import { photoStore } from './AsyncActions/asyncconfig';
import PhotosComponent from './AsyncActions/PhotosComponent';
import ClassComp from './ReduxToolkit/classComp';
import './SuperHeroExample/SuperHeroExample/Styles/index.css'
import CharacterComponent from './SuperHeroExample/SuperHeroExample/Components/CharacterComponent';
import { charaStore } from './SuperHeroExample/SuperHeroExample/Reducer/characterReducer';
import HerosComponent from './SuperHeroExample/SuperHeroExample/Components/HerosComponent';
import SquadStats from './SuperHeroExample/SuperHeroExample/Components/SquadComponent';
  export var  loginContext=  createContext()

function App() {


  var  [userName,setUserName] =  useState("")

       

  return (

  <Provider store={charaStore}>
    <div className="App">
      <div className="col-md-4">
        <CharacterComponent />
      </div>

      <div className="col-md-4">
      <HerosComponent />
      </div>

      <div className="col-md-4">
      <SquadStats />
      </div>
    </div>
  </Provider>




    // <div className="App">

    // <Provider store={photoStore}>

    //   <PhotosComponent></PhotosComponent>
    // </Provider>

    // <Provider store={authStore}>
    //      <HeaderAuth></HeaderAuth>
    //      <Auth></Auth>

    //     <UserProfile></UserProfile>
    //   </Provider>




  //      <loginContext.Provider value={{userName,setUserName}}>
  //             <HeaderComponent ></HeaderComponent>
  //             <LoginComponent ></LoginComponent>

             
  //       </loginContext.Provider> 
  //  </div> 
  );
}

export default App;
