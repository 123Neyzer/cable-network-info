import { NextResponse } from "next/server"
import executeQuery from "@/lib/db"

export async function GET() {
  try {
    const result = await executeQuery({
      query: "SELECT NOW() as now",
      values: [],
    })

    if ("error" in result) {
      throw new Error("Failed to query database")
    }

    return NextResponse.json({ currentTime: result[0].now }, { status: 200 })
  } catch (error) {
    console.error("Database connection error:", error)
    return NextResponse.json({ error: "Failed to connect to the database" }, { status: 500 })
  }
}

