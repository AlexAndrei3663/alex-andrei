import axios from 'axios';

export async function listService(props) {
    return axios.get("http://localhost:4000/questao")
}