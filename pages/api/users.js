import { sql_query } from "../../lib/database";

const handler = async (_, res) => {
  try {
    const result = await sql_query(`SELECT * FROM register_users`);
    return res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default handler;
