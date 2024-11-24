import { ReactNode } from "react";
import { ModalHeader } from "./modal-header.ui";

interface IModal {
    id: string;
    title: string;
    body: ReactNode;
    footer: ReactNode;
    show: boolean;
    setShow: (show: boolean) => void;
    onClose?: any;
}

export function Modal(props: IModal) {
    const { id, title, body, show, onClose, footer, setShow } = props

    const handleClose = () => {
        setShow(!show);
        if (onClose) onClose();
    };

    return (
        show && (
            <div
                id={id}
                className={`modal ${show ? 'show' : ''}`}
                style={{ display: show ? 'block' : 'none' }}
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                >
                    <div className="modal-content">

                        <ModalHeader
                            title={title}
                            onClose={handleClose}
                        />

                        <div
                            className="modal-body">
                            {body}
                        </div>

                        <div
                            className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={handleClose}
                            >
                                Cancelar
                            </button>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
