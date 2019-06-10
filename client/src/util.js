import axios from 'axios'

export function getUsers(){
    return axios.get('/users')
      .then(users => console.log(users.data))
}

export function getRandomNumber(){
    return axios.post('/number')
      .then(results => console.log(results.data))
}