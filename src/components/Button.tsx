type ButtonProps = {
    icon?: string,
    children?: string,
    handler: any
};

function Button(props: ButtonProps) {
    var classes: string = "max-w-sm rounded bg-gray-400 text-white hover:bg-gray-600 my-2 ";
    if (props.icon) {
        classes += "p-2 w-10 h-10";
    } else {
        classes += "py-2 px-6";
    }

    return (
        <button
            className={classes}
            onClick={props.handler}>
            { props.icon ? <img src={props.icon}/> : null }
            { props.children }
        </button>
    );
}

export default Button;
