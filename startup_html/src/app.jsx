import React from 'react';
import './app.css';

// TODO: Fix Login/logout system

export default function App() {
    return (
        <div className='body'>
            <header >
                <div id="banner">
                    <h1 id="logo"><em>PR318</em></h1>
                </div>
                <nav>
                    <menu>
                        <a href="login.html" className="navlink">Login</a>
                        <a href="charts.html" className="navlink">My Stats</a>
                        <a href="feed.html" className="navlink">Feed</a>
                    </menu>
                </nav>
            </header>

            <main>App Components Go Here</main>

            <footer>
                <p className="pfoot">Author: Zack Sorensen</p>
                <p className="pfoot"><a id="githubfoot" href="https://github.com/zackjsorensen/startup">Github</a></p>

            </footer>

        </div>


    );
}