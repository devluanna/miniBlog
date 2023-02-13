// hooks
import { TitlePage, Containers, DivBtn } from "./styles";

//components
import ButtonDefault from "../../components/Buttons";

//hooks
import { useAuthentication } from "../../hooks/useAuthentication";
import {useState, useEffect} from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {login, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password,
        };


        const res = await login(user);

        console.log(res);
    };

    useEffect(() => {
        if(authError) {
            setError(authError);
        }
    }, [authError]);



    return (
        <>
       <Containers>
        <TitlePage>Login</TitlePage>
        <p>Log in to share your stories!</p>
        <form onSubmit={handleSubmit}>


            <label>
                <span>E-mail:</span>
                <input type="email"
                name="email"
                required
                placeholder="User email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label>
                <span>Password:</span>
                <input type="password"
                name="password"
                required
                placeholder="Enter your password."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>


            <DivBtn>
             <center>
            {!loading && <ButtonDefault type={"dark"} name={"Sign in"}/>}
            {loading && (
            <ButtonDefault type={"confirm"} name={"Logging in..."}/>
            )}
            {error && <p className="error">{error}</p>}
            </center>
            </DivBtn>
        </form>
        </Containers>
        </>
    );
};

export default Login;