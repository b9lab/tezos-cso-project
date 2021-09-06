import { useRef } from "react";
import { useClickOutside } from "../utils/hooks";

type ModalProps = {
    children: any,
    closeHandler: () => void,
    classes?: string
}

function Modal(props: ModalProps) {
    const modalRef = useRef(null);
    useClickOutside(modalRef, props.closeHandler);

    return (
        <div className={"p-4 fixed inset-0 w-full h-full flex justify-center content-center bg-dark-gray-transparent " + (props.classes || "")}>
            <div ref={modalRef} className="bg-white rounded shadow-2xl p-8 m-auto">
                { props.children }
            </div>
        </div>
    );
}

export default Modal;
