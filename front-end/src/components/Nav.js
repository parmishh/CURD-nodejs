//import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')

    }
    return (
        <div>

            <img class="logo" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGL4VXH0n3EwUSR7VGx38Dtj4_TCcnFJTVfijNiqeiQ&s"/>
            {auth ?
                <ul className="pp">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/update">Update Products</Link></li>

                    <li><Link to="/profile">Profile</Link></li>
                    



                    {/*<li>{auth?<Link onClick={logout} to="/signup">Logout</Link>:<Link to="/signup">signup</Link>}</li>

    <li><Link to="/login">Login</Link></li>*/}

                    {
                        auth ? 
                        <>
                        <li  ><Link onClick={logout} to="/signup" id="ss">Logout</Link></li>
                        <li  > ({JSON.parse(auth).name})</li>
                        </>
                            : <>

                            </>

                    }
                </ul>


                :
                <ul className="pp"> <li ><Link to="/signup" id="ss">signup</Link></li>
                    <li ><Link to="/login" id="ss">Login</Link></li>
                </ul>

            }
        </div>
    )

}

export default Nav;
