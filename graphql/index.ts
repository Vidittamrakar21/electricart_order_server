import { ApolloServer } from '@apollo/server';
import { User } from './user';
import { Order } from './order';
async function creategqlserver () {
    const gqlServer = new ApolloServer({
        typeDefs: `
            type Query {
                ${User.queries}
                ${Order.queries}
            }

            type Mutation {
                ${User.mutations}
                ${Order.mutations}
            }
        `,
        resolvers: {
          Query: {
            ...User.resolvers.queries,
            ...Order.resolvers.queries,
          },
          Mutation: {
            ...User.resolvers.mutations,
            ...Order.resolvers.mutations,
          }
        },
      });
    
      await gqlServer.start();

      return gqlServer;
}

export default creategqlserver;
