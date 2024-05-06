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


    return (
       <Card style={styles}>
            <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" color='Black'>{post.family}</Card.Subtitle>
                <Card.Text>{post.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};


export default PostItem;