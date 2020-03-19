const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  salary: {
    type: Number
  },
  description: {
    contactEmail: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    datePosted: {
      type: new Date()
    },
    roleType: {
      type: String
    },
    experienceLevel: {
      type: String
    }
  }
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job