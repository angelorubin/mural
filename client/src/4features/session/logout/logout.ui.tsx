import { useNavigate, NavLink } from 'react-router-dom'
import { pathKeys } from '~6shared/lib/react-router'
import { useLogoutMutation } from './logout.mutation'

export function LogoutButton() {
  const navigate = useNavigate()

  const { mutate } = useLogoutMutation({
    onSuccess: () => {
      navigate(pathKeys.home())
    },
  })

  const handleClick = () => {
    mutate()
  }

  return (
    <NavLink
      to=""
      onClick={handleClick}
    >
      Logout
    </NavLink>
  )
}
