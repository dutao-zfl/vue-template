import mongoose from '../mongoose'

const TestSchema = new mongoose.Schema({
  account: {
    type: String
  },
  password: {
    type: String
  }
})

TestSchema.methods.findById = function (id) {
  return this.model('test').find({ id })
}

export default TestSchema
