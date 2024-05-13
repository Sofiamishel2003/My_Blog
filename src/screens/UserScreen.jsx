import '../styles/User.css'; 
import useNavigate from '../hooks/HOC/useNavigate';
import Swal from 'sweetalert2';

const User = () => {
    const { navigate } = useNavigate();
  
    const handleLogout = () => {
      localStorage.clear(); 
      Swal.fire({
          title: '¡Logout Exitoso!',
          text: 'Te has desconectado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
      }).then(() => {
          navigate('/login'); 
          window.location.href = '/?#/login'; 
      });
  };
  
    return (
      <div className="user-container">
        <div className="user-details">
          <h2 className="user-name">John Doe</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  };

export default User;