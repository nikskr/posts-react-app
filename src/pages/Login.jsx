import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/context";
import Posts from "./Posts";

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    function login(e) {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <>
            { isAuth 
                ? 
                    <Posts />
                : 
                    <div>
                        <form onSubmit={login}>
                            <MyInput type="text" placeholder="Login" />
                            <MyInput type="password" placeholder="Password" />
                            <MyButton>Enter</MyButton>
                        </form>
                    </div>
            }
        </>      
     );
}

export default Login;