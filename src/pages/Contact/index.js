import React from 'react'
import { Col, Row } from 'reactstrap'
import './contact.css'


function Contact() {

    return (
        <div className="About">
            <div className="aboutsub contactsub">
                <h3> Contact</h3>
                <hr />
                <form>
                    <Row>
                        <Col sm >
                            <input className=" inputcontact mt-3" type="text" placeholder=" Full Name" />
                        </Col>
                        <Col sm >
                            <input className="inputcontact mt-3" type="text" placeholder="Email Address" />
                        </Col>
                    </Row>
                    <input className="mt-3 inputcontact" type="text" placeholder="Subject" />
                    <textarea className="mt-3 inputcontacts " id="w3review" name="w3review" placeholder="Message" rows="4" cols="50" />
                    <button className=" submitbutton  menucols   mt-3" > SEND MESSAGE</button>


                </form>


            </div>

        </div>
    )
}

export default Contact
