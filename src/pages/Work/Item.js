import React from 'react'
import { Col } from 'reactstrap'
import './work.css'

function Item(props) {
    return (
        <div className="mt-3">
            <Col sm className="colwork ">

                <img src={props.img} alt=" projectImage " />
                <a href={props.url}><h3>{props.title} </h3></a>
                <h4>{props.children}</h4>

            </Col>


        </div>
    )
}

export default Item
