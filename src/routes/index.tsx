import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    )
}

export default AppRoutes