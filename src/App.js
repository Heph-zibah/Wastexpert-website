import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/About' element={<About />}></Route>
				<Route path='/Services' element={<Services />}></Route>
				<Route path='/Contact' element={<Contact />}></Route>
				<Route path='/Faq' element={<Faq />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
