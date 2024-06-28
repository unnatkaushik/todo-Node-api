import dotenv from "dotenv";
dotenv.config();

const config = {
  DBURL: process.env.DBURL,
};

export default config;
