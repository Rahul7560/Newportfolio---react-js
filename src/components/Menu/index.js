import React, { useRef, useState } from 'react'
import { Row, Col } from 'reactstrap'
import './Menu.css'
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import BrushIcon from '@material-ui/icons/Brush';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import {
    Link
} from "react-router-dom";






function index() {






    function scrolltothe() {
        var targetElm = document.querySelector('.col2')


        targetElm.window.scrollIntoView()

    }






    return (

        <div className="menu" >
            <Row className="rowmenu text-white">
                <Col className="nopadding">
                    <Link className="hovers" to="/">
                        <Col className="menucol leftborder">
                            <PersonIcon
                                className="mt-3 menucolicon"

                                fontSize="default"


                            />
                            <p>PROFILE</p>

                        </Col>



                    </Link>



                </Col>
                <Col id="myInput" className="col2 nopadding">
                    <Link className="hovers" to="/Resume">
                        <Col className="menucol leftborder ">

                            <DescriptionIcon
                                className="mt-3 menucolicon"

                                fontSize="default"


                            />
                            <p>RESUME</p>



                        </Col>


                    </Link>



                </Col>

                <Col className="nopadding">
                    <Link className="hovers" to="/Work">
                        <Col className="menucol leftborder">

                            <BrushIcon
                                className="mt-3 menucolicon "

                                fontSize="default "


                            />
                            <p>WORK</p>



                        </Col>

                    </Link>



                </Col>





                <Col className="nopadding">
                    <Link className="hovers" to="/Contact">
                        <Col className="menucol ">

                            <RecentActorsIcon
                                className="mt-3 menucolicon"

                                fontSize="default"


                            />
                            <p>CONTACT</p>



                        </Col>

                    </Link>



                </Col>





            </Row>


        </div >
    )
}

export default index
