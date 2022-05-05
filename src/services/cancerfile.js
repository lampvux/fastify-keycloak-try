
const knex = require("../db/postgres");


async function getUserCancerFiles(_user_id) {
    return await knex("cancer_files")
    .select("*")
    .where({ user_id: _user_id });
}

async function saveUserCancerFile(insertData) {
    return await knex("cancer_files").insert(insertData)
}

async function updateUserCancerFile(updateData, conditions) {
    return await knex("cancer_files").update(updateData).where(conditions)
}

async function deleteUserCancerFile(condition) {
    return await knex("cancer_files").where(condition).del()
}

module.exports = {
    getUserCancerFiles,
    saveUserCancerFile,
    updateUserCancerFile,
    deleteUserCancerFile
}