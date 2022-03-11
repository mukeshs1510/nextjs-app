import mysql from "serverless-mysql";

export const database = mysql({
  config: {
    host: process.env.DB_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
});

export async function sql_query(quaryString, values = []) {
  try {
    const result = await database.query(quaryString, values);
    await database.end();
  } catch (error) {
    throw Error(error.message);
  }
}
