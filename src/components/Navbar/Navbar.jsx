import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import Link from "./Link";
import { useState } from 'react';
const Navbar = () => {
    const [open,setopen]=useState(false)
    const routes = [
        { path: '/', id: 1, name: 'Home' },
        { path: '/about', id: 2, name: 'About' },
        { path: '/services', id: 3, name: 'Services' },
        { path: '/products/:productId', id: 4, name: 'ProductDetail' },
        { path: '*', id: 5, name: 'NotFound' }
    ]
    return (
        <div>

            <nav className='text-black p-6 bg-yellow-200'>
                <div className=' md:hidden text-2xl' onClick={()=>setopen(!open)}>
                    {
                        open===true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>

                    }

                </div>
                <ul className={`md:flex duration-1000 absolute md:static
                ${(open ? 'top-24':'-top-60')}
                text-black bg-yellow-200 px-6 `}>
                    {
                    routes.map(route => 
                        <Link  key={route.id} route={route}></Link>
                    )}
                </ul>
            </nav>


        </div>
    );
};

export default Navbar;