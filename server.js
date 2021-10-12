const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

//process.env->set by node->tai sob jaygay use kora jabe

mongoose.connect('mongodb://localhost:27017/my-students-2')
    .then(() => console.log('connect to mongodb'))
    .catch(err => console.log(err.message))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`port ${port} is running`);
});

