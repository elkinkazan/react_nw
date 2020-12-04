import * as axios from 'axios';


const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "c4d1eb34-79eb-4d2a-8e92-aada00798e5c"
        }
});

export const usersAPI = {
  getUsers(count = 1, page = 10){
              return instance.get(`users?count=${count}&page=${page}`)
              .then(response=> {return response.data})
  },
  unfollow(id){
    return instance.delete(`follow/${id}`)
         .then(response=>{return response.data})
  },
  follow(id){
    return instance.post(`follow/${id}`)
            .then(response=>{return response.data})
  }
}
