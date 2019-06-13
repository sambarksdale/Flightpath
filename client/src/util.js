import axios from 'axios'

export function getUsers(){
  return axios.get('/users')
    .then(users => console.log(users.data))
}

export function getRandomNumber(){
  return axios.post('/number')
    .then(results => console.log(results.data))
}

export function cricketGameDetail(data){
  return axios.post('/cricket/details', data)
}

export function getGamesByUser(id){
  return axios.post('/games', id)  
}

export function authenticateUser(user){
  return axios.post('/users/auth',user)
    .then(user=>user.data)
}

export function newUser(user){
  return axios.post('/users', user)
    .then(user=>user.data)
}

