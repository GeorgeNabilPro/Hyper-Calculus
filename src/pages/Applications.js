import React from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {SM, S, C, U1, A, CONFIG, Chapter} from '../Components'
import {Link} from 'react-router-dom'

export default function Applications (){
    return (
<Chapter n={4} name="Applications of Integration">
    <SM h="Applications in physics">
        <S h="Physical properties">
            <C r='t' h='Mass of a body from density equation'>

            </C>
        </S>
        <S h="Electromagnetism">
            <C r='t' h="Integral form of Maxwell's equations">

            </C>
        </S>
        <S h="Heat equations"></S>
        <S h="Wave equations"></S>
    </SM>
    <SM h="Applications in geometry">
        <S h="Geometric center"></S>
        <S h="Length of a curve"></S>
            <C t='r' h='Length of curve of a function'>

            </C>
            <C t='r' h='Length of curve of a parametric function'>

            </C>
        <S h="Finding areas">
            <C t='r' h='Finidng area under a curve'>

            </C>
            <C t='r' h='Area of a planar region'>

            </C>
            <C t='r' h='Area of surface of a function above some region'>

            </C>
            <C t='r' h='Area of revolution'>

            </C>
            <C t='r' h='Area enclosed by a polar curve'>

            </C>
            <C t='r' h='Area enclosed by a parametric curve'>

            </C>
        </S>
        <S h='Finding volumes'>
            <C t='r' h='Finiding volume under a curve'>

            </C>
            <C t='r' h='Volume of revolution'>

            </C>
            <C t='r' h='Volume of a region'>

            </C>
        </S>
    </SM>
    <SM h="Applications in mechanics">
        <S h='Moment of inertias'></S>
        <S h='Power and energy'></S>
        <S h='Rules of motion'>
            <C r='r' h='Velocity and acceleration of a body'>

            </C>
        </S>
    </SM>
    <SM h="Applications in probability"></SM>
    <SM h="Other applications">
        <S h="Averages"></S>
    </SM>
</Chapter>
    )
}


