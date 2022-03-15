import axios from 'axios';

export async function submitService(questao) {
    return await axios.post("http://192.168.0.59:4000/questao", questao)
}