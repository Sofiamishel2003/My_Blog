import '../styles/Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({texto}) => {
    return(
        <button className="button type1">
            <span className="btn-txt">{texto}</span>
        </button>
    )
}

export default Button