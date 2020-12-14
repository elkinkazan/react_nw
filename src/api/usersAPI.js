import * as axios from 'axios';


const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "045d7b64-e7f8-434a-bbc2-c29ecf72f41a"
        }
});

export const usersAPI = {
  getUsers(count = 1, page = 10){
              return instance.get(`users?count=${count}&page=${page}`)
              .then(response=> {if (response.status===200) {return response.data}})
  },
  unfollow(id){
    return instance.delete(`follow/${id}`)
         .then(response=>{if (response.data.resultCode===0) { console.log(id); return response.data}
                           else (console.log(id))})
  },
  follow(id){
    return instance.post(`follow/${id}`)
            .then(response=>{ if (response.data.resultCode===0) {return response.data}})
  }
}
