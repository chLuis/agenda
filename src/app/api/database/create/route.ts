import { NextResponse } from "next/server";
import { client } from "@/lib/db";

export async function GET() {
  try {
    await client.executeMultiple(`
      CREATE TABLE IF NOT EXISTS provincias(
      id_provincia INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre_provincia VARCHAR(32) UNIQUE NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS personas(
      id_persona INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre VARCHAR(32),
      apellido VARCHAR(32),
      telefono VARCHAR(20) UNIQUE,
      id_provincia INTEGER NOT NULL,
      FOREIGN KEY (id_provincia) REFERENCES provincias(id_provincia)
    );
    
    CREATE VIEW vista_agenda AS
    SELECT
      personas.id_persona AS id_persona,
      personas.apellido AS apellido,
      personas.nombre AS nombre,
      personas.telefono AS telefono,
      provincias.id_provincia AS id_provincia,
      provincias.nombre_provincia AS provincia
    FROM personas
    JOIN provincias ON personas.id_provincia = provincias.id_provincia
    ORDER BY LOWER(personas.apellido);
    `)
    return NextResponse.json({ status: 200})
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    console.log(error);
    return NextResponse.json({ status: 500, payload: error.message || error })
  }
}