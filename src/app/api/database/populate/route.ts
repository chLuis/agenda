import { NextResponse } from "next/server";
import { client } from "@/lib/db";

export async function GET() {
  try {
    await client.executeMultiple(`
    INSERT INTO provincias (nombre_provincia) VALUES
      ('Buenos Aires'),
      ('Catamarca'),
      ('Chaco'),
      ('Chubut'),
      ('Córdoba'),
      ('Corrientes'),
      ('Entre Ríos'),
      ('Formosa'),
      ('Jujuy'),
      ('La Pampa'),
      ('La Rioja'),
      ('Mendoza'),
      ('Misiones'),
      ('Neuquén'),
      ('Río Negro'),
      ('Salta'),
      ('San Juan'),
      ('San Luis'),
      ('Santa Cruz'),
      ('Santa Fe'),
      ('Santiago del Estero'),
      ('Tierra del Fuego'),
      ('Tucumán');

    INSERT INTO personas (nombre, apellido, telefono, id_provincia) VALUES
      ('Juan', 'Pérez', '1165487890', 1),
      ('María', 'Gómez', '1132456789', 2),
      ('Carlos', 'Ramírez', '1145781234', 3),
      ('Lucía', 'Fernández', '1178945632', 4),
      ('Pedro', 'López', '1123456789', 5),
      ('Sofía', 'Martínez', '1167891234', 6),
      ('Diego', 'Suárez', '1189123456', 7),
      ('Laura', 'Torres', '1133567890', 8),
      ('Martín', 'Díaz', '1144456677', 9),
      ('Ana', 'Silva', '1122893344', 10),
      ('Javier', 'Méndez', '1177123456', 11),
      ('Camila', 'Ruiz', '1199988877', 12),
      ('Federico', 'Alvarez', '1188887766', 13),
      ('Valentina', 'Sosa', '1122233344', 14),
      ('Mateo', 'Castro', '1133445566', 15);

    `)
    return NextResponse.json({ status: 200, message: "Database populate"})
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    console.log(error);
    return NextResponse.json({ status: 500, payload: error?.message || error })
  }
}