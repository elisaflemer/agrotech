function Button(props) {
    return (
        <button className="bg-[#46aa56] text-white font-bold my-2 w-60 rounded-lg p-2.5 text-sm m-0 text-center" onClick={props.onClick}>{props.content}</button>
    )
}

export default Button