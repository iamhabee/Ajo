import {history} from '../history'
const user = JSON.parse(localStorage.getItem("user"))
const token = user && user.token
const baseurl = "http://142.93.152.229/ajo/api/"
const loginurl ="auth/login";
const registerurl ="auth/register";
const fetchGroup = "fetch_group?token="+token

function authHeader() {
  if (user) {
      return { 'authorization': token };
  } 
  return {}
}

  export const login = (email, password) =>{
    const requestOptions={
      method:"POST",
      body:JSON.stringify({email, password}),
      headers:{
        "Content-Type":"application/json",
        // "Authorization":"Bearer" +token
      }
    }
    fetch(baseurl+loginurl, requestOptions)
    .then(async res=>{
      const data = await res.json()
      if(data.status){
        localStorage.setItem("user", JSON.stringify(data))
        history.push("/")
        console.log(data)
      }else{
        alert(data.message)
      }
    })
    .catch(err=>console.log(err))
  }

  export const register =(data) =>{
    const requestOptions={
        method:"GET",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json",
        }
      }
    fetch(baseurl+registerurl, requestOptions)
    .then(async res=>{
      const data = await res.json()
      if(data.status){
        history.push("/login")
      }else{
        alert(data.message)
      }
    })
    .catch(err=>{
        alert(err)
    })
  }

  export const fetchAllGroup =(data) =>{
    const requestOptions={
        method:"GET",
        body:JSON.stringify(data),
        headers:{...authHeader(), "Content-Type":"application/json"}
      }
    fetch(baseurl+fetchGroup, requestOptions)
    .then(handleResponse)
  }

  function handleResponse(response) {
    return response.text().then((text) => {
      let data = "";
      try {
        data = text && JSON.parse(text);
      } catch (error1) {
        // ...
      }
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        if (error === "unauthorized") {
          logout()
          history.push("/login");
        }
        return Promise.reject(error);
      }
      return data;
    }).catch(err => err)
  }

  export const logout = () =>{
    console.log("logout")
    localStorage.removeItem("user");
    history.push("/login")
  }