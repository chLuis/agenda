'use server'
import axios from "axios";
import { revalidatePath } from "next/cache";

const URL =  process.env.NEXT_PUBLIC_API_URL

export async function GetDataAction({province}: {province: string}) {
  try {
    const { data } = await axios.get(`${URL}/api/data?provincia=${province}`)
    return { status: data.status, payload: data.payload }
  }
  catch (error) {
    console.log(error);
    return { status: 400, payload: [] }
  }
}

export async function PostDataAction(contact: {apellido: string, nombre: string, telefono: string, id_provincia: number}) {
  try {
    const { data } = await axios.post(`${URL}/api/data`, contact)
    revalidatePath("/")
    return { status: data.status, payload: data.payload }
  }
  catch (error) {
    console.log(error);
    return { status: 400, payload: [] }
  }
}

export async function PatchDataAction(contact: {id_persona: number, apellido: string, nombre: string, telefono: string, id_provincia: number}) {
  try {
    const { data } = await axios.patch(`${URL}/api/data`, contact)
    revalidatePath("/")
    return { status: data.status, payload: data.payload }
  }
  catch (error) {
    console.log(error);
    return { status: 400, payload: [] }
  }
}

export async function DeleteDataAction(contact:{id_persona: number}) {
  try {
    const { data } = await axios.delete(`${URL}/api/data`,  {
      data: contact,
    });
    revalidatePath("/")
    return { status: data.status, payload: data.payload }
  }
  catch (error) {
    console.log(error);
    return { status: 400, payload: [] }
  }
}