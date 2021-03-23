import React, { 
  // useState, 
  
  useEffect } from 'react'
// import { Link } from "react-router-dom";
import Navbar from './Navbar'

function Profile(){

    // const [profileState, setProfileState] = useState({
    //     isLogged: false,
    //     userI: null,
    //   });
    
      useEffect(() => {
        // setProfileState({ isLogged: true });
    
        const apiUrl = "https://devquestapi.herokuapp.com/api/v1/auth/profile";
    
        fetch(apiUrl)
          .then((res) => res.json())
          .then((doc) => {
            // setProfileState({ isLogged: false, userI: doc });
            console.log(doc)
          }
          )
          .catch((er) => console.log(er));
      }, [
        // setProfileState
      ]);

    return (
        // <div isLogged={profileState.loading} userI={profileState.userI}>
        //   <Navbar />
        // </div>
        <div>
          <Navbar />
          <p>Hello, User</p>
<div>
  <h3>My Profile</h3>
  <p>FirstName: </p>
  <p>LastName: </p>
  <p>Email: </p>
</div>
          <div>
<h3>My Questions</h3>
          </div>
        </div>
    )
}

export default Profile;