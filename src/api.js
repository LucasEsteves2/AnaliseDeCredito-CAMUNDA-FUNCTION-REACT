import axios from "axios";

const token = localStorage.getItem('token')

export const api = axios.create({
    baseURL: 'http://localhost:7071/api/StartAnalise',
    headers: { 'Authorization': token }
})


export const buscar = async (url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)

    console.log(resposta.data)

}