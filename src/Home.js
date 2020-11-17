import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Menu from './components/Menu'
import Skills from './components/Skills'
import Contents from './pages'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Work from './pages/Work'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";;



function Home() {


    return (
        <div className="Home">
            <Container fluid="sm" className="containerHome ">

                <Router>
                    <Menu />
                    <Row>
                        <Skills />
                        <Col  >
                            <Switch>
                                <Route exact path="/">
                                    <Contents />


                                </Route>
                                <Route exact path="/Resume">
                                    <Resume />


                                </Route>
                                <Route exact path="/Contact">
                                    <Contact />


                                </Route>
                                <Route exact path="/Work">
                                    <Work />


                                </Route>
                            </Switch>



                        </Col>
                    </Row>

                </Router>



            </Container>


        </div>
    )
}

export default Home
