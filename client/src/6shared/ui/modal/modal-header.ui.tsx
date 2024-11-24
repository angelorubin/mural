interface IModalHeader {
    title: string
    onClose: () => void
}

export function ModalHeader(props: IModalHeader) {
    const { title, onClose } = props

    return (
        <div className="modal-header">
            <h5 className="modal-title text-dark">{title}</h5>
            <button type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}