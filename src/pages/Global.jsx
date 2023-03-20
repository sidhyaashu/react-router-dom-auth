import { AuthConsumer  } from "../hooks/Auth"
import { useNavigate ,useLocation,Navigate} from "react-router-dom"


export const Home=()=>{

    return(
        <div>
            <p>Home Component</p>
        </div>
    )
}
export const Setting=()=>{
    const [authed,dispatch] = AuthConsumer()
    console.log('Logout-->',authed)

    const navigate = useNavigate()

    return(
        <div>
            <p>Setting Component</p>
            <button onClick={()=>{dispatch({type:'LOGOUT'}), navigate('/')}} >LOGOUT</button>
        </div>
    )
}
export const Dashboard=()=>{
    
    return(
        <div>Dashboard Component</div>
    )
}
export const Login=()=>{
    const [authed,dispatch] = AuthConsumer()
    console.log('Login-->',authed)
    const navigate = useNavigate()
    return(
        <div>
            <p>Login Component</p>
            <button onClick={()=>{dispatch({type:'LOGIN'}),navigate('/dashboard',{replace:true})}} >LOGIN</button>
        </div>
    )
}

export const RequireAuth =({children})=>{
    const [authed] = AuthConsumer()
    const location = useLocation()
    return authed.auth?(
        children
    ):(
        <Navigate to={'/login'} replace state={{path:location.pathname}} ></Navigate>
    );
        
}