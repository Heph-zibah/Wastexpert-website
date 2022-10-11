import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import LogIn from './Components/LogIn';
import Collector from './Pages/Collector';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/About' element={<About />}></Route>
				<Route path='/Services' element={<Services />}></Route>
				<Route path='/Contact' element={<Contact />}></Route>
				<Route path='/Faq' element={<Faq />}></Route>
				<Route path='/LogIn' element={<LogIn />}></Route>
				<Route path='/Collector' element={<Collector />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
