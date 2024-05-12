import { useState, useEffect } from 'react';
import { fetchPosts, fetchPostById, createPost, deletePostById, updatePostById, Login, register } from './api';

export const useApi = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
    });
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responseData = await fetchPosts();
                setData(responseData);
            } catch (error) {
                setError('Error de comunicación con el API. Por favor, inténtalo de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchPost = async (postId) => {
        setLoading(true);
        try {
            const responseData = await fetchPostById(postId);
            return responseData;
        } catch (error) {
            setError('Error al obtener el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const addPost = async (authToken,author_id,author_name,postData) => {
        setLoading(true);
        try {
            const { title, information, family, diet, funfact } = postData; 
            const responseData = await createPost(authToken,title, information,author_id, author_name , family, diet, funfact);
            setData([...data, responseData]);
        } catch (error) {
            setError('Error al crear el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const removePost = async (authToken,postId) => {
        setLoading(true);
        try {
            await deletePostById(authToken,postId);
            setData(data.filter(post => post.id !== postId)); // Eliminar el post de la lista actual
        } catch (error) {
            setError('Error al eliminar el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const updatePost = async (authToken,postId, updatedData) => {
        setLoading(true);
        try {
            const {  title, information, family, diet, funfact} = updatedData;
            const responseData = await updatePostById(authToken,postId,  title, information, family, diet, funfact);
            setData(data.map(post => (post.id === postId ? responseData : post))); // Actualizar el post en la lista actual
        } catch (error) {
            setError('Error al actualizar el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const userLogin = async (login,username, password) => {
        setLoading(true);
        try {
            const response = await Login(login,username, password);
            return response;
        } catch (error) {
            console.log(error)
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const addUser = async (username, password, email) => {
        setLoading(true);
        try {
            const response = await register(username, password, email);
            return response;
        } catch (error) {
            setError('Error al crear el usuario.');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchPost, addPost, removePost, updatePost, userLogin, addUser, isLoggedIn, setIsLoggedIn };
};
