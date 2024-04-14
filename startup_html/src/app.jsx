import React from 'react';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Stats } from './charts/charts';
import { Feed } from './feed/feed';
import { AuthState } from './login/authState';


// TODO: Fix Login/logout system

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('username') || '');
    const currentAuthState = userName? AuthState.Authenticated : AuthState.Unauthenticated; // TODO: Make sure to clear localStorage on logout
    const [authState, setAuthState] = React.useState(currentAuthState); // will tell if logged in or not

    return (
        <BrowserRouter>
            <div className='body'>
                <header >
                    <div id="banner">
                        <h1 id="logo"><em>PR318</em></h1>
                    </div>
                    <nav>
                        <menu>
                            <NavLink className="navlink" to=''>Login</NavLink>
                            <NavLink className="navlink" to='charts'>My Stats</NavLink>
                            <NavLink className="navlink" to='feed'>Feed</NavLink>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={
                    <Login
                        userName = {userName}
                        authState = {authState}
                        onAuthChange={(userName, authState) => { // this function changes the state on login or logout
                            setAuthState(authState);
                            setUserName(userName);
                        }}
                    />} exact />
                    <Route path='/charts' element={<Stats/>}/>
                    <Route path='/feed' element={<Feed/>}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer>
                    <p className="pfoot">Author: Zack Sorensen</p>
                    <p className="pfoot"><a id="githubfoot" href="https://github.com/zackjsorensen/startup">Github</a></p>

                </footer>

            </div>
        </BrowserRouter>

    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }