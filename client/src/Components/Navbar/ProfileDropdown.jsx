import React from 'react'

export const ProfileDropdown = () => {
  return (
    <div className='flex flex-col dropDownProfile'>
        <ul className="flex flex-col gap-4">
            {/* <i class="fa-solid fa-user fs-6 me-3 my-2"></i> */}
            <a href="#" className='text-decoration-none text-black'><li style={{listStyleType:'none'}}>Profile</li></a>
            {/* <i class="fa-solid fa-right-from-bracket"></i> */}
            <a href="#" className='text-decoration-none text-black'><li style={{listStyleType:'none'}}>Logout</li></a>
        </ul>
    </div>
  )
}
