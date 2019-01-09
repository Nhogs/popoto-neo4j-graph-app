export const NO_NEO4J_DESKTOP_API = 'NO_NEO4J_DESKTOP_API';
export const FIRST_CONTEXT = 'FIRST_CONTEXT';
export const GRAPH_INACTIVE = 'GRAPH_INACTIVE';
export const GRAPH_ACTIVE = 'GRAPH_ACTIVE';

export function noNeo4jDesktopApi() {
    return {
        type: NO_NEO4J_DESKTOP_API
    }
}

export function firstContext(context) {
    let activeProject = context.projects.find(project => project.graphs.find(graph => graph.status === "ACTIVE"));
    if (activeProject !== undefined) {
        let activeGraph = activeProject.graphs.find(graph => graph.status === "ACTIVE");
        return {
            type: FIRST_CONTEXT,
            activeProject: {id: activeProject.id, name: activeProject.name},
            activeGraph: activeGraph
        }
    } else {
        return {
            type: FIRST_CONTEXT,
        }
    }
}

export function graphInactive(graphId) {
    return {
        type: GRAPH_INACTIVE,
        graphId: graphId
    }
}

export function graphActive(graphId, context) {
    let activeProject = context.projects.find(project => project.graphs.find(graph => graph.status === "ACTIVE"));
    let activeGraph = activeProject.graphs.find(graph => graph.status === "ACTIVE");
    return {
        type: GRAPH_ACTIVE,
        activeProject: {id: activeProject.id, name: activeProject.name},
        activeGraph: activeGraph
    }
}

