/* eslint-disable no-debugger */
import { useState, useEffect } from 'react';
import { useApi } from '../hooks/api/useApi';
import useNavigate from '../hooks/HOC/useNavigate';
import Swal from 'sweetalert2';
import '../styles/PostInfo.css';

const Postdetail = () => {
    const postId = localStorage.getItem('postId');
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [setError] = useState(null);
    const { navigate } = useNavigate();
    const { fetchPost, removePost, updatePost } = useApi();
    const [updatedPostData, setUpdatedPostData] = useState({
        name: '',
        description: '',
        family: '',
        diet: '',
        funfact: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responseData = await fetchPost(postId);
                setPost(responseData);

                // Asignar todos los campos correctamente
                const { name, description, family, diet, funfact } = responseData;
                if (name && description && family && diet && funfact) {
                    setUpdatedPostData({ name, description, family, diet, funfact });
                } else {
                    setError('Datos incompletos del post');
                }
            } catch (error) {
                setError('Error al obtener el post. Por favor, inténtalo de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: '¿Estás seguro de que deseas eliminar este post?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo'
        });
    
        // Si el usuario confirma la eliminación
        if (result.isConfirmed) {
            try {
                await removePost(postId);
                Swal.fire('Eliminado', 'El post ha sido eliminado correctamente', 'success');
                navigate('/');
            } catch (error) {
                setError('Error al eliminar el post. Por favor, inténtalo de nuevo más tarde.');
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedPostData({ ...updatedPostData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            await updatePost(postId, updatedPostData);
            Swal.fire({
                title: '¡Post Actualizado!',
                text: 'El post se ha actualizado exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                navigate('/');
            });
        } catch (error) {
            setError('Error al actualizar el post. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }


    if (!post) {
        return <div>No se encontró el post.</div>;
    }

    return (
        <div className='container'>
            <div className='post-details'>
                <h1>{post.name}</h1>
                <p>{post.description}</p>
                <p>Familia: {post.family}</p>
                <p>Dieta: {post.diet}</p>
                <p>FunFact: {post.funfact}</p>
                <br></br>
                <textarea
                    type="text"
                    name="name"
                    placeholder="Nuevo título"
                    value={updatedPostData.name}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    name="description"
                    placeholder="Nueva descripción"
                    value={updatedPostData.description}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    name="family"
                    placeholder="Nueva familia"
                    value={updatedPostData.family}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    name="diet"
                    placeholder="Nueva dieta"
                    value={updatedPostData.diet}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    name="funfact"
                    placeholder="Nuevo Fun Fact"
                    value={updatedPostData.funfact}
                    onChange={handleChange}
                />

                <button onClick={handleDelete}>Eliminar</button>
                <button onClick={handleUpdate}>Actualizar</button>
            </div>
        </div>
    );
};

export default Postdetail;
