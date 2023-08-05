const saveLocalStora =(data)=>{
    localStorage.setItem("userToken", JSON.stringify(data));
}
export default saveLocalStora;