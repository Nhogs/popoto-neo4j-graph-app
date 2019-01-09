/* global neo4jDesktopApi */
import {firstContext, noNeo4jDesktopApi, graphActive, graphInactive} from '../actions/index'

export default (store) => {
    if (window.neo4jDesktopApi === undefined) {
        store.dispatch(noNeo4jDesktopApi());
    } else {
        neo4jDesktopApi.onContextUpdate((event, newContext, oldContext) => {
            if (event.type === "GRAPH_INACTIVE") {
                store.dispatch(graphInactive(event.id));
            }
            if (event.type === "GRAPH_ACTIVE") {
                store.dispatch(graphActive(event.id, newContext));
            }
        });

        neo4jDesktopApi.getContext()
            .then(context => {
                store.dispatch(firstContext(context));
            })
    }
}