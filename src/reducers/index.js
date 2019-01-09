import {FIRST_CONTEXT, NO_NEO4J_DESKTOP_API, GRAPH_ACTIVE, GRAPH_INACTIVE} from '../actions/index'

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NO_NEO4J_DESKTOP_API:
            return {
                ...state,
                noNeo4jDesktopApi: true,
            };
        case FIRST_CONTEXT:
            if (action.activeProject !== undefined) {
                return {
                    ...state,
                    noNeo4jDesktopApi: false,
                    activeProject: action.activeProject,
                    activeGraph: action.activeGraph,
                };
            } else {
                return {
                    ...state,
                    noNeo4jDesktopApi: false,
                };
            }
        case GRAPH_ACTIVE:
            return {
                ...state,
                activeProject: action.activeProject,
                activeGraph: action.activeGraph,
            };
        case GRAPH_INACTIVE:
            const {activeProject, activeGraph, ...newState} = state;
            return newState;
        default:
            return state;
    }
}