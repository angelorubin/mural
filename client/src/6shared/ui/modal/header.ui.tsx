interface IHeader {
    title: string
    onClose: any
}

export function ModalHeader(props: IHeader) {
    const { onClose, title } = props
    return (
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
    )
}
