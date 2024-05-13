import useNavigate from "../hooks/HOC/useNavigate";
import '../styles/SideBar.css';

const Sidebar = () => {
    const { navigate } = useNavigate();
    return (
        
        <><div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3> </h3>
                </div>
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
                        </ul></>
                
            </nav>
            </div></>
    )
}

export default Sidebar;