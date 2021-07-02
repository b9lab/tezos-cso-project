type ButtonProps = {
    children: string,
    handler: any
};

function Button(props: ButtonProps) {
    return (
        <button 
            className="max-w-sm rounded bg-gray-400 py-2 px-6 m-2 text-white hover:bg-gray-600" 
            onClick={props.handler}>
            {props.children}
        </button>
    );
}

export default Button;
