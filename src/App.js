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
    BrowserRouter as Router
} from 'react-router-dom'

function App(props){
    return(
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/Hyper-Calculus/' element={<Navigate to="/Hyper-Calculus/multiple-integration"/>} />
                    <Route path='/Hyper-Calculus/background-and-basics' element={<Basics />} />
                    <Route path='/Hyper-Calculus/techniques-of-integration' element={<Techniques />} />
                    <Route path='/Hyper-Calculus/multiple-integration' element={<MultipleInt />} />
                    <Route path='/Hyper-Calculus/applications-of-integration' element={<Applications />} />
                    <Route path='/Hyper-Calculus/vector-calculus' element={<VectorInt />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App;

// 411   1/11/2022
// 504   2/11/2022
// 607   3/11/2022