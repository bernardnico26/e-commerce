
import {useForm} from "react-hook-form"
import "../style/login.css"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setPostRegister } from "../store/slice/tokenSlice"
const Login =()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const registerUser =(data)=>{
        dispatch( setPostRegister(data))
        navigate("/login")
    }
        return(
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <label htmlFor="first__name">First name</label>
                    <input 
                        type="text" 
                        id="first__name"
                        {...register("firstName", {required: true})}
                    />
                    <label htmlFor="last__name">Last name</label>
                    <input 
                        type="text" 
                        id="last__name"
                        {...register("lastName", {required: true})}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        {...register("email", {required: true})}    
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        {...register("password", {required: true})}
                    />
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="number" 
                        id="phone"
                        {...register("phone", {required: true})}
                    />
                    <button>continue</button>
                </form>
                <button  onClick={()=>navigate("/login")}>login</button>
            </div>
        )
}
export default Login;