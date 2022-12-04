import React from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {SM, S, C, U1, A, CONFIG, Chapter} from '../Components'
import {Link} from 'react-router-dom'
import Markdown from 'marked-react';

export default function VectorInt (){
    return (
<Chapter n={5} name="Vector Integration">
        <SM h='Line integrals'></SM>
        <SM h='Surface integrals'></SM>
        <SM h="Divergece and curle"></SM>
        <SM h="Theorms in vector calculus">
            <S h="Green's theorem"></S>
            <S h="Stokes' theorem"></S>
            <S h="The divergence theorem"></S>
        </SM>
</Chapter>
    )
}
