


function depthFirstRecursion<T extends string | number>(graph: Record<T, T[]>, source: T, result: string = ''): string {
    result += `${source} -> `
    for (let neighbour of graph[source]) {
        result = depthFirstRecursion(graph, neighbour, result);
    }

    return result;
}

function depthFirstPrint<T extends string | number>(graph: Record<T, T[]>, source: T): string {

    const stack: T[] = [source];
    let result: string = ''

    while (stack.length > 0) {
        const current = stack.pop()!;
        result += `${current} -> `;
        for (let neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }

    return result;

}

function breathFirstPrint<T extends string | number>(graph: Record<T, T[]>, source: T): string {

    const queue: T[] = [source];
    let result: string = ''

    while (queue.length > 0) {
        const current: T = queue.shift()!;
        result += `${current} -> `;
        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }

    return result;
}


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

console.log('DFS - reccursion ||', depthFirstRecursion<string>(graph, 'a'));
console.log('DFS ||', depthFirstPrint<string>(graph, 'a'));
console.log('BFS ||', breathFirstPrint<string>(graph, 'a'));

export { };