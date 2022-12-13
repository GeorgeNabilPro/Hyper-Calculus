import './styles/global.css'
import Basics from './pages/Basics'
import Techniques from './pages/Techniques'
import Applications from './pages/Applications'
import MultipleInt from './pages/MultipleInt'
import VectorInt from './pages/VectorInt'
import NotFound from './pages/NotFound'
import { Header, Footer} from './SoloComponents'

import {
    Route,
    Routes,
    Navigate,
    BrowserRouter as Router,
    HashRouter,
} from 'react-router-dom'

function App(props){
    return(
        <HashRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Navigate to="/multiple-integration/"/>} />
                    <Route path='/background-and-basics/' element={<Basics />} />
                    <Route path='/techniques-of-integration/' element={<Techniques />} />
                    <Route path='/multiple-integration/' element={<MultipleInt />} />
                    <Route path='/applications-of-integration/' element={<Applications />} />
                    <Route path='/vector-calculus/' element={<VectorInt />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </HashRouter>
    )
}

export default App;

// 411   1/11/2022
// 504   2/11/2022
// 607   3/11/2022