
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import { useContext } from 'react';

const Header = () => {
    const {isLogin} =  useContext(LoginContext)
  return (
    <div className='bg-blue'>
      <nav className=' text-white px-7 py-10 font-poppins flex lg:items-center justify-between lg:flex-row flex-col item-left'>
        {/* <img className='' alt='brand-logo' src=''></img> */}
        <Link to="/"><h1 className='text-4xl text-white font-bold'>BUYNOW</h1></Link>
        <ul className='flex lg:gap-16 mr-20 flex-col lg:flex-row gap-6 mt-5 mb-5'>
          <li><Link to='/collections' className='font-medium text-xl'>Collections</Link></li>
          <li><Link to='/about' className='font-medium text-xl'>About</Link></li>
          <li><Link to='/contact' className='font-medium text-xl'>Contact</Link></li>
        </ul>
        <form className="flex items-center w-96">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for any product" required />
          </div>
          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-yellow rounded-full border border-yellow hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className='flex align-center cursor-pointet mt-5 mb-5 '>
          <PersonOutlineIcon />
          <Link to='/login' className='text-xl '>{isLogin ? <p className=''>LoggedIn</p> : <p>Sign in Acct</p>}</Link>
        </div>
        <div className='flex align-center cursor-pointer'>
          <Link to='/cart'>
          <p className='text-xl '><AddShoppingCartOutlinedIcon className='text-2xl' />(0)</p>

          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header