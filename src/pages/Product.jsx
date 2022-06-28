import UserDetail from '../components/users/UserDetail'
import ProductList from '../components/products/ProductList'
import Cart from '../components/cart/Cart'

export default function Product() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-0 col-span-4">
                <UserDetail />
            </div>
            <div className="col-start-5 col-span-4">
                <ProductList />
            </div>
            <div className="col-start-10 col-span-4">
                <Cart />
            </div>
    </div>
    )
}