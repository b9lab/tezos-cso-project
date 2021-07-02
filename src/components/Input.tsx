type InputProps = {
    value: string,
    placeholder?: string,
    readOnly?: boolean,
    handler?: any,
    label?: string
};

function Input(props: InputProps) {
    var classes: string = "p-2 m-2 w-full rounded border ";
    if (props.readOnly) classes += "text-gray-500 cursor-not-allowed focus:outline-none";

    return (
        <>
            {props.label ? <label className="mx-2 w-full">{props.label}</label> : null}
            <input
                className={classes}
                type="text"
                value={props.value}
                readOnly={props.readOnly}
                placeholder={props.placeholder}
                onChange={props.handler}
            />
        </>
    );
}

export default Input;
