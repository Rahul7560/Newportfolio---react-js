import React from 'react'
import { Row } from 'reactstrap'
import Item from './Item'

function Work() {
    return (
        <div className="About">
            <div className="aboutsub">
                <h3> Works</h3>
                <hr />
                <Row className=" workrow m-auto">
                    <Item

                        url="https://shareblood.online/"
                        title="Shareblood - Mern Stack"
                        img="shareblood.png"

                    >
                        Web Application - Blood Bank
                    </Item>
                    <Item

                        url="#"
                        title="Portfolio - React"
                        img="newport.png"

                    >
                        Eact
                    </Item>
                    <Item

                        url="http://www.admissioncellindia.com/"
                        title="Admission Cell India"
                        img="admission.png"

                    >
                        Web appilcation  for finding fees structure of diffrent Colleges,( PHP Backend)
                    </Item>
                    <Item

                        url="https://twitterclone-b9443.web.app/"
                        title="Twitter Clone "
                        img="twitter.png"

                    >
                        React with firebase Database
                </Item>
                    <Item

                        url="http://www.rahulr.cf/"
                        title="Portfolio "
                        img="oldport.png"

                    >
                        Normal Portfolio website
</Item>


                </Row>

                <hr />




            </div>

        </div>
    )
}

export default Work
