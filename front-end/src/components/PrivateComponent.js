import React from "react";
import {Navigate,Outlet} from 'react-router-dom';


const PrivateComponent=()=>{
    const auth=localStorage.getItem('user');
    //if user any data is present in localstorage it will use outlet component used to render child routes else navigate to signup page
    // An <Outlet> should be used in parent route elements to render their child route elements
    return auth?<Outlet />:<Navigate to="/signup"/>
}

export default PrivateComponent;