export const mutations = `
    createuser(name: String, email: String): String

    checkuser(token: String): userinfo

    giveaccess(token: String): Token

    recentpost(uid: String, pid: String): String

    findoneuser(uid: String): User
`