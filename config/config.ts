const dotenv = require('dotenv')
dotenv.config()

const _PORT = process.env.PORT || 4002

const _MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/subject-areas'
const _RESTAURENT__SEARCH_API__CONNECTION_STRING = process.env.RESTAURENT__SEARCH__API__CONNECTION_STRING || 'http://localhost:3001/api/v1'
const _ORDER_API__CONNECTION_STRING = process.env.ORDER__API__CONNECTION_STRING || 'http://localhost:3002/api/v1'


export default {
    PORT: _PORT,
    MONGODB_CONNECTION_STRING: _MONGODB_CONNECTION_STRING,
    RESTAURENT_SEARCH_API: _RESTAURENT__SEARCH_API__CONNECTION_STRING,
    ORDER_API: _ORDER_API__CONNECTION_STRING

}