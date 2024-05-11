import { useApi } from '../hooks/api/useApi';
import useNavigate from '../hooks/HOC/useNavigate';
import { useAuth } from '../hooks/authProvider';
import Swal from 'sweetalert2';
import { useState } from 'react';
import '../styles/Form.css'

const MyFormComponent = () => {
    const { navigate } = useNavigate();
    const { user } = useAuth()
    const initialState = {
        title: '',
        information: '',
        family: '',
        diet: '',
        funfact: '',

    };
    const { addPost, loading, error } = useApi(); // Usa el hook useApi para obtener la función addPost
    const [formData, setFormData] = useState(initialState); // Estado para los datos del formulario

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost( user.id, user.username, formData); // Envía los datos del formulario usando addPost
            setFormData(initialState); 
            Swal.fire({
                title: '¡Post Agregado!',
                text: 'El post se ha agregado exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                navigate('/');
            });
        } catch (error) {
            console.error('Error al crear el post:', error);
        }
    };

    return (
        <div className="login-container">
             <div className="row d-flex justify-content-center">
                    <h3>Crear un nuevo Post</h3>
                    <div className="card">
                        <h5 className="text-center mb-4">Ingrese los la nueva información</h5>
                        {loading && <p>Cargando...</p>}
                        {error && <p>Error: {error}</p>}
                        <form className="form-card" onSubmit={handleSubmit}>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nombre<span className="text-danger"> *</span></label> <input type="text" name="name" value={formData.title} onChange={handleChange} required  placeholder="Delfin Rosado" /></div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Familia<span className="text-danger"> *</span></label> <input type="text" name="family" value={formData.family} onChange={handleChange} required placeholder="Delfinea"/></div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Dieta<span className="text-danger"> *</span></label> <input type="text" name="Diet" value={formData.diet} onChange={handleChange} required  placeholder="peces pequeños como el arenque, el bacalao o la macarela"/></div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Funfact<span className="text-danger"> *</span></label> <input type="text" name="funfact" value={formData.funfact} onChange={handleChange} required placeholder="Ej: A los delfines les gusta drogarse con peces globo" /></div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">information<span className="text-danger"> *</span></label> <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="" /></div>
                            </div>
                            <br></br>
                            <div className="row justify-content-center">
                                <div> <button type="submit" className="btn-block btn-primary">Crear Post</button> </div>
                            </div>
                        </form>
                </div>
            </div>
        </div>
        
    );
};
export default MyFormComponent;