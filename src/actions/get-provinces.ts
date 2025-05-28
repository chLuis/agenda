import axios from "axios"

const URL =  process.env.NEXT_PUBLIC_API_URL

export default async function GetProvincesAction() {
  try {
    const { data } = await axios.get(`${URL}/api/provinces`)
    return { status: data.status, payload: data.payload }
  }
  catch (error) {
    console.log(error);
    return { status: false, payload: [] }
  }
}