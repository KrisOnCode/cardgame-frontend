export default function ThemeToggler({darkMode, setDarkMode}) {
    return (
        <div className="mb-0">
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" name="toggle" id="dmcheck" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-yellow-500 border-4 appearance-none cursor-pointer"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <label for="Blue" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                </label>
            </div>
        </div>
    )
}
