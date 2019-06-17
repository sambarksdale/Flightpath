import axios from 'axios'

export function getUsers(){
  return axios.get('/users')
    .then(users => console.log(users.data))
}

export function getRandomNumber(){
  return axios.post('/number')
    .then(result=>console.log(result.data))
}

export function cricketGameDetail(data){
  return axios.post('/cricket/details', data)
}

export function getDetails(game_id){
  return axios.get(`/cricket/details/${game_id}`)
    .then(results=>results.data)
}

export function authenticateUser(user){
  return axios.post('/users/auth',user)
    .then(user=>user.data)
}

export function newUser(user){
  return axios.post('/users', user)
    .then(user=>user.data)
}

export function getUserById(id){
  return axios.get(`/users/${id}`)
    .then(user=>user.data)
}

export function updateUser(id, data){
  return axios.put(`/users/${id}`, data)
    .then(user=>user.data)
}

export function deleteUserById(id){
  return axios.delete(`/users/${id}`)
}

export function newGame(game){
  console.log(game)
  return axios.post('/games', game)
    .then(game_id=> game_id.data)
}

export function getTableData(user_id){
  return axios.post('/games/table', user_id)
    .then(tableData=>tableData.data)
}

