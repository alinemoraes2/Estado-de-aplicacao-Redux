export function addTodo(text) {
    return {
        type:
        'ADD_TODO',
        playload: {
            id: Math.random(),
            name: text
        }
    };
}