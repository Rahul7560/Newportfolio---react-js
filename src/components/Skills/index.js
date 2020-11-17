import React, { useState, useContext } from 'react'
import { Col, Row, Container } from 'reactstrap'
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Skillbutton from './Button'


import './skills.css'
import { Themecontex } from '../../context/Themecontex';


function Menu() {
    const [state, setstate] = useState(null)
    const { theme, settheme } = useContext(Themecontex)


    return (
        <Col md={5} className=" shade nopadding">
            <div className="dataview">
                <img src={theme.img} alt="coverpicture" />
                <div className="profilephoto" align="center">
                    <img src="scr.png" alt="profilephoto" />

                </div>
                <h3 className="mt-3"> RAHUL R</h3>
                <div className=" typediv" align="center">
                    <Typewriter

                        options={{
                            strings: [' <strong class="type" style= "color : red;  " >MERN Stack Developer  </strong>', '<strong class="type" style= "color : green;" >Frontend Developer  </strong>', '<strong class="type" style= "color : blue;" >Backend Developer  </strong>'],
                            autoStart: true,
                            loop: true,
                            cursor: '<strong  class="type"> | </strong> '
                        }}
                    />
                    <div>

                        <Row className="rowskills ">
                            <a href="#">
                                <GitHubIcon
                                    className="iconcontact"
                                />


                            </a>
                            <a href="#">
                                <LinkedInIcon
                                    className="iconcontact"

                                />


                            </a>
                            <a href="#">
                                <WhatsAppIcon
                                    className="iconcontact"
                                />


                            </a>
                            <a href="#">
                                <FacebookIcon
                                    className="iconcontact"

                                />


                            </a>

                        </Row>
                        <Row className="rowlocation mt-3 nopadding">
                            <p className="loationhead px-2 mr-3" style={{ backgroundColor: "red" }}> <LocationOnIcon fontSize="small" /> Location </p> <p className="locationsub">  Kollam / kerala </p>
                        </Row>
                    </div>
                    <div className="">
                        <Container
                            className="skillscontainer" >
                            <h5 className=" ml-3 mb-3"><strong> Skills</strong></h5>
                            <Row className="  skillrow m-3">
                                <Skillbutton
                                    text=" React"
                                    colorone="#7579e7"
                                    colortwo="#0e1174"
                                    img="https://miro.medium.com/max/2776/1*QWomjCiDOJ_2wkONOsldBQ.png"

                                />
                                <Skillbutton
                                    text=" Node"
                                    colorone="#5af155"
                                    colortwo="#075213"
                                    img="https://www.alioze.com/wp-content/uploads/2016/11/developpement-nodejs.jpg"
                                />
                                <Skillbutton
                                    text=" Python"
                                    colorone="#fcf876"
                                    colortwo="#28abb9"
                                    img="https://images.ctfassets.net/3prze68gbwl1/asset-17suaysk1qa1jhl/d276861783e0ab0ffab32afcdc84d597/python-socket-programming.jpg?h=445&w=1024"
                                />
                                <Skillbutton
                                    text="Php"
                                    colorone="#9088d4"
                                    colortwo="blue"
                                    img="https://www.tutorialrepublic.com/lib/images/php-illustration.png"
                                />
                                <Skillbutton
                                    text="JavaScript"
                                    colorone="#fcf876"
                                    colortwo="#f08a5d"
                                    img="https://miro.medium.com/max/800/1*bxEkHw1xewxOFjmGunb-Cw.png"
                                />
                                <Skillbutton
                                    text="HTML / Css"
                                    colorone=""
                                    colortwo=""
                                    img="https://www.tutorialrepublic.com/lib/images/html-illustration.png"
                                />
                                <Skillbutton
                                    text="CEH"
                                    colorone="#c8d5b9"
                                    colortwo="#68b0ab"
                                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGsiDtHEQAfV-T6wkAn61bF3ZVKGhcaElOA&usqp=CAU"
                                />
                                <Skillbutton
                                    text="Artifical Intelligence"
                                    colorone="#f1f3f8"
                                    colortwo="#8d93ab"
                                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShquVhhiLz7rtnMxGFYfe3IAghhKD2sMGAZA&usqp=CAU"
                                />

                            </Row>


                            <Row className=" m-1 mt-5 mb-3">
                                <Col className="menucols py-3 ">
                                    <p className="nopadding "> DOWNLOAD CV</p>





                                </Col>
                                <Col className="menucols py-3 ">


                                    <p className="nopadding " >CONTACT</p>



                                </Col>
                            </Row>


                        </Container>
                    </div>

                </div>


            </div>
        </Col>

    )
}

export default Menu
