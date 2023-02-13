import React from "react";
import { Navbars,
    Span,
    NavLink,
    LogoLink,
    LinkContainer } from "./styles";

//hooks
import { useAuthentication} from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

const Navbar = () => {
    const {user} = useAuthValue();
    const {logout} = useAuthentication();

    return (
        <>
        <Navbars>
        <LogoLink to="/">
            Mini <Span>blog</Span>
        </LogoLink>

        <LinkContainer>
            <li>
        <NavLink to="/"
        > Home</NavLink>
        </li>

        {!user && (
            <>
        <li>
        <NavLink to="/login"
        > Login</NavLink>
        </li>

        <li>
        <NavLink to="/register"
        > Register</NavLink>
        </li>
        </>
        )}

        {user && (
            <>
              <li>
        <NavLink to="/posts/create"
        > New Post</NavLink>
        </li>

        <li>
        <NavLink to="/dashboard"
        > Dashboard</NavLink>
        </li>
            
            </>

        )}

        <li>
        <NavLink to="/about"
         > About </NavLink>
        </li>

        {user && (

            <li>
                <button onClick={logout}> Logout </button>
            </li>
        )}

        </LinkContainer>
        </Navbars>

        </>
    );
};

export default Navbar;