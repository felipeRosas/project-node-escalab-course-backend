const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log('Database connected!')
    } catch (error) {
        console.log('Database connection error ', error)
        process.exit(1)
    }
}

module.exports = connectDB