type ButtonProps = {
    icon?: string,
    children?: string,
    handler: any
};

function Button(props: ButtonProps) {
    var classes: string = "max-w-sm border-2 border-dark-gray hover:bg-dark-gray hover:text-white my-2 ";
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
            <h3>{ props.children }</h3>
        </button>
    );
}

export default Button;
