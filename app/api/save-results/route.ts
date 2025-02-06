import { NextResponse } from "next/server"
import executeQuery from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { latency, download, upload } = await request.json()

    const result = await executeQuery({
      query: "INSERT INTO network_tests (latency, download_speed, upload_speed) VALUES (?, ?, ?)",
      values: [latency, download, upload],
    })

    if ("error" in result) {
      throw new Error("Failed to insert data")
    }

    return NextResponse.json({ message: "Results saved successfully", id: result.insertId }, { status: 200 })
  } catch (error) {
    console.error("Error saving results:", error)
    return NextResponse.json({ error: "Failed to save results" }, { status: 500 })
  }
}

