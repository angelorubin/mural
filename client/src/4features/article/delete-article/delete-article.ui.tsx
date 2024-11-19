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

  const handleClick = () => {
    // mutate(slug)
    setShowModal(!showModal)
    console.log('button delete clicked')
    console.log(showModal)
  }

  return (
    <>
      <button
        onClick={handleClick}
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
        title="Example Modal"
        body={<p>This is the body of the modal.</p>}
        footer=""
        onClose={() => console.log('Modal closed')}
      />
    </>
  )
}
