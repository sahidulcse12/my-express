const express = require('express');
const app = express();
const studentRouter = require('./router/studentRouter');
const userRouter = require('./router/userRouter');
const authRouter = require('./router/authRouter');
const morgan = require('morgan');

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    //console.log('Development server')
    app.use(morgan('dev'))
}

app.use('/api/students', studentRouter);
app.use('/app/user', userRouter);
app.use('/app/auth', authRouter);


module.exports = app;