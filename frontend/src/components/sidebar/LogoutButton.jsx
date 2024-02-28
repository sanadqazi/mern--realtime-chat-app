import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';


const LogoutButton = () => {
  const {loading, logout} = useLogout();
  return <div className='mt-auto'>
    {!loading ? (<button onClick={logout} className='btn btn-ghost btn-sm rounded-btn' >
        <BiLogOut className='w-6 h-6 text-white cursor-pointer' />
        </button>) : (
          <span className='loading loading-spinner'></span>
        )}
    
        </div>;
}

export default LogoutButton