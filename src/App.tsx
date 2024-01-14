import { BrowserRouter as Router } from "react-router-dom"

import AppRoutes from "./routes"
import Footer from "./components/navigation/footer/Footer"
import { useEffect, useState } from "react";
import { Navbar } from "./components/navigation/navbar/Navbar";


function App() {
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const savedCount = localStorage.getItem('cartCount');
		if (savedCount) {
			setCartCount(parseInt(savedCount, 10));
		}
	}, []);

	const handleCart = () => {
		const newCount = cartCount + 1;
		setCartCount(newCount);
		localStorage.setItem('cartCount', newCount.toString());
	};

	return (
		<Router>
			<Navbar cartCount={cartCount} />
			<AppRoutes handleCart={handleCart} />
			<Footer />
		</Router>
	)
}

export default App
