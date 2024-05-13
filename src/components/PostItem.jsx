/* eslint-disable react/prop-types */
import '../styles/Postitem.css'; 
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
const PostItem = ({ post }) => {

    const styles = {
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '30px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:'#0184a9',
    };

    // Función para formatear la fecha
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return (
        <div className="card-container">
            <Card style={styles}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{post.family}</Card.Subtitle>
                    <Card.Text>{post.information}</Card.Text>
                    <Card.Text>
                        <strong>Creado: </strong>{formatDate(post.created_at)}<br />
                        <strong>Actualizado: </strong>{formatDate(post.updated_at)}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Autor: {post.author_name}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>

    );
};


export default PostItem;