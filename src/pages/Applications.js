import React from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {SM, S, C, U1, A, CONFIG, Chapter} from '../Components'
import {Link} from 'react-router-dom'

export default function Applications (){
    return (
<Chapter n={4} name="Applications of Integration">
    <SM h="Applications in physics">
        <S h="Physical properties"></S>
        <S h="Electromagnetism"></S>
        <S h="Heat equations"></S>
        <S h="Wave equations"></S>
    </SM>
    <SM h="Applications in geometry">
        <S h="Geometric center"></S>
        <S h="Length of a curve"></S>
        <S h="Areas and volumes"></S>
        <S h="Volumes of revolution"></S>
    </SM>
    <SM h="Applications in mechanics">
        <S h='Moment of inertias'></S>
        <S h='Power and energy'></S>
        <S h='Rules of motion'></S>
    </SM>
    <SM h="Applications in probability"></SM>
    <SM h="Other applications">
        <S h="Averages"></S>
    </SM>
</Chapter>
    )
}


