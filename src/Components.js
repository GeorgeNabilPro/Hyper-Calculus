import React from 'react'
import $ from 'jquery'
import _ from 'underscore'

import {useEffect, useMemo, useState, useId ,Suspense} from 'react'
import {MathJaxContext, MathJax} from 'better-react-mathjax'
import {Link, useLocation, matchRoutes} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const PATH1 = './assets/manim/'
const PATH2 = './assets/'
const PATH3 = './assets/videos/'
const cTypes = {
    't': ['Theorem', 'theorem'],
    'e': ['Example', 'example'],
    's': ['Solving stratigy', 'stratigy'],
    'n': ['Notes', 'note'],
    'p': ['Proof', 'proof'],
    'd': ['Definition', 'definition'],
    'r': ['Rule', 'rule'],
    'further' : ['Further knowledge', 'further'],
}

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export function Chapter(props) {
    window.n = props.n
    useEffect(()=>{window.n = props.n},[props.n])
    let preContentNav = <ContentNav sm={props.children}/>
    return (
        <>
            {preContentNav}
            <div className={'content-wrapper n'+ props.n}>
                <h2>
                    <span className='before'>{props.n}</span>
                    {props.name}
                </h2>
                <MathJaxContext config={CONFIG}>
                <MathJax hideUntilTypeset='first'>
                    {props.children}
                </MathJax>
                </MathJaxContext>
            </div>
            {/* <Navigation choose={props.n}/> */}
        </>
    )
}

export const SM = (props)=> {
    // Takes < 
    //      h:header  !! , !UNIQUE, 
    const id = props.h.toLowerCase().replaceAll(' ','_')
    return (
        <section className="section1" id={id}>
            <h3>{props.h}</h3>
            {props.children}
        </section>
    )
}

export const S = (props)=> {
    // Takes < 
    //      h:header  !! , !UNIQUE,
    const id = props.h.toLowerCase().replaceAll(' ','_')
    return (
        <section className="section2" id={id}>
            <h4><span>&#8811; </span> {props.h}</h4>
                {props.children}
        </section>
    )
}

export class C extends React.Component {
    // Takes < 
    //    h:title             #= ""
    //    id:id               !!, !UNIQUE
    //    t:type {cTypes}     #= "t"
    constructor(props) {
        super(props);
        this.id = props.id
        this.title = props.h? ': '+props.h : ':';
        this.children = props.children;
        this.config = ['Theorem:', 'theorem'];
        if (props.t in cTypes) {
            this.config = cTypes[props.t];
        }
    }
    
    render() {
        return (
            <div className='c-holder ' id={this.id}>
                <div className={this.config[1] + ' c'}>
                    <h5 className='title'>
                        <span>{this.config[0]}</span>{this.title}
                    </h5>
                    <div className="content">
                        {this.children}
                    </div>
                </div>
            </div>
        )
    }
}

export const U1 = (props)=> {
    return (
        <ul className='list1'>
            {props.children}
        </ul>
    )
}

export const A = (props) => {
    // Takes < 
    //      r:route {1,2,3,4,5}           #= 3, 
    //          1: /background-and-basics'
    //          2: /techniques-of-integration'
    //          3: /multiple-integration'
    //          4: /vector-calculus'
    //          5: /applications-of-integration'
    //      id:                           !!
    const route = props.r? props.r: "/multiple-integration"
    return (
        <HashLink to={route + '#' + props.id} className="local-reference">
            {props.children}
        </HashLink>
    )
}

export const Mimg = (props) => {
    // Takes < 
    //      h:title, caption  #= "", 
    //      t:path type {'g',''}   #= "",
    //          'g': To take source from assets directory (PATH2)
    //          '' : To take source from assets/manim directory (PATH1)
    //      p:path            !!,
    //      alt: alternative text in case of missed image  #="",
    const path = props.t === 'g'?  PATH2 + props.p : PATH1 + props.p;
    const alt = props.alt? props.alt: "";
    return (
        <figure className='img-wrapper'>
            <Suspense fallback={<Loading />}>
                <img src={require('' + path)} alt={alt}/> {/*Here we added '' so we don't get "can't fine module" error*/}
            </Suspense>
            <figcaption>{props.h}</figcaption>
        </figure>
    )
}

