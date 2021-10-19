import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
type Query{
    welcome:String
}
`

const resolvers = {
    Query: {
        welcome: () => {
            return "Welcome to Todos"
        }

    }
}

async function initServer() {
    const app = express()
    const apolloServer = new ApolloServer({ typeDefs, resolvers })

    await apolloServer.start();

    apolloServer.applyMiddleware({ app })
    app.use((req, res) => {
        res.send("Server started successfully")
    })

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
        console.log(`Server is runnning in port ${PORT}`))
}

initServer()