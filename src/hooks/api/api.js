const API_URL = 'https://cetaceans-blog-api.vercel.app';

export const fetchPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    console.log("respuesta",response)
    if (!response.ok) {
        throw new Error('Error al obtener los datos del API');
    }
    return response.json();
};

export const fetchPostById = async (id) => {
    const response = await fetch(`${API_URL}/post/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener el post del API');
    }
    return response.json();
};

export const createPost = async (authToken,title, information, author_id, author_name, family, diet, funfact) => {
    const response = await fetch(`${API_URL}/post`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${authToken}`

        },
        body: JSON.stringify({ title, information, author_id, author_name, family, diet, funfact })
    });
    if (!response.ok) {
        throw new Error('Error al crear el post en el API');
    }
    return response.json();
};

export const deletePostById = async (authToken,id) => {
    const response = await fetch(`${API_URL}/post/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
          }
    });
    if (!response.ok) {
        throw new Error('Error al eliminar el post del API');
    }
    return response.json();
};

export const updatePostById = async (authToken,id, title, information, family, diet, funfact) => {
    const response = await fetch(`${API_URL}/post/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`

        },
        body: JSON.stringify({ title, information, family, diet, funfact })
    });
    if (!response.ok) {
        throw new Error('Error al actualizar el post en el API');
    }
    return response.json();
};

export const Login = async (login,username, password) => {
     console.log("Patatas",login)
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password_md5:password })
    });
    const responseData = await response.json()
    if (response.status === 200) {
        localStorage.setItem('token', responseData.token)
        login(responseData.token, {
          username: responseData.username,
          role: responseData.role,
          id: responseData.id,
        })
      } else {
        console.log(responseData)
        throw new Error('The user or the password is incorrect!');
      }
    return response;
};

export const register = async (username, password, email) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password_md5: password }),
    });
    if (!response.ok) {
        throw new Error('Error al crear el post en el API');
    }
    return response;
};
