export type InputProps = {
    value: string,
    placeholder?: string,
    readOnly?: boolean,
    handler?: any,
    label?: string,
    pattern?: string
}

/**
 * Base input wrapper
 */
export default function Input(props: InputProps) {
    var classes: string = "p-2 my-2 w-full border border-dark-gray rounded ";
    if (props.readOnly) classes += "text-gray-500 cursor-not-allowed focus:outline-none";

    return (
        <div className="w-full">
            {props.label ? <label className="w-full">{props.label}</label> : null}
            <input
                name={props.label}
                className={classes}
                type="text"
                value={props.value}
                readOnly={props.readOnly}
                placeholder={props.placeholder}
                onChange={props.handler}
                pattern={props.pattern}
            />
        </div>
    );
}
