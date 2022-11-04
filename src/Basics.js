import React from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {SM, S, C, U1, A, CONFIG, Chapter} from './Components'
import {Link} from 'react-router-dom'


function Basics () {
  return (
<Chapter n={1} name="Background and Basics">
  <SM h="Basic definitions and identities of limits">
    <S h="Limit laws">
        For functions "f(x), g(x), h(x)" let "a" be in the domain of "f", "b" be in the domain of "g" and c be a constant, then:
        {`
        \\begin{align}
        & \\lim_{x \\rightarrow a}{f(x)} = L \\text{ if and only if } \\lim_{x \\rightarrow a^- }{f(x)} = \\lim_{x \\rightarrow a^+ }{f(x)} \\\\
        & \\lim_{x \\rightarrow a}{x} = a \\\\
        & \\lim_{x \\rightarrow a}{c} = c \\\\
        \\end{align}
        `}
        <C t="t" h="Limits laws">
        Let "f(x)" and "g(x)" be defined for all {`"x \\neq a"`} over some open interval containing "a". Assume that "L" and "M" are realnumbers such that {`"\\lim_{x \\rightarrow a}{f(x)} = L"`} and {`"\\lim_{x \\rightarrow a}{g(x)} = M"`} Let "c" be a constant. Then, each of the following statements holds:
        {`
        \\begin{align}
        &\\lim_{x \\rightarrow a}{c f(x)} = c \\cdot \\lim_{x \\rightarrow a}{ f(x)} = c \\times L.\\\\
        &\\lim_{x \\rightarrow a}{f(x) \\pm g(x)} = \\lim_{x \\rightarrow a}{f(x)} \\pm \\lim_{x \\rightarrow a}{g(x)} = L + M. \\\\
        &\\lim_{x \\rightarrow a}{f(x) \\cdot g(x)} = \\lim_{x \\rightarrow a}{f(x)} \\cdot \\lim_{x \\rightarrow a}{g(x)} = L \\times M. \\\\
        &\\lim_{x \\rightarrow a}{\\frac{f(x)}{g(x)}} = \\lim_{x \\rightarrow a}{f(x)} / \\lim_{x \\rightarrow a}{g(x)} = \\frac{L}{M}. \\\\
        &\\lim_{x \\rightarrow a}{\\left(f(x) \\right)^n} = \\left(\\lim_{x \\rightarrow a}{f(x)} \\right)^n && \\text{where } n \\text{ is any positive integer.} \\\\
        &\\lim_{x \\rightarrow a}\\sqrt[n]{f \\left( x \\right) } = \\sqrt[n]{\\lim_{x \\rightarrow a}{f(x)}} = \\sqrt[n]{L} && \\text{ for all L if n is odd and for } L \\ge 0 \\text{if n is even}\\\\
        \\end{align}
        `}
        </C>
    </S> 
    <S h="Limits for common functions">
        Some limits of common functions result in indeterminate forms {`"\\frac{0}{0} , \\frac{\\infty}{\\infty} , 0 - \\infty , \\infty - \\infty , 0^0 , \\infty ^0 , 1^\\infty"`}
        <br />
        These limits are very common so it's better to do a shortcut to directly solve these limits instead of doing long algebraic manipulations each time.
        {`
        \\begin{align}
        & \\lim_{x \\to \\infty} \\frac{a_{1}{x}^{n}+a_{2}{x}^{n-1}+a_{3}{x}^{n-2}+...+a_n}{b_{1}{x}^{n}+b_{2}{x}^{n-1}+b_{3}{x}^{n-2}+...+b_n} = \\frac{a_1}{b_1} \\\\
        & \\lim_{x \\to 0} \\frac{\\sin a x}{x} = \\lim_{x \\to 0} \\frac{\\tan a x}{x} = a \\\\ 
        & \\lim_{x \\to 0} \\frac{1 - \\cos a x}{x} = 0 \\\\
        & \\lim _{x\\to 0}(1+x)^{\\frac {1}{x}}=\\lim _{r\\to \\infty }\\left(1+{\\frac {1}{r}}\\right)^{r}=e \\\\ 
        & \\lim_{x \\to 0} \\frac{e^{x}-1}{x} = 1 \\\\ 
        & \\lim_{x \\to 0} \\frac{e^{ax}-1}{x} = a \\\\ 
        & \\lim_{x \\to 0} \\frac{c^{ax}-1}{x} = a \\ln c \\\\ 
        & {\\displaystyle \\lim _{x\\to 0^{+}}x^{x}=1} \\\\ 
        & \\lim _{{x\\to 0}}{\\frac  {\\ln(1+x)}{x}}=1 \\\\ 
        & \\lim_{x \\to 0} \\frac{\\ln(1+ax)}{x} = a \\\\ 
        \\end{align}
        `}
    </S>
    <S h="Solving limits problems">
        <C t='s' h='Substitution methods'>
        If we have a function of the form "f(g(x))" we can simplify it by substitute "g(x)" with new variable as following:
        {`
        \\begin{aligned}
        &\\lim_{x \\to c}{f\\left( g(x) \\right)} && g(x) \\to \\theta \\\\
        &\\lim_{x \\to c}{f\\left( g(x) \\right)} = \\lim_{\\theta \\to g(c)}{f ( \\theta )} 
        \\end{aligned}
        `}
        In some situations we can do the opposite of the above method that is to substitute for "x" with new function (cummonly of the form {`"\\frac{1}{x}"`} to convert limits at infinity to limits at zero or or vice versa) as following:
        {`
        \\begin{aligned}
        &\\lim_{x \\to c}{f(x)} && x \\to g(y) \\\\
        &\\lim_{x \\to c}{f(x)} = \\lim_{y \\to g(c)}{f\\left( g(y) \\right)} 
        \\end{aligned}
        `}
        </C>
        <C t='e' h='Substitution method for limits'>
            Evaluate the limit {`"\\lim_{x \\to 0}{\\frac{\\sin^{-1} x}{x}}"`}<br/>
            <hr></hr>
            Substitute for "x" with {`"\\sin y"`} and take the limit where "y" approaches {`"\\sin 0 = 0"`}
            {`
            \\begin{aligned}
            &\\lim_{x \\to 0}{\\frac{\\sin^{-1} x}{x}} &&= \\lim_{y \\to 0}{\\frac{\\sin^{-1} (\\sin y)}{\\sin y}} \\\\
            & && = \\lim_{y \\to 0}{\\frac{y}{\\sin y}} && \\text{by definition of inverse sine function} \\\\
            & && = \\left(\\lim_{y \\to 0}{\\frac{\\sin y}{y}} \\right)^{-1} && \\text{common form} \\\\
            & && = 1^{-1 }= 1 \\\\
            \\end{aligned}
            `}
        </C>
        <C t='s' h="Using logarithmic and exponential functions in limits">
            We can use the identity
            {`$$ \\lim_{x \\to c}{f(g(x))} =  f \\left( \\lim_{x \\to c}{g(x)} \\right) $$`}
        </C>
        <C t='t' h='The squeeze theorem'>
            Suppose {`"f(c) \\le g(x) \\le h(x)"`} for every "x" in an open interval containing "a", except possibly at "a" if:
            {`$$ \\lim_{x \\to a}f(x) = \\lim_{x \\to a}h(x) = L $$`}
            then:
            {`$$ \\lim_{x \\to a}g(x) = L $$`}
        </C>
        <C t="e" h="Using the squeeze theorem">
            Evaluate the limit {`"\\lim_{x \\to 0}{x^2 \\sin (\\frac{1}{x})}"`}<br/>
            <hr></hr>
            {`
            \\begin{aligned}
            & \\lim_{x \\to 0}{x^2 \\sin (\\frac{1}{x})} = \\lim_{x \\to 0} x^2 \\cdot \\lim_{x \\to 0}{\\sin (\\frac{1}{x})} \\qquad , \\lim_{x \\to 0}{\\sin (\\frac{1}{x})} \\text{  doesn't exist.} \\\\
            & \\because -1 \\le \\sin (\\frac{1}{x}) \\le 1 && \\text{by definition fo the sin.} \\\\
            & \\therefore -x^2 \\le x^2 \\sin (\\frac{1}{x}) \\le x^2 \\\\
            & \\because \\lim_{x \\to 0} -x^2 = \\lim_{x \\to 0} x^2 = 0. \\\\
            & \\therefore \\lim_{x \\to 0}{x^2 \\sin (\\frac{1}{x})} = 0 && \\text{using squeeze theorem.}
            \\end{aligned}
            `}
            <video width="100%" height="auto" controls >
                <source src="./assets/videos/SqueezeTheorem.mp4" type="video/mp4"/>
            </video>
        </C>
        <C t='t' h="L'Hôpital's rule">
            for functions "f" and "g" which are differentiable on an open interval "I" except possibly at a point "c" contained in "I", if {`$ \\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x) = 0 $`} or {`$ \\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x) = \\infty $`} then:
            {`$$
            \\lim _{x\\to c}{\\frac {f(x)}{g(x)}}=\\lim _{x\\to c}{\\frac {f'(x)}{g'(x)}}.
            $$`}
        </C>
        <C t='s' h="Solving limits problems">
            To find and evaluate the limit {`"{\\displaystyle \\lim _{x\\to c}{f(x)}} "`} you should first use the limit laws and substitute directly for "x" with "c" and evaluate the function. If you get a value then this is the evaluation of the limit, If you get an Indeterminate Form ({`"\\frac{0}{0} , \\frac{\\infty}{\\infty} , 0 \\cdot \\infty , \\infty - \\infty , 0^0 , \\infty ^0 , 1^\\infty"`}) then:
            <ol>
                <li>
                    Try to do algebraic manipulation to the function like: <br />
                     factorization, taking common factors, multiplying by a conjugate, using exponential, logarithmic and trigonometric identities, completing square, etc. <br />
                     to reach a common form or a function that you can evaluate its limit using limit laws.
                </li>
                <li>
                    If you reach the form {`"\\frac{0}{0}"`} or {`"\\frac{\\infty}{\\infty}"`} use L'Hôpital's rule once or twice (you can use L'Hôpital's rule iteratively till you reach a fraction that doesn't give an indeterminate form)
                </li>
                    If you reach the form {`"\\infty - \\infty , 0^0 , \\infty ^0 , 1^\\infty"` }
                <li>
                    You can simplify the limit or change the function entirelly using substitution methods
                </li>
                <li>
                    You can use the squeeze theorem if you counter a relativly simple function that you can obtain its range easily (e.g. trigonometric functions).
                </li>
            </ol>
        </C>
    </S>
  </SM>
  <SM h='Differentiation'>
    <S h="Differentiation rules"></S>
    <S h="Differentiation theorems"></S>
    <S h="Differentiation of multivariable functions"></S>
  </SM>
  <SM h="Concepts of Integration">
    <S h="Partitioning concept">
        A set of points {`$P=\\{x_i  \\forall i\\in\\{0,1,2,3,\\dots,n\\}\\}$`} with {`$a=x_0<x_1<x_2<⋯<x_n=b$`} which divides the interval {`$[a,b]$`} into subintervals {`$[x_0,x_1 ],[x_1,x_2 ],⋯,[x_(n-1),x_n ]$`} is called a partition of {`$[a,b]$`} and if the subintervals all have the same width then it is called a regular partition
    </S>
    <S h="Riemann sum">
      <C t="t" h="Riemann sum">
      Let {`$f(x)$`} be defined on {`"[a,b]"`}, {`"P"`} be a regular partition of {`"[a,b]"`} divides it into n subintervals, ∆x be width of each subinterval {`"[x_{(i-1)},x_i ]"`} and for each {`"i"`} let {`"x_i^*"`} be any point in  {`"[x_{(i-1)},x_i ]"`} a Riemann sum is defined for {`"f(x)"`} as:
      {`$$\\sum_{i=1}^{n}{f\\left(x_i^* \\right) \\Delta x}$$`}
      the area under the curve of {`"f(x)"`} on {`"[a,b]"`} is given by:
      {`$$ A=\\lim_{n \\rightarrow \\infty}{\\sum_{i=1}^{n} {f(x_i^* )\\Delta x}}. $$`}
      The integral notation:
      {`$$ \\int_a^b {f(x) dx)} = \\lim_{n \\rightarrow \\infty}{\\sum_{i=1}^{n} {f(x_i^* )\\Delta x}}.$$`}
      where:
      <U1>
        <li>
          The symbol {`"dx"`}, called the differential of the variable x, indicates that the variable of integration is x,
        </li>
        <li>
          The function {`"f(x) "`}is called the integrand,
        </li>
        <li>
          The points {`"a"`} and {`"b"`} are called the limits (or bounds) of integration
        </li>
      </U1>
      </C>
    </S>
    <S h="Integrability">
    a function is called integrable over {`"[a,b]"`} if its integral over this interval is finite. Or we can say (equivalently) a function is called integrable over {`"[a,b]"`} if it hasn't any discontinuities over this interval except for jump and removable discontinuities.
    <C t='n'>
        If {`"f(x)"`} is continuous on {`"[a,b]"`} then, {`"f"`} is integrable over {`"[a,b]"`}.
        A function is called integrable if it is itegrable over its domain.
    </C>
    </S>
    <S h="The mean value theorem for integrals">
    If {`"f(x)"`} is continuous on {`"[a,b]"`} then there is at least one point {`"c \\in [a,b]"`} such that
    {`$$f(c)=\\frac{1}{b-a} \\int_a^b {f(x) dx}.$$`}
    </S>
    <S h="Fundamental theorem of calculus" id="bc_fun">
    This theorem establishes the relationship between differentiation and integration.
    If {`"f(x)"`} is continuous over {`"[a,b]"`}, and the function {`"F(x)"`} is defined by
    {`$$ F(x)=\\int_a^x f(t) dt, $$`}
    then:
    <U1>
        <li>
            First: 
            {`$$ F\\prime (x)=f(x)  \\textrm{ over } [a,b],$$`}
        </li>
        <li>
            Second: {`$$ \\int_a^b {f(x) dx}=F(b)-F(a)$$`}
        </li>
    </U1>
    </S>
    <S h="Net change theorem">
        <C t="s">
        the new value of a changing quantity equals the initial value plus the integral of the rate of change
        {`$$ F(b)=F(a)+\\int_a^b {F\\prime (x)  dx)}.$$`}
        </C>
    </S>
  </SM>
</Chapter>
  )
}

export default Basics
