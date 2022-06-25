import UserDetail from '../components/users/UserDetail'
import ProductList from '../components/products/ProductList'

export default function Product() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-0 col-span-4">
                <UserDetail />
            </div>
            <div className="col-start-5 col-span-4">
                <ProductList />
            </div>
            <div className="col-end-12 col-span-4">
            
            </div>
    </div>
    )
}