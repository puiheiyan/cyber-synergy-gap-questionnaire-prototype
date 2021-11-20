
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import {UserContext} from './UserContext';

export function Admin() { 
    const { user } = useContext(UserContext);

    let page;
    if (user === null) {
        page = <div className="App">
        <h1 className="MenuTitle"> 404 Page Error </h1>
        <h1 className="MenuTitle"> You are not signed in. </h1>
        </div>;
    } else if (user.role === "Admin") {
        page = 
        <div className="App">
            <h1 className="MenuTitle"> Admin Menu </h1>
            <h1 className="MenuTitle"> This tab is exclusively for admins, not normal users </h1>
        </div> 
    } else {
        page = <div className="App">
        <h1 className="MenuTitle"> You are logged in, but you do not have sufficient privileges to enter this page. </h1>
        </div>;
    }

    return (
        <div className="firstPage">
            {page}
            <Link to="/dashboard">
                <Button>Go to admin page</Button>
            </Link>
        </div>
        );
        
}
