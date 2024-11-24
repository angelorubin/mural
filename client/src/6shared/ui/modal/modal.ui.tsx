import React from 'react'
// import cn from 'classnames'

interface ModalProps  {
    id?: string
    title?: string
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ id, title, children }) => (
        <div
            className="modal fade"
            id={id}
            aria-labelledby={`${id}Label`}
            aria-hidden="true"
        >
            <div
                className="modal-dialog"
            >
                <div
                    className="modal-content"
                >
                    <div
                        className="modal-header"
                    >
                        <h5
                            className="modal-title"
                            id={`${id}Label`}>
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div
                        className="modal-body">
                        {children}
                    </div>
                    <div
                        className="modal-footer"
                    >
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
)
