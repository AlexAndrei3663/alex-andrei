import axios from 'axios';

export async function listService() {
    return axios.get("http://192.168.0.59:4000/questao")
}