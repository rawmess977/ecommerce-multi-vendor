import {AiOutlineDashboard, AiOutlineShoppingCart, } from 'react-icons/ai'
import {BiCategory} from 'react-icons/bi'
import {  FaUsers, FaUserTimes } from 'react-icons/fa'
import {  MdPayment } from 'react-icons/md'
import {  FaCodePullRequest } from 'react-icons/fa6'
import { CiChat1 } from "react-icons/ci";

export const allNav = [
  {
    id: 1,
    title:'Dashboard',
    icon: <AiOutlineDashboard />,
    role: 'admin',
    path: '/admin/dashboard'
  },
  {
    id: 2,
    title:'Orders',
    icon: <AiOutlineShoppingCart />,
    role: 'admin',
    path: '/admin/dashboard/orders'
  }
  ,
  {
    id: 3,
    title:'Category',
    icon: <BiCategory />,
    role: 'admin',
    path: '/admin/dashboard/category'
  }
  ,
  {
    id: 4,
    title:'sellers',
    icon: <FaUsers />,
    role: 'admin',
    path: '/admin/dashboard/sellers'
  },
  {
    id: 5,
    title:'Payment Request',
    icon: <MdPayment />,
    role: 'admin',
    path: '/admin/dashboard/payment-request'
  },
 
  {
    id: 6,
    title:'Deactive Sellers',
    icon: <FaUserTimes />,
    role: 'admin',
    path: '/admin/dashboard/deactive-sellers'
  },

  {
    id: 7,
    title:'Seller Request',
    icon: <FaCodePullRequest />,
    role: 'admin',
    path: '/admin/dashboard/sellers-request'
  },
  {
    id: 8,
    title:'Live Chat',
    icon: <CiChat1 />,
    role: 'admin',
    path: '/admin/dashboard/chat-seller'
  },
   
  

]  