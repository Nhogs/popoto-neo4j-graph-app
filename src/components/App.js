import React, {Component} from 'react';
import logo from './../logo.svg';
import {Breadcrumb, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {
    render() {
        let content = "";
        let p = "";
        let active = "";
        if (this.props.noNeo4jDesktopApi === true) {
            content = <p>This app only run in Neo4j Desktop!</p>;
        } else {
            content = <p>Popoto.js Neo4j Graph App</p>;

            if (this.props.activeProject !== undefined) {
                p = <p>Active database</p>;
                active = <Breadcrumb>
                    <Breadcrumb.Section link><Icon
                        name='bookmark'/>{this.props.activeProject.name}</Breadcrumb.Section><Breadcrumb.Divider
                    icon='right angle'/><Breadcrumb.Section link><Icon
                    name='database'/>{this.props.activeGraph.name}</Breadcrumb.Section>
                </Breadcrumb>;
            } else {
                p = <p>No active database</p>;
            }
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {content}
                    {p}
                    {active}
                </header>
            </div>
        )
    }
}

export default App;
