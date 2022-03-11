import React from 'react';
import {Link} from "react-router-dom";

function PageNotFound (props) {
    return (
        <>
        <div class="error-page">
            <header>
                
                <h1 className="whoops">Whoops!</h1>
            </header>
            <h2 className="broken-site">You broke the site</h2>
            
                <img src="https://i.imgur.com/xSuqjOR.png"/>
                <nav>
                    <ul>
                        <li>
                            <a href="/dashboard" className="return-link">Click here to return to the dashboard</a>
                        </li>
                    </ul>
                </nav>

        </div>

        </>
      );
}

export default PageNotFound;