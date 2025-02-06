import mysql from "serverless-mysql"

const db = mysql({
  config: {
    host: process.env.CLEVER_CLOUD_HOST,
    port: Number.parseInt(process.env.CLEVER_CLOUD_PORT || "3306"),
    database: process.env.CLEVER_CLOUD_DATABASE,
    user: process.env.CLEVER_CLOUD_USER,
    password: process.env.CLEVER_CLOUD_PASSWORD,
  },
})

export default async function executeQuery({ query, values }: { query: string; values: any[] }) {
  try {
    const results = await db.query(query, values)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}

