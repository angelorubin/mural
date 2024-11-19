import { ReactNode } from "react";

interface IModal {
    title: string;
    body: ReactNode;
    footer: ReactNode;
    onClose?: () => void;
    show: boolean;
    setShow: (show: boolean) => void;
}

export function Modal(props: IModal) {
    const { title, body, footer, onClose, show, setShow } = props


    const handleClose = () => {
        setShow(false);
        if (onClose) onClose();
    };


    return (
        show && (
            <div
                className="modal fade in"
                style={{ display: 'block' }}
            >

                <div
                    className="modal-dialog">
                    <div
                        className="modal-content">
                        <div
                            className="modal-header">
                            <h5
                                className="modal-title"
                            >
                                {title}
                            </h5>
                            <button
                                type="button"
                                className="close"
                                onClick={onClose}>
                                &times;
                            </button>
                        </div>
                        <div
                            className="modal-body">
                            {body}
                        </div>
                        <div className="modal-footer">
                            {footer}
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClose}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
