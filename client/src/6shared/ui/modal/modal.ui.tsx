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
        setShow(!show);
        if (onClose) onClose();
    };

    return (
        show && (
            <div className="modal show"
                style={{ display: 'block' }}
                role="dialog"
            >
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <div className="d-flex">
                                <h5 className="modal-title text-primary">{title}</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={onClose}
                                >
                                    &times;
                                </button>
                            </div>
                        </div>

                        <div className="modal-body">
                            <p>{body}</p>
                        </div>

                        <div className="modal-footer">
                            <div className='d-flex gap-3'>
                                {footer}
                                <button
                                    type="button"
                                    className="btn btn-primary mr-2"
                                    onClick={handleClose}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
