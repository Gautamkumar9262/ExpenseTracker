

// import logo from '../assets/logo.png';
// import logo4 from '../assets/logo4.png';
// import { GoGraph } from 'react-icons/go';
// import { FaRegCreditCard } from 'react-icons/fa';
// import { FaMoneyBillTrendUp } from 'react-icons/fa6';
// import { GiExpense } from 'react-icons/gi';
// import { IoLogOut } from 'react-icons/io5';
// import { FaArrowsDownToLine, FaArrowsUpToLine } from 'react-icons/fa6';
// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { NavLink, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const SideBar = () => {

//     const { token, setToken } = useContext(AppContext);

//     const navigate = useNavigate();

//     const handleLogOut = () => {
//         setToken(false);
//         navigate('/');
//         Cookies.remove("token");
//     };

//     return (
//         <>
//             <div className='bg-gradient-to-r from-black to-gray-700 h-screen'>
//                 <div className='mt-3 py-2 px-2'>
//                     <img src={logo4} onClick={() => navigate('/')} alt='logo' className='mt-1 w-44 hidden md:block' />
//                     <img src={logo} onClick={() => navigate('/')} alt='logo' className='w-12 block hidden md:hidden' />
//                 </div>

//                 <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
//                     <NavLink to={'/'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
//                         <GoGraph className='text-2xl text-white' />
//                         <p className='text-lg font-semibold hidden md:block text-white'>Dashboard</p>
//                     </NavLink>
//                 </div>

//                 <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
//                     <NavLink to={'/viewTransaction'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
//                         <FaRegCreditCard className='text-2xl text-white' />
//                         <p className='text-lg font-semibold hidden md:block text-white'>Transaction</p>
//                     </NavLink>
//                 </div>

//                 <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
//                     <NavLink to={'/income-transactions'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
//                         <FaArrowsDownToLine className='text-2xl text-white' />
//                         <p className='text-lg font-semibold hidden md:block text-white'>Income History</p>
//                     </NavLink>
//                 </div>

//                 <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
//                     <NavLink to={'/expense-transactions'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
//                         <FaArrowsUpToLine className='text-2xl text-white' />
//                         <p className='text-lg font-semibold hidden md:block text-white'>Expense History</p>
//                     </NavLink>
//                 </div>

//                 <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
//                     <NavLink to={'/add-income'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
//                         <FaMoneyBillTrendUp className='text-2xl text-white' />
//                         <p className='text-lg font-semibold hidden md:block text-white'>Income</p>
//                     </NavLink>
//                 </div>

//                 <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
//                     <NavLink to={'/add-expense'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
//                         <GiExpense className='text-2xl text-white' />
//                         <p className='text-lg font-semibold hidden md:block text-white'>Expense</p>
//                     </NavLink>
//                 </div>

//                 <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
//                     {token ?
//                         <NavLink onClick={handleLogOut} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
//                             <IoLogOut className='text-2xl text-white' />
//                             <p className='text-lg font-semibold hidden md:block text-white'>LogOut</p>
//                         </NavLink> :
//                         <NavLink to={'/login'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
//                             <IoLogOut className='text-2xl text-white' />
//                             <p className='text-lg font-semibold hidden md:block text-white'>Login</p>
//                         </NavLink>}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SideBar


import logo from '../assets/logo.png';
// import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png'
import { GoGraph } from 'react-icons/go';
import { FaRegCreditCard } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiExpense } from 'react-icons/gi';
import { IoLogOut } from 'react-icons/io5';
import { FaArrowsDownToLine, FaArrowsUpToLine } from 'react-icons/fa6';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SideBar = () => {

    const { token, setToken } = useContext(AppContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        setToken(false);
        navigate('/');
        Cookies.remove("token");
    };

    return (
        <>
            <div className='bg-gradient-to-r from-black to-gray-700 h-screen'>
                <div className='mt-3 py-2 px-2'>
                    <img src={logo5} onClick={() => navigate('/')} alt='logo' className='mt-1 w-44 hidden md:block' />
                    <img src={logo} onClick={() => navigate('/')} alt='logo' className='w-12 block hidden md:hidden' />
                </div>

                <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
                    <NavLink to={'/'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
                        <GoGraph className='text-2xl text-white' />
                        <p className='text-lg font-semibold hidden md:block text-white'>Dashboard</p>
                    </NavLink>
                </div>
            

                <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
                    <NavLink to={'/view-transactions'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
                        <FaRegCreditCard className='text-2xl text-white' />
                        <p className='text-lg font-semibold hidden md:block text-white'>Transaction</p>
                    </NavLink>
                </div>

                <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
                    <NavLink to={'/incomeTransactions'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
                        <FaArrowsDownToLine className='text-2xl text-white' />
                        <p className='text-lg font-semibold hidden md:block text-white'>Income History</p>
                    </NavLink>
                </div>

                <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
                    <NavLink to={'/expenseTransactions'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
                        <FaArrowsUpToLine className='text-2xl text-white' />
                        <p className='text-lg font-semibold hidden md:block text-white'>Expense History</p>
                    </NavLink>
                </div>

                <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
                    <NavLink to={'/add-income'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
                        <FaMoneyBillTrendUp className='text-2xl text-white' />
                        <p className='text-lg font-semibold hidden md:block text-white'>Income</p>
                    </NavLink>
                </div>

                <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
                    <NavLink to={'/add-expense'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
                        <GiExpense className='text-2xl text-white' />
                        <p className='text-lg font-semibold hidden md:block text-white'>Expense</p>
                    </NavLink>
                </div>

                <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
                    {token ?
                        <NavLink onClick={handleLogOut} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
                            <IoLogOut className='text-2xl text-white' />
                            <p className='text-lg font-semibold hidden md:block text-white'>LogOut</p>
                        </NavLink> :
                        <NavLink to={'/login'} className='w-full flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
                            <IoLogOut className='text-2xl text-white' />
                            <p className='text-lg font-semibold hidden md:block text-white'>Login</p>
                        </NavLink>}
                </div>
            </div>
        </>
    )
}

export default SideBar