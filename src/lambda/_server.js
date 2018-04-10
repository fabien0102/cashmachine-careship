import { GraphQLServerLambda } from 'graphql-yoga'
import notes from './resolvers/notes'

const typeDefs = `
  type Query {
    notes(amount: Int): [Int!]
  }
`

const resolvers = {
  Query: {
    notes
  }
}

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
  options: {
    endpoint: '/graphql'
  }
})

export const server = lambda.graphqlHandler
export const playground = lambda.playgroundHandler
