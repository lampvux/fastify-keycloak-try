const itemSchema = {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      message: { type: 'string' },
      randomNumber: { type: 'integer' }
    }
  }

  const singleQuerySchema = {
    schema: {
      response:{
        200: itemSchema
      }
    }
  }


  module.exports = {
    singleQuerySchema
  }