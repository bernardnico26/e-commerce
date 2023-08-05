import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {useDispatch } from "react-redux"
import { setPostLogin } from "../store/slice/tokenSlice"

const Register =()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const loginUser =(data)=>{
        dispatch( setPostLogin(data)) 
        navigate("/article")         
    }
    return(
        <div>
            <form onSubmit={handleSubmit(loginUser)}>
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
                <button>continue</button>
            </form>
            <button onClick={()=>navigate("/register")}>register</button>
        </div>
    )
}
export default Register;