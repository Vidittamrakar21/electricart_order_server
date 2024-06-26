import { ApolloServer } from '@apollo/server';
import { User } from './user';
import { Order } from './order';
async function creategqlserver () {
    const gqlServer = new ApolloServer({
        typeDefs: `
            ${User.typeDefs}
            ${Order.typeDefs}
            type Query {
                ${User.queries}
               
            }

            type Mutation {
                ${User.mutations}
                ${Order.mutations}
               
            }
        `,
        resolvers: {
          Query: {
            ...User.resolvers.queries,
          
          },
          Mutation: {
            ...User.resolvers.mutations,
            ...Order.resolvers.mutations
           
          }
        },
      });
    
      await gqlServer.start();

      return gqlServer;
}

export default creategqlserver;
