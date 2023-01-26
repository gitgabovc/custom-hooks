
export const todoReducer = (initialValue = [], action) => {
    switch (action.type) {
        case "add todo":
            
            return [...initialValue, action.payload];
        case "delete todo":
        
            return initialValue.filter(todo => todo.id !== action.payload);
    
        case "toggle todo":
    
            return initialValue.map(todo => {
                if (todo.id===action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }

                return todo;
            });
        default:
            return initialValue;
    }
}
