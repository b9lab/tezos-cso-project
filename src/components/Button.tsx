type ButtonProps = {
    handler: any,
    icon?: string,
    children?: string,
    color?: string,
    outline?: boolean
};

function Button(props: ButtonProps) {
    var color: string = props.color ?? 'dark-gray';
    var classes: string = "max-w-sm my-4 rounded outline-none ";
    if (props.outline) {
        classes += `border-2 border-${color} text-${color} hover:bg-${color} hover:text-white `;
    } else {
        classes += `bg-${color} text-white hover:bg-white hover:text-${color} shadow-2xl `
    }
    if (props.icon) {
        classes += "p-2 w-10 h-10";
    } else {
        classes += "py-2 px-10";
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
