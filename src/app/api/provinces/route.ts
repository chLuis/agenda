import { NextResponse } from "next/server";
import { client } from "@/lib/db";

export async function GET() {
  try {
    const response = await client.execute('SELECT * from provincias')
    return NextResponse.json({ status: 200, payload: response.rows })
  }
  catch (error) {
    return NextResponse.json({ status: 500, payload: error })
  }
}