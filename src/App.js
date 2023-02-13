import {Section} from "./styles/GlobalStyle";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";


//hooks
import React, {useState, useEffect} from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// context
import { AuthProvider } from "./context/AuthContext";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search/Search";
import EditPost from "./pages/EditPost/EditPost";

// Pages user
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";

//components
import Navbar from "./components/Nabvar"
import Footer from "./components/Footer"
import Post from "./pages/Post/Post";


function App() {
const [user, setUser] = useState(undefined);
const {auth} = useAuthentication();

const loadingUser = user === undefined;

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

}, [auth]);

if(loadingUser) {
  return <p>Loading...</p>;
}

  return (
    <>
    <div className="App">
   <AuthProvider value={{user}}>
   <BrowserRouter>
    <Navbar />

    <Section>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/posts/:id" element={<Post />} />

            <Route path="/login"
            element={!user ?
            <Login/> : <Navigate to="/" />} />

            <Route path="/register"
            element={!user ?
            <Register /> : <Navigate to="/" />} />
               
            <Route path="/posts/edit/:id"
            element={user ?
            <EditPost/> : <Navigate to="/edit" />} />

            <Route path="/posts/create"
            element={user ?
            <CreatePost/> : <Navigate to="/login" />} />

            <Route path="/dashboard"
            element={user ?
            <Dashboard/> : <Navigate to="/login" />} />
            
          </Routes>

          </Section>
          <Footer />
      </BrowserRouter>
   </AuthProvider>
      
      </div>
      
    </>
  );
}

export default App;
