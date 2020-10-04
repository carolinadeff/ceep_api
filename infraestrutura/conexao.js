require('dotenv').config();

const {Pool} = require('pg');
const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
    connectionString: `postgres://lofzumnahjspvm:8b84818287cf12dd4801e9a795b2547465cbc6270a8978a01067d0605c5b2e79@ec2-35-169-92-231.compute-1.amazonaws.com:5432/d6u7mvlnn6sq25`
    ssl: isProduction
})

module.exports = { pool }

// isProduction ? process.env.DATABASE_URL : connectionString,