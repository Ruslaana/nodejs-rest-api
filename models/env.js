import dotenv from 'dotenv';
dotenv.config();

const env = {  
  DB_HOST: process.env.DB_HOST,
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default env;