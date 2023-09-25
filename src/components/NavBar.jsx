import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import ProfilePicture from '../assets/image-avatar.png'
import Menu from '../assets/icons/icon-menu.svg'
import { ReactComponent as CartIcon } from '../assets/icons/icon-cart.svg'
import { ReactComponent as CloseIcon } from '../assets/icons/icon-close.svg'

const NavBar = ( { quantity } ) => {
    const [dropdown, setDropdown] = useState(false);
    const categories = [
        {
            name:"Collections",
            path: "/"
        },
        {
            name:"Men",
            path: "/"
        },
        {
            name:"Women",
            path: "/"
        },
        {
            name:"About",
            path: "/"
        },
        {
            name:"Contact",
            path: "/"
        },

    ]

    const handleDropdown = () => {
        setDropdown(!dropdown);
        console.log(dropdown);
    }
    
  return (
    <>
        <div className='flex items-center justify-evenly relative'>
            {/* Mobile */}
            <div className='md:hidden '>
                <button onClick={() => handleDropdown()}><img src={Menu} alt="menu button" className='scale-125 pt-2'/></button>
            </div>

            { dropdown ? 
                
                <div className='absolute h-screen w-1/2 inset-0 bg-white font-main-bold p-6'>
                    <button onClick={() => handleDropdown()}><CloseIcon /></button>
                    <ul className='bg-white mt-8'>
                        {categories.map((category) => (
                            <li key={category.name} className='mb-5'><a className='bg-white' href={category.path}>{category.name}</a></li>
                        ))}
                    </ul>
                </div> 
                
                :

                <></>

            }

            <img src={Logo} alt="sneakers logo" className='md:scale-125'/>
            {/* Desktop */}
            <ul className='sm:flex hidden'>
                {categories.map((category) => (
                    <li className='p-6 border-b-2 text-xl border-transparent  hover:border-project-orange-prim hover:cursor-pointer' key={category.name}>
                        <a href={category.path}>{category.name}</a>
                    </li>
                ))}
            </ul>
            
            <div className='flex items-center'>
                <CartIcon className='hover:fill-black cursor-pointer' alt='cart icon'/>
                {
                    quantity === 0 ? (<p></p>) : (<p className='hover:cursor-pointer mb-5 ml-2 text-xs px-2 rounded-full text-white bg-project-orange-prim absolute'> { quantity } </p>)
                }
                
                <img src={ProfilePicture} alt="profile" className='scale-50 border-4 rounded-full hover:border-project-orange-prim hover:cursor-pointer'/>
            </div>
        </div>
    </>
  )
}

export default NavBar