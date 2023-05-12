const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './backend/config/config.env' });
PORT = process.env.PORT;

const DB = process.env.db_con;
//mongoose.connect(DB, () => console.log('Databse connected'));
mongoose
  .connect(DB)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error connecting to database', err));
app.listen(PORT, () => console.log('server is running on ${PORT}'));
