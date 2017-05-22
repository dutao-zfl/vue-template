import mongoose from '../mongoose'
import TestSchema from '../schemas/test'

const TestModel = mongoose.model('test', TestSchema)

export default TestModel
