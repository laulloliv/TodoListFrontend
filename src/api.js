import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8090/api'
})

export default api

// const api = axios.create({
//   baseURL: 'http://localhost:8090/api'
// })

// const api = 'http://localhost:8090/api/'
// export const getTarefas = () => {
//   api
//     .get('/tarefas')
//     .then(response => {
//       const data = response.data
//       // eslint-disable-next-line no-undef
//       renderApiResult.textContent = JSON.stringify(data)
//       return data
//     })
//     .catch(error => console.log(error))
// }

// export async function getTarefas() {
//   let res = await axios.get('http://localhost:8090/api/tarefas')
//   let data = res.data
//   return data
// }
