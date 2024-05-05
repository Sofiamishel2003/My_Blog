import { useState } from 'react';
import { useApi } from "../hooks/api/useApi";
import useNavigate from "../hooks/HOC/useNavigate";
import LoadingScreen from './LoadingScreen';
import Swal from 'sweetalert2';
import Button from "../components/Button";
import '../styles/Login.css';

const Register = () => {
    const { addUser, loading } = useApi();
    const { navigate } = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            // eslint-disable-next-line no-debugger
            debugger;
            if (password !== confirmPassword) {
                setErrorMessage('Las contraseñas no coinciden.');
                return;
            }

            const response = await addUser(username, password);
            if (response.ok) {
                // eslint-disable-next-line no-debugger
                debugger;
                Swal.fire({
                    title: '¡Usuario ingresado!',
                    text: 'Ya puedes hacer login en el blog.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    navigate('/login');
                });
            } else {
                setErrorMessage('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            setErrorMessage('Error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            <h1>Registrarse</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form id="register-form" onSubmit={handleSubmit}>
                <input type="text" id="username-register" placeholder="Nombre de usuario" value={username} required onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" id="password-register" placeholder="Contraseña" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" id="confirm-password-register" placeholder="Confirmar contraseña" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button type="submit" disabled={loading || isSubmitting} texto="Registrarse" />

            </form>
            {loading && <LoadingScreen />}
        </div>
    );
};

export default Register;