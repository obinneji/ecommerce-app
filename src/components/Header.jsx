
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
const Header = () => {
  return (
    <div className='bg-blue'>
      <nav className=' text-white px-7 py-10 font-poppins flex items-center justify-between'>
        {/* <img className='' alt='brand-logo' src=''></img> */}
        <h1 className=' ml-10 text-4xl text-white font-bold'>BUYNOW</h1>
        <ul className='flex gap-16 mr-20'>
          <li><a href=' ' className='font-medium text-xl'>Collections</a></li>
          <li><a href='' className='font-medium text-xl'>About</a></li>
          <li><a href='' className='font-medium text-xl'>Contact</a></li>
        </ul>
        <form className='w-50 flex relative'>
          <input type='text' className='w-96 p-2 rounded-full mx-2 text-black outline-1' placeholder='search for your favourite'/>
          <div className='bg-yellow rounded-full w-10 h-10 absolute inset-y-0 right-0 mr-2 flex items-center justify-center cursor-pointer'>
          <SearchOutlinedIcon className=''/>
          </div>
        </form>
        <div className='flex align-center cursor-pointer'>
          <PersonOutlineIcon />
          <a href='' className='text-xl '>Sign in Acct</a>
        </div>
        <div className='flex align-center cursor-pointer'>
          <p className='text-xl '><AddShoppingCartOutlinedIcon className='text-2xl'/>(0)</p>
        </div>
      </nav>
    </div>
  )
}

export default Header