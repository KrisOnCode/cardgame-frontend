import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useLogout } from '../../hooks/useLogout'
import useDarkMode from '../../hooks/useDarkmode';
import ThemeToggler from './ThemeToggler';
import MoonIcon from '../../assets/MoonIcon'
import SunIcon from '../../assets/SunIcon'

export default function Navbar() {
    const [darkMode, setDarkMode] = useDarkMode();
    const { logout } = useLogout()
    const { user } = useAuthContext()
    return (
        <>
         <nav className="font-heading flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-12 bg-violet-800 dark:bg-violet-500 shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <p className="text-2xl no-underline text-white">Card Game</p>
                </div>
                <div class="flex items-center space-x-2">
                {!user && (
                    <>
                        <Link to="/login">
                            <button class="py-2 px-2 w-full rounded-xl border border-white text-white hover:bg-purple-600 hover:text-gray-50">Log In</button>   
                        </Link>


                        <Link to="/signup">
                            <button class="py-2 px-2 w-full rounded-xl border border-white text-white hover:bg-purple-600 hover:text-gray-50">Sign Up</button> 
                        </Link>
                    </>
                )}
                {user && (
                    <>
                        <Link>
                            <button class="py-2 px-2 w-full rounded-xl border border-white text-white hover:bg-purple-600 hover:text-gray-50" onClick={logout}>Logout</button> 
                        </Link>
                    </>
                )}
                    <SunIcon />
                    <ThemeToggler darkMode={darkMode} setDarkMode={setDarkMode} />
                    <MoonIcon />
                </div>
            </nav> 
        </>
    )
}

       