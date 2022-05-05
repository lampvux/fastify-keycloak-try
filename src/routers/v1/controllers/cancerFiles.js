const cancerFilesService = require('../../../services/cancerfile');

const getUserFiles = async (req, reply) => {

  let user_id = req.params.user_id; 

  let userFiles = await cancerFilesService.getUserCancerFiles(user_id);

  reply.send(userFiles);
}

module.exports = {
  getUserFiles
}

