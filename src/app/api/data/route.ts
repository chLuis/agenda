import { NextResponse } from "next/server";
import { client } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const filter = searchParams.get('provincia')
  if(!filter) {

    try {
      const result = await client.execute(`SELECT * from vista_agenda`)
      return NextResponse.json({ status: 200, payload: result.rows })
    }
    catch (error) {
      return NextResponse.json({ status: 500, payload: error })
    }
  }
   try {
      const result = await client.execute(`SELECT * from vista_agenda WHERE LOWER(provincia) = LOWER('${filter}')`)
      return NextResponse.json({ status: 200, payload: result.rows })
    }
    catch (error) {
      return NextResponse.json({ status: 500, payload: error })
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(contact: any) {
  const body = await contact.json()
  try {
    const { nombre, apellido, telefono, id_provincia} = body
    const result = await client.execute(`
      INSERT INTO personas (nombre, apellido, telefono, id_provincia)
      VALUES ('${nombre}', '${apellido}', '${telefono}', ${id_provincia})
    `)
    return NextResponse.json({ status: 201, payload: result })
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, payload: error })
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PATCH(contact: any) {
  const body = await contact.json()
  try {
    const { nombre, apellido, telefono, id_provincia, id_persona} = body
    const result = await client.execute(`
      UPDATE personas SET
      nombre = '${nombre}',
      apellido = '${apellido}',
      telefono = '${telefono}',
      id_provincia = ${id_provincia}
      WHERE id_persona = ${id_persona}
    `)
    return NextResponse.json({ status: 200, payload: result })
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, payload: error })
  }
}

export async function DELETE(req: Request) {
const body = await req.json();
  try {
    const { id_persona } = body
    const result = await client.execute(`
      DELETE FROM personas WHERE id_persona = ${id_persona}
    `)
    return NextResponse.json({ status: 200, payload: result })
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, payload: error })
  }
}