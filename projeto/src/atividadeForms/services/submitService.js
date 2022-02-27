import axios from 'axios';

export async function submitService(questao) {
    return await axios.post("http://localhost:4000/questao", questao)
}