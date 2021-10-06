export type ButtonProps = {
    handler?: any,
    icon?: string,
    children?: any,
    color?: string,
    outline?: boolean,
    className?: string,
    type?: "button" | "submit" | "reset"
}

/**
 * Base button layout
 */
export default function Button(props: ButtonProps) {
    var color: string = props.color ?? 'dark-gray';
    var classes: string = `max-w-sm rounded outline-none py-2 px-10 ${props.className} `;
    if (props.outline) {
        classes += `border-2 border-${color} text-${color} hover:bg-${color} hover:text-white `;
    } else {
        classes += `bg-${color} text-white hover:bg-white hover:text-${color} shadow-2xl `
    }

    return (
        <button
            className={classes}
            onClick={props.handler}
            type={props.type}>
            <h3>{ props.children }</h3>
        </button>
    );
}
