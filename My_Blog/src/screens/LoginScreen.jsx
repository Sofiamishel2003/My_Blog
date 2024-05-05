import { useApi } from "../hooks/api/useApi";
import { useState } from "react";
import useToken from "../hooks/useToken";
import useNavigate from "../hooks/HOC/useNavigate";
import Button from "../components/Button";
import '../styles/Login.css';



const Login = () => {
    const { userLogin, loading, setIsLoggedIn } = useApi();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { navigate } = useNavigate();
    const { setToken } = useToken(); 
    const [isSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmitLogin = async () => {
        try {
            //debugger;
            const response = await userLogin(usuario, password);
    
            if (response.ok) {
                const { access_token } = await response.json();
                setToken(access_token);
                setIsLoggedIn(true);
                navigate('/');
                window.location.href = '/'; 
                return;
            } 
        } catch (error) {
            setErrorMessage('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            {
                errorMessage !== '' ? (
                    <div onClick={() => setErrorMessage('')}>
                        {errorMessage}
                    </div>
                ) : null
            }
            <form onSubmit={handleSubmitLogin}>
                <input type="text" id="usuario-login" placeholder="Usuario" value={usuario} required onChange={(value) => setUsuario(value.target.value)} className="inputClasses" />
                <input type="password" id="password-login" placeholder="Contraseña" value={password} required onChange={(value) => setPassword(value.target.value)} className="inputClasses" />
                <Button type="submit" disabled={loading || isSubmitting} texto="Iniciar Sesión" />
            </form>
            <p>¿Nuevo por aquí?<br/><a href="/?#/register" onClick={() => navigate('/register')} className="linkClasses">Registrarse</a></p>
        </div>
        
    );
};

Login.propTypes = {
}

export default Login;