export type ContactType = {
  id_persona: number,
  apellido: string,
  nombre: string,
  telefono: string,
  id_provincia: number,
  provincia?: string
}

export type ProvinceType = {
  id_provincia: number,
  nombre_provincia: string
}
