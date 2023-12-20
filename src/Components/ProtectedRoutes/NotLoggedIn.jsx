import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { authData } from '../../states/atoms/authAtom';
import { useNavigate } from 'react-router';

export default function NotLoggedIn({children}) {
  const [auth] = useRecoilState(authData);

  const navigate = useNavigate();

  useEffect(() => {
    if(auth.isAuth){
      navigate('/');
    }
  }, [auth, navigate])

  return (
    children
  )
}