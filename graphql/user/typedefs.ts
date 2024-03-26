 export const typeDefs = `
  
    type Token {
        name: String
        email: String
        id: String
        iat: Int
        exp: Int

    }

    type userinfo {
        data: Token
        accesstoken: String
    }
  
 `