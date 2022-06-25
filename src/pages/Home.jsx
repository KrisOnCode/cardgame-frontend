import UserDetail from '../components/users/UserDetail'

export default function Home() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-0 col-span-3">
                <UserDetail />
            </div>
            <div className="col-start-4 col-span-6">
                
            </div>
            <div className="col-end-16 col-span-3">
            
            </div>
    </div>
    )
}