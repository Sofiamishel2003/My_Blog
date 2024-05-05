/* eslint-disable react/prop-types */
import '../styles/Postitem.css'; 

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
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: getRandomColor(),
    };


    return (
        <div className="post-item" style={styles}>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
            <p>{post.family}</p>
            <p>{post.diet}</p>
            <p>{post.funfact}</p>
        </div>
    );
};


export default PostItem;