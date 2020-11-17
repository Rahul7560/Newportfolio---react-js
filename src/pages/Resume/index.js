import React from 'react'
import Item from './item'
import WorkIcon from '@material-ui/icons/Work';

function index() {
    return (
        <div className="About mt-3">
            <div className="aboutsub">
                <h3> <WorkIcon />  Resume</h3>
                <hr />
                <Item
                    date=" Nov 13 2019"
                    job="Frontend Developer "
                    website="Socean Digital Solutions"

                >
                    Develop clean, maintainable and highly interactive  web applications using Javascript, React, HTML,CSS, SASS,PHP.
                    Responsible for design and development of the web pages from sketchs.

                </Item>
                <hr />
                <Item
                    date=" Nov 13 2019 - Nov 13 2019"
                    job="Frontend Developer - Internship "
                    website="Socean Digital Solutions"

                >
                    Develop clean, maintainable and highly interactive  web applications using Javascript, React, HTML,CSS, SASS,PHP.
                    Responsible for design and development of the web pages from sketchs.

                </Item>
                <hr />
                <Item
                    date=" Nov 13 2019"
                    job="Frontend Developer "
                    website="Socean Digital Solutions"

                >
                    Develop clean, maintainable and highly interactive  web applications using Javascript, React, HTML,CSS, SASS,PHP.
                    Responsible for design and development of the web pages from sketchs.

                </Item>


            </div>

        </div>


    )
}

export default index
