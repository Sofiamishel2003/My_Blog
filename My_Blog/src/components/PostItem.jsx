/* eslint-disable react/prop-types */
import '../styles/Postitem.css'; 
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
const PostItem = ({ post }) => {
    const getRandomColor = () => {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);

    const color = `rgba(${first},${second},${third}, 0.4)`;
    return color;
    };

    const styles = {
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '30px',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: getRandomColor(),
    };


    return (
       <Card style={styles}>
            <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post.family}</Card.Subtitle>
                <Card.Text>{post.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};


export default PostItem;