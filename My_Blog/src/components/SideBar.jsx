import { useState } from "react";
import useNavigate from "../hooks/HOC/useNavigate";
import { useApi } from "../hooks/api/useApi";
import '../styles/SideBar.css';

const Sidebar = () => {
    const [isHover] = useState(false);
    const { navigate } = useNavigate();
    const { isLoggedIn } = useApi();
    return (
        <aside className={`sidebar ${isHover ? 'active' : ''}`}>
            {isLoggedIn ? (
                <ul>
                    <li></li>
                    <li>
                        <a href="/" onClick={() => navigate('/')}>Home</a>
                    </li>
                    <li>
                        <a href="/#/post" onClick={() => navigate('/post')}>Upload</a>
                    </li>
                    <li>
                        <a href="/#/user" onClick={() => navigate('/user')}>User</a>
                    </li>
                </ul>
            ) : (
                <div className="login-message">
                    <h1>INGRESA SESION</h1>
                </div>
            )}
        </aside>
    )
}

export default Sidebar;