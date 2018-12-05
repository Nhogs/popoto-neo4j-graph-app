import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import {
    GraphAppBase,
    ConnectModal,
    CONNECTED
} from "graph-app-kit/components/GraphAppBase";

import { Cypher } from "graph-app-kit/components/Cypher";

import neo4j from "neo4j-driver";

const integrationPoint = window.neo4jDesktopApi;

const MyApp = ({ connectionState }) =>
    connectionState === CONNECTED ? (
        <Cypher
            query="call db.schema"
            render={({ pending, error, result: schema }) => {
                return pending
                    ? "pending"
                    : error
                        ? error.message
                        : JSON.stringify(schema);
            }}
        />
    ) : (
        <h1>Please connect</h1>
    );

class App extends Component {
    render() {
        return (
            <GraphAppBase
                driverFactory={neo4j}
                integrationPoint={integrationPoint}
                render={({ connectionState, connectionDetails, setCredentials }) => {
                    return [
                        <ConnectModal
                            key="modal"
                            errorMsg={connectionDetails ? connectionDetails.message : ""}
                            onSubmit={setCredentials}
                            show={connectionState !== CONNECTED}
                        />,
                        <MyApp key="app" connectionState={connectionState} />
                    ];
                }}
            />
        );
    }
}

export default App;
