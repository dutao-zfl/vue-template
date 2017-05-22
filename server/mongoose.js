import mongoose from 'mongoose'
import config from '../config'

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${config.database.domain}:${config.database.port}/${config.database.name}`)

mongoose.connection.on('error', () => console.log('DataBase connection error:'));
mongoose.connection.once('open', () => console.log('DataBase connection success!'));

export default mongoose
