export const mutations = `
    createuser(name: String, email: String): String

    checkuser(token: String): userinfo

    giveaccess(token: String): Token
`