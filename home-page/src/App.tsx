import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, FormInput, Button } from "shards-react"
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Chat from 'chat/Chat';


import "./index.css";

const App = () => (
    <Container>
        <h1>Chat!</h1>
            <Chat />
    </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
