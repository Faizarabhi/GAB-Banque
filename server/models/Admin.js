const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema(
  {
    
      name: {
        type: String,
        require : [true,'Please add name']
      },
      email: {
        type: String,
        unique: true,
        require : [true,'Please add email']
      },
      Phone: {
        type: String,
        require : [true,'Please add Phonr']
      },
      CIN: {
        type: String,
        unique: true,
        require : [true,'Please add CIN']
      },
      identifiant: {
          type: String,
          unique: true,
          require : [true,'Please add votre Identfiant']
      },
      password: {
        type: String,
        require : [true,'Please add Password']
      },
    },
    {
      timestamps: true,
    }
)

module.exports = mongoose.model('Admin', AdminSchema)