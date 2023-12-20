import React from 'react'
import { Button } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { authData } from '../../states/atoms/authAtom';

export default function LogoutButton() {
  const [auth, setAuth] = useRecoilState(authData);
  
  function handleLogout(){
    setAuth({
      isAuth: false,
      userId: null
    })
    localStorage.removeItem('loggedInUser');
  }

  return (
    <Button variant='primary' onClick={handleLogout}>تسجيل الخروج</Button>
  )
}
