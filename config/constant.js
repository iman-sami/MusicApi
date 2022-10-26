import dotenv from 'dotenv';
dotenv.config()

// add constant values here
export const {
PORT,
MongoURL,
JWTSECRET,
JWTEXPIRE
} = process.env