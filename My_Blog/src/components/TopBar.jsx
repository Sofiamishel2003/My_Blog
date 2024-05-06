import logo from '../assets/orcas.gif';
import '../styles/TopBar.css'; 

const TopBar = () => {
    return (
        <div className="top-bar-container">
            <div className="top-bar">
                <div className="logo">
                    <img src={logo} alt="Logo del blog" />
                </div>
                <div className="blog-name">
                    Mundo Cétaceo
                </div>
            </div>
        </div>
    );
}

export default TopBar;
