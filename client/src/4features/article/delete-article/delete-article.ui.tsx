import { useState } from 'react'
import { IoTrash } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { pathKeys } from '~6shared/lib/react-router'
// import { Modal } from '~6shared/ui/modal'
import { CustomDialog } from '~6shared/ui/dialog'
import { spinnerModel } from '~6shared/ui/spinner'
import { useDeleteArticleMutation } from './delete-article.mutation'

type DeleteArticleButtonProps = { slug: string }

export function DeleteArticleButton(props: DeleteArticleButtonProps) {
  const { slug } = props
  const [showArticleModal, setShowArticleModal] = useState(false);

  const navigate = useNavigate()

  const { isPending } = useDeleteArticleMutation({
    mutationKey: [slug],

    onMutate: () => {
      spinnerModel.globalSpinner.getState().show()
    },

    onSuccess: () => {
      navigate(pathKeys.home(), { replace: true })
    },

    onSettled: () => {
      spinnerModel.globalSpinner.getState().hide()
    },
  })

  const handleClickOpenModal = () => {
    setShowArticleModal(!showArticleModal)
  }

  /**
  const handleClickDeleteArticle = () => {
    mutate(slug)
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.parentNode.removeChild(backdrop);
    }
    document.body.classList.remove('modal-open');
    setShowArticleModal(!showArticleModal);
  }
  */

  return (
    <>
      <button
        onClick={handleClickOpenModal}
        data-toggle="modal"
        data-target="#delete-article"
        className="btn btn-outline-danger btn-sm"
        type="button"
        disabled={isPending}
      >
        <IoTrash size={16} />
        &nbsp;Delete Article
      </button>

      <CustomDialog />

      {/**
      <Modal
        id="delete-article"
        show={showArticleModal}
        setShow={setShowArticleModal}
        title="Excluir artigo"
        body={
          <p className="text-dark text-left">Você tem certeza que deseja excluir
            <span className="text-danger font-weight-bold"> permanentemente</span> o artigo
            <span className="text-dark"> Teste2</span>?
          </p>
        }
        footer={
          <button type="button"
            className="btn btn-primary"
            onClick={handleClickDeleteArticle}
          >
            Excluir
          </button>
        }
      />
      */}
    </>
  )
}
