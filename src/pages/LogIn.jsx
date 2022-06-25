import LoginForm from '../components/auth/LoginForm'
import Hero from '../components/auth/Hero'

export default function LogIn() {
    return (
      <>
      <div className='pt-20'>
        <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-6">
          <Hero />
        </div>
        <div className="col-start-7 col-span-4">
        <div className="grid place-items-center">
          <LoginForm />
        </div>
        </div>
        </div>    
      </div>
  </>
    )
}