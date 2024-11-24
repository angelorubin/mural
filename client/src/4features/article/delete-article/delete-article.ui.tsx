import { useState } from 'react'
import { IoTrash } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { pathKeys } from '~6shared/lib/react-router'
import { Modal } from '~6shared/ui/modal'
import { spinnerModel } from '~6shared/ui/spinner'
import { useDeleteArticleMutation } from './delete-article.mutation'

type DeleteArticleButtonProps = { slug: string }

export function DeleteArticleButton(props: DeleteArticleButtonProps) {
  const { slug } = props
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate()

  const { mutate, isPending } = useDeleteArticleMutation({
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

  const handleClickModal = () => {
    setShowModal(!showModal)
  }

  const handleClick = () => {
    mutate(slug)
  }

  return (
    <>
      <button
        onClick={handleClickModal}
        className="btn btn-outline-danger btn-sm"
        type="button"
        disabled={isPending}
      >
        <IoTrash size={16} />
        &nbsp;Delete Article
      </button>

      <Modal
        show={showModal}
        setShow={setShowModal}
        title="Deletar artigo"
        body={
          <p className="text-dark">Você tem certeza que deseja excluir <span className="text-danger">permanentemente</span>?</p>
        }
        footer={
          <button
            type="button"
            className="btn btn-danger ml-2"
            onClick={handleClick}>
            Excluir
          </button>
        }
      />
    </>
  )
}
