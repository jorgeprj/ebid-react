import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/navigation/navbar/Navbar"
import AppRoutes from "./routes"
import Footer from "./components/navigation/footer/Footer"

function App() {

	return (
		<Router>
			<Navbar />
			<AppRoutes />
			<Footer/>
		</Router>
	)
}

export default App
