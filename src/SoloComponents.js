import { tab } from "@testing-library/user-event/dist/tab"
import React,{useEffect, useState, useMemo} from "react"
import {Link, useLocation} from "react-router-dom"

const caretDown = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/></svg>'
const caretUp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>'
const bars = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
const xsymb = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'

export const Header = (props)=> {
    return (
    <>
        <header>
            <div className="header-upper">
                <div className="logo-wrapper">
                    <p id="logo">
                        Hyper Calculus
                    </p>
                    <span id="slogan">
                        Your Integral Calculus Reference
                    </span>
                </div>
                <Link id="about-tab" to="/about-us">About us</Link>
            </div>
        </header>
        <Navigation/>
    </>
    )
}
const tabs = {
    '/background-and-basics':"Background and Basics",
    '/techniques-of-integration':"Techniques of Integration",
    '/multiple-integration':"Multiple Integration",
    '/applications-of-integration':" Applications of Integration",
    '/vector-calculus':"Vector Calculus",
}

const Navigation = (props) => {
    // Takes <
    //    choose:the tab which is activated at the moment  !AUTO
    const [isExtended, setIsExtended] = useState(false);
    const pathName = useLocation().pathname
    let c = Object.keys(tabs).indexOf(pathName)
    console.log(c)
    const handleTabClick = (event) => {
        setIsExtended(currentState => currentState? !currentState : currentState)
        for (let el of document.getElementsByClassName("tabs")[0].children) {
            el.classList.remove("highlighted")
        }
        event.target.parentElement.classList.add("highlighted")
    };
    const handleClick = (event) => {
        setIsExtended(currentState => !currentState);
    }
    
    const tabs_ = useMemo(()=>{
            return Object.keys(tabs).map((e,i) => <li key={i}  id={'tab-'+(i+1)} className={c===i? "highlighted":""}>
                                 <Link to={''+e} onClick={handleTabClick}>
                                     {tabs[e]}
                                 </Link>
                             </li>
        )
    },[])
    return (
    <nav className={`${isExtended?"extended":""}`}>
        <button id="toggle-btn" onClick={handleClick}>{bars} Topics</button>
        <ul className={`tabs ${isExtended?"extended":""}`}>
            {[...tabs_]}
        </ul>
    </nav>
    )
}

export const Footer = ()=> {
    return (
    <footer>
        <div id='disclaimer' style={{"maxWidth":"70ch"}}>
            <p>
                <strong>What is the purpose of this work?</strong>
                <br />
                This Reference aims to help students find all calculus formulas fast, And to be as a repository for calculus tips and tricks and stratigies of solving. And we expect you to have the necessary knowledge before you use this reference.
            </p>
            <br />
            <p color="white">
                If you have any questions or suggestions or you want to join owr team for developing this reference, you can contact me:<br />
                Gmail: <a href="mailto:georgenabilpro@gmail.com"><strong>georgenabilpro@gmail.com</strong></a><br/>
                Whatsapp: <a href="tel:01014374579"><strong>(+20)01014374579</strong></a>
            </p>
        </div>
        <div id="credits">
            <h6>Content writing: </h6> <h5>G.N.</h5>
            <h6>Website programming: </h6> <h5>G.N.</h5>
            <h6>Designing: </h6> <h5>G.N.</h5>
            <h6>Revising: </h6> <h5>G.N.</h5>
            <h6>Editing: </h6> <h5>G.N.</h5>
            <h6>Publishing: </h6> <h5>G.N.</h5>
            <h6>Videos by: </h6> <h5>G.N.</h5>
            <h6>Images by:</h6> <h5>G.N.</h5>
        </div>
    </footer>
    )
}