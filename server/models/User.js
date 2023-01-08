const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    Phone: {
      type: String,
    },
    CIN: {
      type: String,
    },
    identifiant: {
        type: String,
        unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', UserSchema)