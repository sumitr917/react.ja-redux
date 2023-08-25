import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';




const UserProfile = () => {


  var isUserAuthenticated= useSelector(state=>state.isUserAuthenticated)


  if(isUserAuthenticated)

  return (


    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
 
};

export default UserProfile;