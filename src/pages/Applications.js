import React from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {SM, S, C, U1, A, CONFIG, Chapter} from '../Components'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import _ from 'underscore'

export default function Applications (props){
    
    return (
<Chapter n={4} name="Applications of Integration">
    <SM h="Applications in physics">
        <S h="Physical properties">
            <C id={_.uniqueId()} t='t' h='Mass of a body presented by a planar region'>
                Given the density function {`"\\rho (x,y)"`} of a body represented by the region "D" the mass of this body is given by:
                {`$$ \\mathrm{mass} = \\iint_D \\rho (x,y) \\mathrm{d}A  $$`}
                
            </C>
        </S>
        <S h="Electromagnetism">
            <C id={_.uniqueId()} t='t' h="Integral form of Maxwell's equations">

            </C>
        </S>
        <S h="Heat equations"></S>
        <S h="Wave equations"></S>
    </SM>
    <SM h="Applications in geometry">
        <S h="Geometric center"></S>
        <S h="Length of a curve">
            <C id={_.uniqueId()} t='r' h='Length of curve of a function'>

            </C>
            <C id={_.uniqueId()} t='r' h='Length of curve of a parametric function'>

            </C>
            <C id={_.uniqueId()} t='e'></C>
        </S>
        <S h="Finding areas">
            <C id={_.uniqueId()} t='r' h='Area of surface of a function above some region'>

            </C>
            <C id={_.uniqueId()} t='r' h='Area of revolution'>

            </C>
            <C id={_.uniqueId()} t='r' h='Area enclosed by a polar curve'>

            </C>
            <C id={_.uniqueId()} t='r' h='Area enclosed by a parametric curve'>

            </C>
            <C id={_.uniqueId()} t='e'></C>
            <C id={_.uniqueId()} t='e'></C>
            <C id={_.uniqueId()} t='e'></C>
            <C id={_.uniqueId()} t='e'></C>
            <C id={_.uniqueId()} t='e'></C>
            <C id={_.uniqueId()} t='e'></C>
        </S>
        <S h='Finding volumes'>
            Finding the volume between a function of two variables "f(x,y)" and the "xy"-plane is very simple we just take th integral of this function over the planar region in the "xy"-plane. <br />
            Also if we want to evaluate the volume of a region in a three dimensional space we simply take the tripple integration over this region.
            <C id={_.uniqueId()} t='e'>

            </C>
            <C id={_.uniqueId()} t='r' h='Volume of revolution'>

            </C>
            <C id={_.uniqueId()} t='e'></C>
            <C id={_.uniqueId()} t='e'></C>
            <C id={_.uniqueId()} t='e'></C>
        </S>
    </SM>
    <SM h="Applications in mechanics">
        <S h='Rules of motion'>
            <C id={_.uniqueId()} t='t' h="Moment of inertia about axis">
            </C>
            <C id={_.uniqueId()} t='t' h="Polar Moment of inertia">
            </C>
            <C id={_.uniqueId()} t='t' h="Product moment of inertia">

            </C>
        </S>
        <S h='Moment of inertias in two dimensions'>

        </S>
        <S h='Moment of inertias in three dimensions'>
            <C id={_.uniqueId()} t='t' h="Moment of inertia about axis">
                For a 
            </C>
        </S>
        <S h='Power and energy'></S>
    </SM>
    <SM h="Applications in probability"></SM>
    <SM h="Other applications">
        <S h="Averages">
            To get the average of the values of a function "f(x)" on an interval "[a,b]", Knowing that f(x) is Riemann integrable over "[a,b]" then the average
            {`$$
                f_{avg} = \\frac{\\int_a^b f(x) \\mathrm{d}x}{\\text{Length of [a,b]}} = \\frac{\\int_a^b f(x) \\mathrm{d}x}{b-a}
            $$`}
            We can apply this for functions of more variables than one, that is:<br />
            The average of a function "f(x,y)" over the region "D" where "f(x,y)" is Riemann integrable over "D" is given by:
            {`$$
                f_{avg} = \\frac{\\iint_D f(x,y) \\mathrm{d}A}{\\text{Area of D}} = \\frac{\\iint_D f(x,y) \\mathrm{d}A}{\\iint_D \\mathrm{d}A}.
            $$`}
            For this formula we can get the average of the function over the rectangular region {`R=[a,b] \\times [c,d]`} as following:
            {`$$
                f_{avg} = \\frac{\\displaystyle{\\int_a^b \\int_c^d f(x,y) \\mathrm{d}y\\mathrm{d}x}}{(b-a)(d-c)}.
            $$`}
            And the average of a function "f(x,y,z)" over the "E"  where "f(x,y,z)" is Riemann integrable over the general region "E" is given by:
            {`$$
                f_{avg} = \\frac{\\iiint_E f(x,y,z) \\mathrm{d}V}{\\text{Volume of E}} = \\frac{\\iiint_E f(x,y,z) \\mathrm{d}V}{\\iiint_E \\mathrm{d}V}.
            $$`}
            <C id={_.uniqueId()} t='e'>
            </C>
            <C id={_.uniqueId()} t='e'>
            </C>
            <C id={_.uniqueId()} t='e'>
            </C>
            <C id={_.uniqueId()} t="further">
                By induction we find that the average of a function of multiple variables {`"f(x_1, x_2, \\dots ,x_n)"`} over "H" where "H" is an <span style={{"display":"inline-block"}}>"n"-dimension</span> general region is given by:
                {`$$
                f_{avg} = \\frac{\\displaystyle{\\int \\underset{n}{\\dotsm} \\int f(x_1, x_2, \\dots ,x_n) \\mathrm{d} \\Sigma}}{\\displaystyle{\\int \\underset{n}{\\dotsm} \\int \\mathrm{d} \\Sigma}}.
                $$`}
            </C>
        </S>
    </SM>
</Chapter>
    )
}