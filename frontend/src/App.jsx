import { createContext, useContext, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Sanrose");
  return (
    <UserContext value={{user,setUser}}>
      <Layout/>
    </UserContext>
  );
}

export default App;



function Layout() {
  return <Sidebar/>;
}
function Sidebar() {
  return <Profile/>;
}

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const usrRef = useRef(null);
  const handler = () => {
  setUser(usrRef.current.value)
}
  return (
    <>
      <h1> Profile </h1>
      <p>User: {user}</p>
      <input 
        name="user"
        id="usr"
        placeholder="Username"
        defaultValue={user}
        // onChange={e=>setUser(e.target.value)}
        ref = {usrRef}
      />
      <button onClick={handler} type="button">Update </button>
      {user.length < 6 && <p>User name is too short</p>}
    </>
  );
}
