import React from 'react'
import { useState } from 'react'
import {MathJaxContext, MathJax} from 'better-react-mathjax'
import {Link} from 'react-router-dom'

function Chapter(props) {
    return (
        <>
            <div className={'main n'+ props.n}>
                <MathJaxContext config={CONFIG}>
                        <h2>
                            <span className='before'>{props.n}</span>
                            {props.name}
                        </h2>
                        {props.children}
                </MathJaxContext>
            </div>
            <Navigation choose={props.n}/>
        </>
    )
}

const SM = (props)=> {
  return (
    <section className="section1">
      <h3>{props.h}</h3>
      {props.children}
    </section>
  )
}

const S = (props)=> {
    return (
        <div className="section2">
            <h4><span>&#8811; </span> {props.h}</h4>
            <MathJax hideUntilTypeset='first'>
                {props.children}
            </MathJax>
        </div>
    )
}

function C(props) {
    let config = [/* title, class*/]
    switch (props.t){
        case 't':
            config = ['Theorem:', 'theorem']
            break
        case 'e':
            config = ['Example:', 'example']
            break
        case 's':
            config = ['Problem solving stratigy:', 'stratigy']
            break
        case 'n':
            config = ['Notes', 'note']
            break
        case 'p':
            config = ['Proof', 'proof']
            break
        case 'further':
            config = ['Further knowledge', 'further']
            break
        case 'r':
            config = ['Rule:', 'rule']
            break
        case 'd':
            config = ['Definition:', 'definition']
            break
    }

    const title = props.h? props.h:'';

    return (
        <div className='c-holder'>
{/*         { props.t !== 'e' ? 
            <div className={config[1] + ' c'}>
                <h5 className='title'>
                    <span>{config[0]}</span>{' ' + title}
                </h5>
                <div className="content">
                    {props.children}
                </div>
            </div>
            : 
            <div className={config[1] + ' c'}>
                <h5 className='title'>
                    <span>{config[0]}</span>{' ' + title}
                </h5>
                <div className="content">
                    {props.children}
                </div>
            </div>
        }  */}
            <div className={config[1] + ' c'}>
                <h5 className='title'>
                    <span>{config[0]}</span>{' ' + title}
                </h5>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const U1 = (props)=> {
    return (
        <ul className='list1'>
            {props.children}
        </ul>
    )
}

const A = (props) => {
    console.log("#" + props.r)
    return (
        <a href={'#' + props.r} className="local-reference">
            {props.children}
        </a>
    )
}


const Header = ()=> {
    return (
    <header id='main-title'>
            <h1>
                Hyper Calculus
            </h1>
            <h3>Your Integral Calculus Reference</h3>
            <h2>
                By: Eng. George Nabil
            </h2>
    </header>
    )
}

const Footer = ()=> {
    return (
    <footer>
        <div id='disclaimer' style={{"maxWidth":"70ch"}}>
            <p>
                <strong>What is the purpose of this work?</strong>
                <br />
                This Reference aims to help students find all calculus formulas fast, And to be as a repository for calculus tips and tricks and stratigies of solving. And we expect you to have the necessary knowledge before you use this reference.
            </p>
            <br />
            <p>
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

const Navigation = (props) => {
    const c = props.choose
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };
    return (
    <aside>
        <div>
            <button  onClick={handleClick}>Topics</button>
            <h2>Hyper Calculus</h2>
        </div>
        <ul className={isActive ? '' : 'hidden'}>
            <li className={c == 1 ?'highlighted': ''}>
                <Link to='/background-and-basics' >
                    Background and Basics
                </Link>
            </li>
            <li className={c == 2 ?'highlighted': ''}>
                <Link to='/techniques-of-integration' >
                    Techniques of Integration
                </Link>
            </li>
            <li className={c == 3 ?'highlighted': ''}>
                <Link to='/multiple-integration' >
                    Multiple Integration
                </Link>
            </li>
            <li className={c == 4 ?'highlighted': ''}>
                <Link to='/applications-of-integration' >
                    Applications of Integration
                </Link>
            </li>
            <li className={c == 5 ?'highlighted': ''}>
                <Link to='/vector-calculus' >
                    Vector Calculus
                </Link>
            </li>
        </ul>
    </aside>
    )
}

const CONFIG = {
    svg: {
      fontCache: 'global'
    },
    extensions: ["tex2jax.js", "TeX/AMSmath.js"],
    jax: ["input/TeX","output/SVG"],/*, "output/PreviewHTML"*/
    loader: { 
        load: ['input/tex-base', 'output/svg', '[tex]/require', '[tex]/mathtools'] //, 'ui/menu'
    },
    tex: {
      inlineMath: [["$", "$"],['"','"']],
      displayMath: [["$$", "$$"]],
      // packages: ['amsmath','amssymb','float','base', 'require','ams','mathtools']
      packages: {'[+]': ['mathtools']},
    },
    startup: {
      typeset: false
    },
    options: {
        enableMenu: false,
    },
    "HTML-CSS": { 
        preferredFont: "TeX", 
        availableFonts: ["STIX","TeX"],  
    }
};

export {
    S, SM, Chapter, C, A, CONFIG, U1,
    Header, Footer, Navigation}
