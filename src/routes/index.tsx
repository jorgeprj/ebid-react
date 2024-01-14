import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'

interface AppRoutesProps {
    handleCart: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ handleCart }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<Product handleCart={handleCart} />} />
        </Routes>
    )
}

export default AppRoutes