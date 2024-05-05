import { useState, useEffect } from 'react';
import { fetchPosts, fetchPostById, createPost, deletePostById, updatePostById, login, register } from './api';

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

    const addPost = async (postData) => {
        setLoading(true);
        try {
            const { title, sinopsis, gender } = postData; 
            const responseData = await createPost(title, sinopsis, gender);
            setData([...data, responseData]);
        } catch (error) {
            setError('Error al crear el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const removePost = async (postId) => {
        setLoading(true);
        try {
            await deletePostById(postId);
            setData(data.filter(post => post.id !== postId)); // Eliminar el post de la lista actual
        } catch (error) {
            setError('Error al eliminar el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const updatePost = async (postId, updatedData) => {
        setLoading(true);
        try {
            //debugger;
            const { title, sinopsis, gender } = updatedData;
            const responseData = await updatePostById(postId, title, sinopsis, gender);
            setData(data.map(post => (post.id === postId ? responseData : post))); // Actualizar el post en la lista actual
        } catch (error) {
            setError('Error al actualizar el post. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const userLogin = async (usuario, password) => {
        //debugger;
        setLoading(true);
        try {
            const response = await login(usuario, password);
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            return response;
        } catch (error) {
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const addUser = async (usuario, password) => {
        setLoading(true);
        try {
            const response = await register(usuario, password);
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            return response;
        } catch (error) {
            setError('Error al crear el usuario.');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchPost, addPost, removePost, updatePost, userLogin, addUser, isLoggedIn, setIsLoggedIn };
};
