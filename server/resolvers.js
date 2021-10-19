import Todo from './models/Todo.js'

const resolvers = {
    Query: {
        welcome: () => {
            return "Welcome to Todos"
        },
        getTodos: async () => {
            const todos = await Todo.find()
            return todos;
        }

    }
}

export default resolvers;
