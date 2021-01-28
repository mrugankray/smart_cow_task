import React from 'react'
import './page.css'
import Player from './Player'

export default function Page() {
    return (
        <div className="row">
            <div className="col s3 side-bar">
                <ul>
                    <li>
                        Get Started
                    </li>
                    <li>
                        Gallary
                    </li>
                    <li>
                        Franchise
                    </li>
                    <li>
                        Blogs
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>

            <div className="col s9 main-content valign-wrapper">
                <h3>
                    We care for you.
                </h3>
                <Player />
            </div>
        </div>
    )
}
