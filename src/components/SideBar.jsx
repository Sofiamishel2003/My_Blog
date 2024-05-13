import useNavigate from "../hooks/HOC/useNavigate";
import { useApi } from "../hooks/api/useApi";
import '../styles/SideBar.css';

const Sidebar = () => {
    const { navigate } = useNavigate();
    const { isLoggedIn } = useApi();
    return (
        
        <><div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Blog Cetaceos</h3>
                </div>
                {isLoggedIn ? (
                    <><ul className="list-unstyled components">
                        <li>
                            <a onClick={() => navigate('/')}>Cetaceos</a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/post')}>+ Post</a>
                        </li>
                        <li>
                            <a  onClick={() => navigate('/user')}>Usuario</a>
                        </li>
                    </ul><ul className="list-unstyled CTAs">
                            <li>
                                <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Logout</a>
                            </li>
                        </ul></>
                ) : (
                    <div className="login-message">
                        <h1>INGRESA SESION</h1>
                    </div>
                )}
            </nav>
            </div></>
    )
}

export default Sidebar;