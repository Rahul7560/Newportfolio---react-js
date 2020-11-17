import React from 'react'
import Item from './item'
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

function index() {
    return (
        <div className="About mt-3">
            <div className="aboutsub">
                <h3> <WorkIcon />  Resume</h3>
                <hr />
                <Item
                    date=" Feb 13 2020 - Aug 2020 "
                    job="Frontend Developer - Part Time "
                    website="Socean Digital Solutions"

                >
                    Develop clean, maintainable and highly interactive  web applications using Javascript, React, HTML,CSS, SASS,PHP.
                    Responsible for design and development of the web pages from sketchs.

                </Item>
                <hr />
                <Item
                    date=" 2 Months"
                    job="Python Programing -Internship "
                    website="Live Wire"

                >
                    Object Oriented Programming , Django [ Basics]


                </Item>
                <hr />
                <Item
                    date=" June 01 2019 - July 2019"
                    job=" Web Development  - Internship "
                    website="Socean Digital Solutions"

                >
                    Able to undrestand from basic to intermediate on diffrent technologies used in Webdevlopment

                </Item>
                <hr />
                <h3  >  <SchoolIcon />  Education</h3>
                <hr />
                <Item
                    date=" Aug 01 2016 - May 2020"
                    job=" Btech in Electronics And Communication "
                    website="APJ Abdul Kalam Technological University"

                >


                </Item>
                <hr />
                <Item
                    date=" June 01 2014 - May 2016"
                    job=" Higher Secondary Education in Computer Science "
                    website="S.V.M.M.H.S.S. Vendar"

                >


                </Item>





            </div>

        </div>


    )
}

export default index
