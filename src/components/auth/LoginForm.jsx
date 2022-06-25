import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

export default function LoginForm() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
      }

  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-violet-800 dark:bg-violet-500 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className='font-heading text-white'>Log In</h2>
          <div className="mb-4">
            <label className="font-heading block text-white text-sm font-bold mb-2" for="username">Email:</label>
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email"
                name="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                required
                placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="font-heading block text-white text-sm font-bold mb-2" for="password">Password</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            required 
            placeholder="Password" />
          </div>
          <div className="flex items-center justify-between">
            <button className="rounded-xl border border-white  text-white font-bold font-heading py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Log In
            </button>
            <a className="font-heading inline-block align-baseline font-bold text-sm text-white" href="/signup">
              Need to Registered?
            </a>
          </div>
        </form>
      </div>
        </>
  )
}
