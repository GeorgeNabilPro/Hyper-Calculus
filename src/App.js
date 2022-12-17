import React, {Suspense, lazy} from 'react'
import {
    Route,
    Routes,
    Navigate,
    BrowserRouter as Router,
    HashRouter,
} from 'react-router-dom'
import { Header, Footer} from './SoloComponents'
import {Loading} from './Components'
import './styles/all.css'

const Basics = lazy(()=>import('./pages/Basics'));  
const Techniques = lazy(()=>import('./pages/Techniques'));  
const Applications = lazy(()=>import('./pages/Applications'));  
const MultipleInt = lazy(()=>import('./pages/MultipleInt'));  
const VectorInt = lazy(()=>import('./pages/VectorInt'));  
const NotFound = lazy(()=>import('./pages/NotFound'));  
const AboutUs = lazy(()=>import('./pages/AboutUs'));

function App(props){
    return(
        <HashRouter>
            <Header />
            <main>
                <Suspense fallback={<Loading />}
                    >
                    <Routes>
                        <Route path='/' element={<Navigate to="/multiple-integration/"/>} />
                        <Route path='/background-and-basics/' element={<Basics />} />
                        <Route path='/techniques-of-integration/' element={<Techniques />} />
                        <Route path='/multiple-integration/' element={<MultipleInt />} />
                        <Route path='/applications-of-integration/' element={<Applications />} />
                        <Route path='/vector-calculus/' element={<VectorInt />} />
                        <Route path='/about-us' element={<AboutUs n={6}/>} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </HashRouter>
    )
}

export default App;

// 411   1/11/2022
// 504   2/11/2022
// 607   3/11/2022