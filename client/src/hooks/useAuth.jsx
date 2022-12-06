import { useMemo} from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../features/auth/authSlice'
//TODO ADD ISUCCESS, ISLOADING, ISERROR,DATAMESSAGE
export const useAuth = () => {
  const user = useSelector(selectCurrentUser)

  return useMemo(() => ({ user }), [user])
}
