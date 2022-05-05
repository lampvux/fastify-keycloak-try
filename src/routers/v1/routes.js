const cancerFileController = require("./controllers/cancerFiles")

function getUserFiles(fastify, opts, done) {

    fastify.get('/userfiles', cancerFileController.getUserFiles)
    
    done()
}

module.exports = {
    getUserFiles
}