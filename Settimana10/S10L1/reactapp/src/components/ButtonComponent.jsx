const ButtonComponent = ({text, showButton}) => {
    const customStyle = {
        border: "1px solid black",
        margin: "10px",
    }
    return (
        <button style={customStyle} onClick={showButton}>{text}</button>
    )
}

export default ButtonComponent