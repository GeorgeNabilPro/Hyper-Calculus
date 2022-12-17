import React from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {SM, S, C, U1, A, CONFIG, Chapter, Mimg} from '../Components'
import {Link} from 'react-router-dom'
import _ from 'underscore'

export default function MultipleInt (){
    return (
<Chapter n={3} name="Multivariable Calculus">
    <SM h="Double integration">
        <S h="Definition of double integrals">
            Using the idea of Riemann sum we can get the integral for a function {`"f(x,y)"`} that is integrable over a region {`"R=[a,b]\\times [c,d]"`} in the xy-plane. We can calculate the volume between the function and this region using Riemann sum by dividing the rectangle {`"R"`} into small rectangles {`"R_{ij}"`} each one of them has the same width  {`"\\Delta x= \\frac{b-a}{m}"`}  and same height {`"\\Delta y= \\frac{d-c}{n}"`}, and for each small rectangular region {`"R_{ij}"`} let {`"(x_{ij}^*,y_{ij}^* )"`} be any point in this region then,
            {`$$
                V=\\lim_{m\\rightarrow \\infty,n\\rightarrow \\infty}{\\sum_{i=1}^m \\sum_{j=1}^n f(x_{ij}^*,y_{ij}^*)}  \\Delta x\\Delta y.
            $$`}
            Using integral notation we get:
            {`$$
            V = \\iint_R f(x,y)\\mathrm{d} A=\\lim_{m\\rightarrow \\infty,n\\rightarrow \\infty}⁡{\\sum_{i=1}^m \\sum_{j=1}^n f(x_{ij}^*,y_{ij}^*)}  \\Delta x\\Delta y.
            $$`}
            <C id={_.uniqueId('c-')} t='n'>
            We can combine {`"\\mathrm{d} x \\mathrm{d} y"`} into {`"\\mathrm{d} A"`} for better notation and general meaning that's because {`"\\mathrm{d} A"`} can be decomposed into different quantities in different coordinate systems. However, when we start solving we decompose {`"\\mathrm{d} A"`} in the way that makes the integral easier to solve.
            </C>
        </S>
        <S h="Properties of double integrals">
            Assume that the functions "f (x, y)" and "g(x, y)" are integrable over the rectangular region "R"; "S" and "T" are subregions of "R" then:
            <ol className='left-aligned-math'>
                <li>
                    The sum "f + g "is integrable and
                    {`$$ \\iint_R {f(x,y)+g(x,y)} \\mathrm{d}A = \\iint_R  f(x,y) \\mathrm{d} A+\\iint_R  g(x,y) \\mathrm{d} A.$$`}
                </li>
                <li>
                    For a constant {`"c \\in \\mathbb{R}"`}, "cf" is integrable and
                    {`$$ \\iint_R cf(x,y) \\mathrm{d} A = c\\cdot \\iint_R  f(x,y) \\mathrm{d} A. $$`}
                </li>
                <li>
                    {`$$ \\iint_R f(x,y) \\mathrm{d} A =\\iint_S  f(x,y) \\mathrm{d} A+\\iint_T  f(x,y) \\mathrm{d} A, \\text{where } R=S \\cup T \\text{ and } S\\cap T=\\emptyset $$`}
                </li>
                <li>
                If {`"f(x,y)"`}  can be factored as a product of a function {`"g(x)"`} of "x" only,and a function {`" h(y)"`} of "y" only then:
                {`$$
                \\iint_R f(x,y) \\mathrm{d} A=\\left( \\int_a^b g(x) \\mathrm{d} x \\right) \\left(\\int_c^d h(y) \\mathrm{d} y \\right), 
                $$`}
                </li>
                <li>
                    Fubini's Theorem:
                    {`
                    $$
                    \\iint_R f(x,y) \\mathrm{d}A = \\int_a^b \\int_c^d f(x,y) \\mathrm{d}y\\mathrm{d}x = \\int_c^d \\int_a^b f(x,y) \\mathrm{d}x\\mathrm{d}y
                    $$
                    `}
                </li>
            </ol>
            We can break the double integral into two integrals each one of them with respect to one variable. This is called iterated integral
            {`$$
            \\iint_R  f(x,y) \\mathrm{d}A=\\int_a^b \\left(\\int_c^d f(x,y) \\mathrm{d}y \\right)  \\mathrm{d}x.
            $$`}
            <C id={_.uniqueId('c-')} t='e'>
                Calculate the integral
                {`" \\displaystyle{ \\int_{-\\pi}^0 \\int_0^2 x \\sin (y) + 3x^2 y^2 \\mathrm{d}x\\mathrm{d}y }"`}
                <hr></hr>
                {`
                \\begin{aligned}
                I &= \\int_{-\\pi}^0 \\int_0^2 x \\sin (y) + 3x^2 y^2 \\mathrm{d}x\\mathrm{d}y \\\\
                  &= \\int_{-\\pi}^0 \\left[ \\frac{x^2}{2} \\sin (y) + x^3 y^2 
                    \\right]_{x=0}^{x=2}  \\mathrm{d}y \\\\
                  &= \\int_{-\\pi}^0 2 \\sin (y) + 8 y^2 \\mathrm{d}y \\\\
                  &=   \\left[ -2 \\cos (y) + \\frac{8}{3} y^3 \\right]_{-\\pi}^{0}  \\\\
                  &= -2 -2 - \\frac{8}{3} \\times - \\pi^3 = -4 + \\frac{8 \\pi^3 }{3}.
                \\end{aligned}
                `}
            </C>
            <C id={_.uniqueId('c-')} t='r' h='Area of a region'>
                The area of a closed bounded plane region D is:
                {`$$
                A=\\iint_D  \\mathrm{d}A.
                $$`}
            </C>
        </S>
        <S h="Double integrals over general regions">
            We can integrate a function {`"f(x,y) "`}over a general region {`"D"`} in the xy-plane by using iterated integrals as following:<br/> 
            If {`"D"`} lies between two vertical lines and the graphs of two continuous functions{`" g_1 (x)"`} and {`"g_2 (x)"`} then: 
            {`$$
            \\iint_D f(x,y)\\mathrm{d} A=\\int_a^b \\left( \\int_{g_1 (x)}^{g_2 (x)} f(x,y)\\mathrm{d} y\\right)\\mathrm{d} x
            $$`}
            If {`"D"`} lies between two horizontal lines and the graphs of two continuous functions {`"h_1 (y)"`} and {`"h_2 (y)"`} then:
            {`$$
            \\iint_D f(x,y)\\mathrm{d} A=\\int_c^d \\left(\\int_{h_1 (y)}^{h_2 (y)} f(x,y)\\mathrm{d} x\\right)\\mathrm{d} y
            $$`}
            If "D" is composed of several curves that are defined using functions (each function can be a functin of "x" or "y") then:<br/>
            We can decompose {`"D"`} into a number of smaller regions, where each region is of one type of the two types above.
            {`$$
                \\iint_D f(x,y)\\mathrm{d} A=\\iint_{D_1} f(x,y)\\mathrm{d} A+\\iint_{D_2} f(x,y)\\mathrm{d} A
            $$`}
            <C id={_.uniqueId('c-')} t='e'>
                Find the area bounded by the function {`"f(x)= -x^2 + 8"`}, the function {`"g(x)= 2 x \\sin (x)"`} and the lines "x = 0, x=2"
                <hr />
                Area of a region D = {`"\\iint_D  \\mathrm{d}A."`}
                {`
                \\begin{aligned}
                A &= \\int_0^2 \\int_{y=2 x \\sin (x)}^{y=-x^2 + 8} 1 \\mathrm{d}y \\mathrm{d}x \\\\
                  &= \\int_0^2 -x^2 + 8 - 2 x \\sin (x) \\mathrm{d}x \\\\
                  &= \\left[ \\frac{-x^3}{3} + 8 x - 2 x \\cos (x) \\right]_0^2 - 2 \\cdot \\int_0^2 - \\cos (x) \\mathrm{d}x \\\\
                  &= \\frac{-8}{3} + 8 \\times 2 - 2 \\times cos(2) + 2 + 2 \\cdot \\left[\\sin (x) \\right]_0^2 \\\\
                  &= 16.1656 + 2 \\times \\sin (2) \\\\
                  &= 17.9842.
                \\end{aligned}
                `}
                <Mimg p="gs3.png"/>
            </C>
            <C id={_.uniqueId('c-')} t='e'>
                Find the integral of the function {`"f(x,y)=6 x^2 + 3 y^2"`} over the region D which is enclosed by the function {`"g_1 (x) = \\sqrt{2x^2 - 3x + 2}"`} and the lines 
                <Mimg p="gs4.png"/>
            </C>
            <C id={_.uniqueId('c-')} t='s' h='Changing order of integration' >
                
            </C>
            <C id={_.uniqueId('c-')} t='e' h=''></C>
        </S>
        <S h="Double integrals in polar coordinates">
            To integrate a function {`"f(r,\\theta)"`} over a polar rectangle region {`"R=[a,b]\\times [\\alpha,\\beta ]"`} we divide the interval {`"[a,b]"`} into subintervals {`"\\left[ r_{i-1},r_i \\right]"`} of length {`"\\Delta r=\\frac{b-a}{m}"`} and divide the interval {`"[\\alpha,\\beta ]"`} into subintervals {`"[\\theta_{j-1},\\theta_j ]"`} of width {`"\\Delta \\theta=\\frac{\\beta -\\alpha}{n}"`}, and let {`"(r_{ij}^*,\\theta_{ij}^* )"`} be any point in the small polar rectangle {`"\\left[ r_{i-1},r_i \\right]\\times \\left[ \\theta_{j-1},\\theta_j \\right]"`}, and let {`"r_{ij}^*=\\frac{r_{i-1}+r_i}{2}"`} (the polar rectangle {`"R"`} is divided into small polar rectangles {`"R_{ij}"`} each one has the area of {`"r_{ij}^* \\Delta r\\Delta \\theta"`}). Now the volume between {`"f(r,\\theta)"`} and the polar rectangle {`"R"`} is defined as:
            {`$$
            V=\\lim_{m\\rightarrow \\infty,n\\rightarrow \\infty}⁡{\\sum_{i=1}^m \\sum_{j=1}^n f(r_{ij}^*,\\theta_{ij}^* )  r_{ij}^* \\Delta r\\Delta \\theta}.
            $$`}
            integral notation
            {`
            \\begin{aligned}
            &\\iint_R f(r,\\theta)\\mathrm{\\mathrm{d}} A &&=\\lim_{m\\rightarrow \\infty,n\\rightarrow \\infty}⁡{\\sum_{i=1}^m \\sum_{j=1}^n f(r_{ij}^*,\\theta_{ij}^* )  r_{ij}^* \\Delta r\\Delta \\theta}. \\\\
            &\\iint_R f(r,\\theta)\\mathrm{\\mathrm{d}} A &&=\\iint_R f(r,\\theta)r\\mathrm{d}r\\mathrm{d}\\theta
            \\end{aligned}
            `}
            iterated integral form
            {`$$
            \\iint_R f(r,\\theta)\\mathrm{\\mathrm{d}} A=\\int_{\\theta=\\alpha}^{\\theta=\\beta} \\left(\\int_{r=a}^{r=b} f(r,\\theta)r\\mathrm{d}r\\right) \\mathrm{d}\\theta.
            $$`}
            For a general polar region {`"D"`} between {`"a\\le r\\le b"`} and {`" h_1 (\\theta)\\le\\theta\\le h_2 (\\theta)"`}
            {`$$
            \\iint_D f(r,\\theta)r\\mathrm{d}r\\mathrm{d}\\theta=\\int_\\alpha^\\beta \\left(\\int_{h_1 (\\theta)}^{h_2 (\\theta)} f(r,\\theta)r\\mathrm{d}r \\right)\\mathrm{d}\\theta.
            $$`}
            <C id={_.uniqueId('c-')} t='e'>

            </C>
            <C id={_.uniqueId('c-')} t="s" h="Convert double integral to polar coordinates">
                To convert a double integral from cartesian coordinates to polar coordinates:
                <ul>
                    
                </ul>
            </C>
            <C id={_.uniqueId('c-')} t='e'>

            </C>
        </S>
    </SM>
    <SM h="Tripple integration">
        <S h="Definition of tripple integrals in cartesian coordiantes">
            Using Riemann sum in tripple integrabls might be not intuitive, as we can't visulaize a function of three variables (which will be in 4-D). But, we can extend this method to evaluate tripple integrabls. <br />
            We define a rectangular box "B" in "R^3" as {`"B= \\{ (x, y, z)|a \\leq x \\leq b, c \\leq y \\leq d, e \\leq z \\leq f \\} ."`} , We divide the interval {`"[a,b]"`} into "l" subintervals {`" [ x_{i-1} , x_i ]"`} of equal length {`" \\Delta x = \\frac{b - a}{l}"`}, divide the interval {`"[c,d]"`} into "m" subintervals {`" [ y_{j-1} , x_j ]"`} of equal length {`" \\Delta y = \\frac{d - c}{m}"`}, and divide the interval {`"[e,f]"`} into "n" subintervals {`" [ z_{k-1} , z_k ]"`} of equal length {`" \\Delta z = \\frac{f - e}{n}"`}. Then the box "B" is divided into subboxes {`"B_{ijk} = [x_{i-1}, x_{i}] \\times [ y_{j-1} , x_j ] \\times [ z_{k-1} , z_k ]"`} and for each "i", "j" and "k" if we consider a point {`" \\left( x_{ijk}^{*},y_{ijk}^{*},z_{ijk}^{*}  \\right) "`}. then from the tripple Riemann sum 
            {`
            $$
            {\\sum_{i=1}^l \\sum_{j=1}^m \\sum_{k=1}^n f\\left( x_{ijk}^{*},y_{ijk}^{*},z_{ijk}^{*}  \\right) }  \\Delta x\\Delta y\\Delta z
            $$
            `}
            We define the triple integral in terms of the limit of a triple Riemann sum (as we did for the double integral in terms of a double Riemann sum).
            {`
            $$
            \\iiint_B f(x,y,z) \\mathrm{d}V = \\lim_{l,m,n \\to \\infty} {\\sum_{i=1}^l \\sum_{j=1}^m \\sum_{k=1}^n f\\left( x_{ijk}^{*},y_{ijk}^{*},z_{ijk}^{*}  \\right) }  \\Delta x\\Delta y\\Delta z
            $$
            `}
            <C id={_.uniqueId('c-')} t='t' h="Fubin's theorem for triple integrals">
                If "f(x,y,z)" is continuous on the box {`"B = [a,b] \\times [c,d] \\times [e,f]"`} then:
                {`$$
                \\iiint_B f(x,y,z) \\mathrm{d}V = \\int_a^b \\int_c^d \\ int_e^f f(x,y,z) \\mathrm{d}z\\mathrm{d}y\\mathrm{d}x
                $$`}
            </C>
            <C id={_.uniqueId('c-')} t='n'>
                Here the order of this iterated integral doesn't matter as long as the region of integration is a box, e.g.
                {`$$
                \\int_a^b \\int_c^d \\int_e^f f(x,y,z) \\mathrm{d}z\\mathrm{d}y\\mathrm{d}x = 
                \\int_a^b \\int_e^f \\int_c^d f(x,y,z) \\mathrm{d}y\\mathrm{d}z\\mathrm{d}x = 
                \\int_e^f \\int_a^b \\int_c^d f(x,y,z) \\mathrm{d}y\\mathrm{d}x\\mathrm{d}z = \\dots
                $$`}
            </C>
            <C id={_.uniqueId('c-')} t="e">
            </C>
        </S>
        <S h="Tripple integrals over general regions">
            <C id={_.uniqueId('c-')} t="t" h="Tripple integrals over general regions">
                The triple integral of a continuous function "f(x,y,z)" over the general region {`"E = \\{ 
                (x,y) \\in D | g(x,y) \\leq z \\leq h(x,y) 
                \\}"`} in "R^3", is:
                {`
                $$
                \\iiint_E f(x,y,z) \\mathrm{d}V = \\iint_D \\left[ \\int_{g(x,y)}^{h(x,y)}  \\mathrm{d}z \\right] \\mathrm{d} A
                $$
                `}
                Where "D" is the projection of "E" on the "xy"-plane.
            </C>
            <C id={_.uniqueId('c-')} t="e">
            </C>
            <C id={_.uniqueId('c-')} t='s' h="Changing order of integration in tirpple integrals">

            </C>
        </S>
        <S h="Tripple integrals in different coordinate systems">
            <C id={_.uniqueId('c-')} t='t' h="Tripple integrals in cylindrical coordinates"></C>
            <C id={_.uniqueId('c-')} t='t' h="Tripple integrals in spherecal coordinates"></C>
        </S>
    </SM>
    <SM h="General multiple integration">
        <S h='Change of variables in multiple integrals'></S>
        <S h="Generalization of multiple integrals"></S>
        <S h="Iterated integrals">
            <C id={_.uniqueId('c-')} t='t' h="Cauchy formula for repeated integration">
            Let "f" be a continuous function on the real line. Then the nth repeated integral of "f" with basepoint "a"
            {`$$ f^{(-n)}(x)=\\int _{a}^{x}\\int _{a}^{\\sigma _{1}}\\cdots \\int _{a}^{\\sigma _{n-1}}f(\\sigma _{n})\\,\\mathrm {d} \\sigma _{n}\\cdots \\,\\mathrm {d} \\sigma _{2}\\,\\mathrm {d} \\sigma _{1}, $$`}
            is given by single integration
            {`$$
            f^{(-n)}(x)={\\frac {1}{(n-1)!}}\\int _{a}^{x}\\left(x-t\\right)^{n-1}f(t)\\,\\mathrm {d} t.
            $$`}
            </C>
        </S>
    </SM>
</Chapter>
    )
}