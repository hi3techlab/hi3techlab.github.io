import React from 'react';
import "./project.css";
import { Link } from 'react-router-dom';

export default function Projects(props) {
    return (
        <div className="outer-container">
            <img src={props.image}></img>
            <div>
                <div className="wrapper">
                    <div className='text-container'>
                        <h1>{props.title}</h1>
                        <h2>{props.summary}</h2>
                    </div>
                </div>
                <p>{props.description}</p>
                <p style={{color:"#73000A"}}>
                    <Link to="/research" style={{color:"#73000A"}}>
                        <u>Learn more -></u>
                    </Link>
                </p>
            </div>
        </div>
    );
}