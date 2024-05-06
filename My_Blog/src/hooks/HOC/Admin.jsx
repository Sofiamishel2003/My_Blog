import PropTypes from 'prop-types'
import '../../styles/Admin.css'

import useToken from '../../hooks/useToken'
import useNavigate from '../HOC/useNavigate'
import Sidebar from '../../components/SideBar'
import TopBar from '../../components/TopBar'

import Posts from '../../screens/PostScreen'
import Form from '../../components/Form'
import info from '../../screens/PostInfoScreen'
import User from '../../screens/UserScreen'
import Login from '../../screens/LoginScreen'
import Register from '../../screens/RegisterScreen'


const routes = {
    '/': {
        component: Posts,
        requiresAuth: true
    }, 
    '/post': {
        component: Form,
        requiresAuth: true
    },   
    '/user': {
        component: User,
        requiresAuth: true
    },
    '/login': {
        component: Login,
        requiresAuth: false
    },
    '/register': {
        component: Register,
        requiresAuth: false
    },
    '/post/:id': {
        component: info,
        requiresAuth: true
    },

}

const Pages = () => {
    const { token } = useToken() 
    const { page, navigate } = useNavigate()

    let CurrentPage = () => <h1>404</h1>
    
    if (routes[page] && routes[page].requiresAuth && !token) {
        return <div><h1>Unauthorized</h1><a href='/?#/login' onClick={() => navigate('/login')}>Please login</a></div>
    }

    if (page === '/login' || page === '/register') {
        CurrentPage = routes[page].component;
        return <CurrentPage />;
    }

    CurrentPage = routes[page].component;

    return (
        <><TopBar />
        <div className='container'>
            <Sidebar />
            <div className='current'>
                <CurrentPage />
            </div>
        </div></>
    )
}


Pages.propTypes = {
    token: PropTypes.string,
    setToken: PropTypes.func
}

export default Pages