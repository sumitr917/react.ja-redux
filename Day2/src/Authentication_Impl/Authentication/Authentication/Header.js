

import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { logout } from './Authenticationconfig';


const HeaderAuth = () => {



   var isUserAuthenticated= useSelector(state=>state.isUserAuthenticated)



    var dispatch= useDispatch()

   if(isUserAuthenticated)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
    
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={()=>{
                dispatch(logout())

              }} >Logout</button>
            </li>
          </ul>
        </nav>
    
    </header>
  );
};

export default HeaderAuth;