import { useApi } from '../hooks/api/useApi';
import useNavigate from '../hooks/HOC/useNavigate';
import Swal from 'sweetalert2';
import { useState } from 'react';
import '../styles/Form.css'

const MyFormComponent = () => {
    const { navigate } = useNavigate();
    const initialState = {
        name: '',
        description: '',
        family: '',
        diet: '',
        funfact: ''

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
            await addPost(formData); // Envía los datos del formulario usando addPost
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
        <div>
            <h2>Agregar Nuevo Post</h2>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Familia:</label>
                    <input type="text" name="family" value={formData.family} onChange={handleChange} required />
                </div>
                <div>
                    <label>Dieta:</label>
                    <input type="text" name="Diet" value={formData.Diet} onChange={handleChange} required />
                </div>
                <div>
                    <label>Funfact:</label>
                    <input type="text" name="funfact" value={formData.funfact} onChange={handleChange} required />
                </div>
                <button type="submit">Agregar Post</button>
            </form>
        </div>
        
    );
};
export default MyFormComponent;