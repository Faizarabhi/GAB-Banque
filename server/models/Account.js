const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema(
  {
    identifiant: {
      type: String
    },
    solde: {
      type: String
    },
    transaction: {
      type: String
    }
  }
)
module.exports = mongoose.model('Account',AccountSchema)