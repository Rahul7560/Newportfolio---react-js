import React from 'react'
import './item.css'

function item(props) {
    return (
        <div className="resumeitem ">
            <div>
                <p> {props.date}</p>


            </div>
            <h3> {props.job}</h3>
            <h4>  <a href="#" className="textdecoration">{props.website} </a></h4>
            <p> {props.children}</p>

        </div>
    )
}

export default item
