import { useRef } from "react";
import { useClickOutside } from "../utils/hooks";

export type ModalProps = {
    children: any,
    closeHandler: () => void,
    classes?: string
}

/**
 * Base modal container
 */
export default function Modal(props: ModalProps) {
    const modalRef = useRef(null);
    useClickOutside(modalRef, props.closeHandler);

    return (
        <div className={"modal-overlay p-4 fixed inset-0 w-full h-full flex justify-center content-center bg-dark-gray-transparent overflow-y-scroll " + (props.classes || "")}>
            <div ref={modalRef} className="bg-white rounded shadow-2xl p-8 m-auto">
                { props.children }
            </div>
        </div>
    );
}
