import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Stores/GiraffeStore"
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";
import GiraffeStore from "./Stores/GiraffeStore";
import {observer} from "mobx-react";
const giraffeStore = new GiraffeStore();

function App() {
  return (

    <div className="App">

        <Container>
            <Row>
                <Switch>
                    <Route path={"/about/:text"} component={About}/>
                    <Route exact path={"/"} component={Startside}/>
                    <Route component={CatchAll}/>
                </Switch>
            </Row>
            <Row>
                <Col xl lg="auto">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <Button>TestButton</Button>
                    </InputGroup>
                </Col>
                <Col xl lg="auto">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                        <Button>Test2Button</Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={()=>giraffeStore.giraffes.push("Elmer")}>Tilføj giraf</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        {giraffeStore.giraffes.map((giraffeName,key)=>
                            <li key={key}>{giraffeName}</li>
                        )}
                    </ul>

                </Col>
            </Row>



        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>Indtast her</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Indtast Tekst" />
            <Button>TestB3</Button>
        </InputGroup>
        </Container>

      <header className="App-header">

      </header>
    </div>

  );
}

const CatchAll = () => {
    return <h3>Denne side eksisterer ikke 404</h3>
}

const Startside = () => {
    return <h3>Startside</h3>
}

const About = withRouter((input) => {
    console.log(input.match)
    console.log(input.history)

    return <div>
        <h3>About {input.match.params.text}</h3>
        <Button onClick={()=> input.history.push("/")}>Go to front</Button>
    </div>
});

export default observer(App);
