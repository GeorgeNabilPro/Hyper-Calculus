import React from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {SM, S, C, U1, A, CONFIG, Chapter} from './Components'
import {Link} from 'react-router-dom'

export default function Applications (){
    return (
<Chapter n={4} name="Applications of Integration">
    <SM h="Applications in physics"></SM>
    <SM h="Applications in geometry"></SM>
    <SM h="Applications in mechanics"></SM>
    <SM h="Applications in probability"></SM>
    <SM h="Other applications"></SM>
</Chapter>
    )
}


