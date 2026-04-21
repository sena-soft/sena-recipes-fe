import { NavLink } from 'react-router-dom'
import  Logo from '../assets/logo.png'
function Header() {
  return (
    <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src={Logo} alt="logo" />
                </div>
                <nav className="flex gap-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-white text-lg font-bold" : "text-gray-400"}>Home</NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? "text-white text-lg font-bold" : "text-gray-400"}>Favorites</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header