export const Mvid = (props) => {
     // Takes < 
    //      h:title, caption  #= "", 
    //      p:path            !!,
    //      e:extension       #= "video/mp4",
    const path = PATH3 + props.p
    const extension = props.e? props.e : "video/mp4"
    return( <div className='video-wrapper'>
        <Suspense fallback={<Loading />}>
            <video width="100%" height="auto" controls >
                <source src={require(""+path)} type={extension}/>
            </video>
            <p className='vid-disc'>
                {props.h}
            </p>
        </Suspense>
    </div>)
}

export const ContentNav = (props) => {
    // Takes <
    //    sm:main sections list     !AUTO
    const location = useLocation().pathname;
    const SMElements = props.sm;
    let order = {'r':0, 't':0, 's':0, 'n':0, 'p':0, 'e':0, 'd':0};

    let ordered_ = useMemo(()=>{
        let nKey = 0
        let ordered = []
        for (let el of SMElements) {
            // Here each el is SM component
            nKey ++;
            let id = el.props.h.toLowerCase().replaceAll(' ','_')
            ordered.push(
                <li className={'content-main-section'} key={nKey}>
                    <HashLink smooth to={`#${id}`} scroll={el => scrollWithOffset(el)}>
                        {el.props.h}
                    </HashLink>
                </li>
            )
            let elChildren = el.props.children

            if (elChildren) {
                if (elChildren.constructor !== Array) {
                    if (elChildren.constructor === Object) {
                        elChildren = [elChildren]
                    } else continue
                }
            } else continue

            for (let child1 of elChildren) {
                // Here each child1 is a S component
                if (child1.props && child1.type.name === 'S') {
                    nKey ++;
                    let id = child1.props.h.toLowerCase().replaceAll(' ','_')
                    ordered.push(
                        <li className={'content-section'} key={nKey}>
                            <HashLink smooth to={`#${id}`} scroll={el => scrollWithOffset(el)}>
                                {child1.props.h}
                            </HashLink>
                        </li>
                    );
                    let children = child1.props.children
                    
                    if (children) {
                        if (children.constructor !== Array) {
                            if (children.constructor === Object) {
                                children = [children]
                            } else continue
                        }
                    } else continue

                    for (let child2 of children) {
                        // Here each child2 is a C component
                        if (child2.props) {
                            let type = child2.props.t;
                            if (type && type !== 'further') {
                                order[type] ++; nKey ++;
                                ordered.push(
                                    <li className={`content-container`} key={'c' + child2.props.id}>
                                        <HashLink smooth to={`#${child2.props.id}`} scroll={el => scrollWithOffset(el)}>
                                            {cTypes[type][0]}, {order[type]}
                                        </HashLink>
                                    </li>
                                )
                            } else if (type) {
                                nKey ++;
                                ordered.push(
                                    <li className={`content-container`} key={'c' + child2.props.id}>
                                        <HashLink smooth to={`#${child2.props.id}`} scroll={el => scrollWithOffset(el)}>
                                            {cTypes[type][0]}
                                        </HashLink>
                                    </li>
                                )
                            }
                        } 
                    }
                } 
            }
        }
        return ordered
    },[])
    return (
        <aside className='contents-menu'>
            <ul>
                {[...ordered_]}
            </ul>
        </aside>
    )
}

export const CONFIG = {
    // The MathJax configuration block
    jax: ["input/TeX","output/SVG"],/*, "output/PreviewHTML"*/
    extensions: ["tex2jax.js", "TeX/AMSmath.js","mml2jax.js","MathEvents.js"],
    tex: {
      inlineMath: [["$", "$"],['"','"']],
      displayMath: [["$$", "$$"]],
      // packages: ['amsmath','amssymb','float','base', 'require','ams','mathtools']
      packages: {'[+]': ['mathtools','amssymb']},
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

export const Loading = ()=>{
    return (
        <div className="loading-screen">
            <div className='loading-spinner' />
        </div>
    )
}

