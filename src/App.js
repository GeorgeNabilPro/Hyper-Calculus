import './global.css'
import './math.css'
import './solo.css'
import Basics from './Basics'
import Techniques from './Techniques'
import Applications from './Applications'
import MultipleInt from './MultipleInt'
import VectorInt from './VectorInt'
import { Header, Footer} from './Components'

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
                    <Route path='/' element={<Navigate to="/multiple-integration"/>} />
                    <Route path='/background-and-basics' element={<Basics />} />
                    <Route path='/techniques-of-integration' element={<Techniques />} />
                    <Route path='/multiple-integration' element={<MultipleInt />} />
                    <Route path='/applications-of-integration' element={<Applications />} />
                    <Route path='/vector-calculus' element={<VectorInt />} />
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