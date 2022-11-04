import React from 'react'
import {MathJaxContext} from 'better-react-mathjax'
import {SM, S, C, U1, A, CONFIG, Chapter} from './Components'
import {Link} from 'react-router-dom'

function Techniques () {
      return (
<Chapter n={2} name='Techniques of Integration'>
  <SM h="Low level integration">
    By "low level integration" we mean a one step that you can do to integrate a function directly. To do that we use the <A r="bc_fun">Fundamental theorem of calculus</A>
    <S h="Integration of power, exponential and logarithmic functions">

        This identities is the basic antiderivatives, they are used alot in all integration problems
        {
            `
            \\begin{aligned}
            &\\int{x^{n} \\,dx}                &&= \\frac{x^{n+1}}{n+1} && ,n \\in \\mathbb{R} , n \\neq  -1 \\\\
            &\\int{\\frac{1}{x} \\,dx}         &&= \\ln{|x|}            && ,x \\neq 0 \\\\
            &\\int{\\frac{1}{\\sqrt{x}} \\,dx} &&= 2 \\sqrt{x}          && ,x>0 \\\\
            &\\int{e^x \\,dx}                  &&= e^x \\\\
            &\\int{b^x \\,dx}                  &&= \\frac{b^x}{\\ln{b}} && ,b>0,b\\neq 1\\\\
            \\end{aligned}
            `
        }
    </S>
    <S h="Integration of trigonometric and hyperbolic functions directlly">
    We can get the antiderivatives of some trigonometric and hyperbolic functions directky just by knowing the derivatives of trigonometric and hyperbolic functions.
    {
        `
        \\begin{align}
        \\DeclareMathOperator{\\sech}{sech}
        \\DeclareMathOperator{\\csch}{csch}

        &\\int\\sin x\\,\\mathrm{d}x           &&=-\\cos x\\\\
        &\\int\\cos x\\,\\mathrm{d}x           &&=\\sin x\\\\
        &\\int\\sec^2 x\\,\\mathrm{d}x         &&=\\tan x\\\\
        &\\int\\csc^2 x\\,\\mathrm{d}x         &&=-\\cot x\\\\
        &\\int\\sec x \\tan x \\,\\mathrm{d}x  &&=\\sec x\\\\
        &\\int\\csc x \\cot x \\,\\mathrm{d}x  &&=-\\csc x\\\\
        \\end{align}

        \\begin{align}
        &\\int\\sinh x\\,\\mathrm{d}x          &&=\\cosh x\\\\
        &\\int\\cosh x\\,\\mathrm{d}x          &&=\\sinh x\\\\
        &\\int\\sech^2 x\\,\\mathrm{d}x        &&=\\tanh x\\\\
        &\\int\\csch^2 x\\,\\mathrm{d}x        &&=-\\coth x\\\\
        &\\int\\sech x \\,\\tanh x\\,\\mathrm{d}x &&=-\\sech x\\\\
        &\\int\\cosh x \\coth x\\,\\mathrm{d}x &&=-\\csch x\\\\
        \\end{align}
        `
    }
    </S>
    <S h="Integration of trigonometric and hyperbolic functions using integration by substitution">
        {
            `
            \\begin{align}               
            &\\int\\tan x\\,\\mathrm{d}x  &&=-\\ln|\\cos x|\\\\
            &\\int\\csc x\\,\\mathrm{d}x  &&=\\ln|\\csc x - \\cot x|\\\\
            &\\int\\sec x\\,\\mathrm{d}x  &&=\\ln|\\sec x + \\tan x|\\\\
            &\\int\\cot x\\,\\mathrm{d}x  &&=\\ln|\\sin x|\\\\
            
            &\\int\\tanh x\\,\\mathrm{d}x &&=\\ln|\\cosh x|\\\\
            &\\int\\csch x\\,\\mathrm{d}x &&=\\ln|\\tanh\\frac{x}{2}|\\\\
            &\\int\\sech x\\,\\mathrm{d}x &&=\\tanh^{-1}(\\sinh x)\\\\\\
            &\\int\\coth x\\,\\mathrm{d}x &&=\\ln|\\sinh x|\\\\
            \\end{align}
            `
        }
    </S>
    <S h="Integrals that result to inverse trigonometric or hyperbolic functions">
    A very common form of functions that include a root or a x to some power in the denominator. These type of functions when integrating result in inverse trigonometric or hyperbolic function. These identities are derived from the definition of the trigonometric and the hyperbolic functions their derivatives.
    {
        `
        \\begin{aligned}
        \\int\\frac{1}{\\sqrt{a^2-x^2}}\\,\\mathrm{d}x &=\\sin^{-1}\\left(\\frac{x}{a}\\right)  && ,|x|< a \\\\
                                                       &=-\\cos^{-1}\\left(\\frac{x}{a}\\right) && ,|x|< a \\\\ 
        \\int\\frac{1}{\\sqrt{a^2+x^2}}\\,\\mathrm{d}x &=\\sinh^{-1}\\left(\\frac{x}{a}\\right)\\\\
        \\int\\frac{1}{\\sqrt{x^2-a^2}}\\,\\mathrm{d}x &={\\begin{cases}\\cosh^{-1}\\left(\\frac{x}{a}\\right) &,|x|> a\\\\
            -\\cosh^{-1}\\left(\\frac{x}{a}\\right) &,|x| < -a\\end{cases}}\\\\

        \\int\\frac{1}{x\\sqrt{a^2-x^2}}\\,\\mathrm{d}x &= -\\frac{1}{a}\\sech^{-1}\\left(\\frac{x}{a}\\right)  && ,|x|< a  , x \\ne 0\\\\
        \\int\\frac{1}{x\\sqrt{a^2+x^2}}\\,\\mathrm{d}x &= -\\frac{1}{a}\\csch^{-1}\\left(\\frac{x}{a}\\right)  && , x \\ne 0\\\\
        \\int\\frac{1}{x\\sqrt{x^2-a^2}}\\,\\mathrm{d}x &= \\frac{1}{a}\\sec^{-1}\\left(\\frac{x}{a}\\right)  && ,|x|> a  \\\\ &= -\\frac{1}{a}\\csc^{-1}\\left(\\frac{x}{a}\\right)  && ,|x|> a \\\\

        \\int\\frac{1}{a^2+x^2}\\,\\mathrm{d}x &= \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) \\\\
                                               &= -\\frac{1}{a}\\cot^{-1}\\left(\\frac{x}{a}\\right) \\\\
        \\int\\frac{1}{a^2-x^2}\\,\\mathrm{d}x &= \\begin{cases}\\frac{1}{a}\\tanh^{-1}\\left(\\frac{x}{a}\\right) && ,|x|< a\\\\
                                               \\frac{1}{a}\\coth^{-1}\\left(\\frac{x}{a}\\right) && ,|x|> a\\\\\\end{cases}
        \\end{aligned}
        `
    }
    </S>
    <S h="Nonelementary integrals">
        {
            `
            \\begin{aligned}
            &\\operatorname{li} (x)   &&=\\int _{0}^{x}{\\frac {\\mathrm{d}t}{\\ln t}} \\\\
            &\\operatorname{Ei} (x)   &&=\\int _{-\\infty }^{x}{\\frac {e^{t}}{t}}\\,\\mathrm{d}t\\\\
            &\\operatorname {erf} z   &&={\\frac {2}{\\sqrt {\\pi }}}\\int _{0}^{z}e^{-t^{2}}\\,\\mathrm{d}t\\\\
            &\\operatorname {Si} (x)  &&=\\int _{0}^{x}{\\frac {\\sin t}{t}}\\,\\mathrm{d}t\\\\
            &\\operatorname {Ci} (x)  &&=-\\int _{x}^{\\infty }{\\frac {\\cos t}{t}}\\,\\mathrm{d}t\\\\
            &\\operatorname {Shi} (x) &&=\\int _{0}^{x}{\\frac {\\sinh(t)}{t}}\\,\\mathrm{d}t\\\\
            \\end{aligned}
            `
        }
    </S>
    <S h="Integrals that result in special functions">
        {`
        \\begin{aligned}
        J_{n}(x) &={\\frac {1}{\\pi }}\\int _{0}^{\\pi }\\cos(n t -x\\sin t)\\,\\mathrm{d}t \\\\
        Y_{n}(x) &={\\frac {1}{\\pi }}\\int _{0}^{\\pi }\\sin(x\\sin t -n t )\\,\\mathrm{d}t -{\\frac {1}{\\pi }}\\int _{0}^{\\infty }\\left(e^{nt}+(-1)^{n}e^{-nt}\\right)e^{-x\\sinh t}\\,\\mathrm{d}t\\\\
        I_{\\alpha }(x)&={\\frac {1}{\\pi }}\\int _{0}^{\\pi }e^{x\\cos t }\\cos \\alpha t \\,\\mathrm{d}t -{\\frac {\\sin \\alpha \\pi }{\\pi }}\\int _{0}^{\\infty }e^{-x\\cosh t-\\alpha t}\\,\\mathrm{d}t\\\\
        K_{\\alpha }(x)&=\\int _{0}^{\\infty }e^{-x\\cosh t}\\cosh \\alpha t\\,\\mathrm{d}t\\\\

        \\Gamma (z) &=\\int _{0}^{\\infty }x^{z-1}e^{-x}\\,\\mathrm{d}t\\\\
        \\zeta (z)  &={\\frac {1}{\\Gamma (z)}}\\int _{0}^{\\infty }{\\frac {t^{z-1}}{e^{t}-1}}\\,,\\mathrm{d}t\\\\
        \\end{aligned}
        `}
    </S>
  </SM>
  <SM h="Integration by substitution">
    <S h="U-Substitution">
        When to use u-substitution? <br/> 
        Generally you should practice a considerabile amound of problems to determine when to use integration by u-substitution technique but these are some points that can help or be as an indicator.
        <U1>
            <li>The priority is usually for u-substitution not integration by parts</li>
            <li>If you find a function and it's derivative anywhere in the integral</li>
            <li>If you find an expression that is rpeated in the integral</li>
            <li>If you can manipulate the integral to obtain a function and it's derivative</li>
            <li>If there is nested roots or a root that can be differentiated easily</li>
            <li>If you can put the integral in the linear sub expression form
                {`
                \\begin{aligned}
                \\int f \\left( a x + b\\right) \\,\\mathrm{d}x = \\frac{1}{a} \\int f(u)\\,\\mathrm{d}u
                \\end{aligned}
                `}
            </li>
        </U1>
        <C t="t" h="U-Substitution">
            The basic formula for u-substitution
            {`
            \\begin{aligned}
            \\int f(g(x)) \\cdot g'(x) \\,\\mathrm{d}x &= \\int f(u)\\mathrm{d}u \\\\
                                                   &= F(u) + C
            \\end{aligned}
            `}
        </C>
        After determining the suitable substitution you try to reach a function of u that you can integrate and you do that by algebraic operations or by applying another techniques of integration or even by do one more u-substitution but this time you choose another variable name to substitute with.<br/><br/>

        There are some common forms that we can use u-substitution directlly in such as:
        {`
        \\begin{aligned}
        &\\int{\\left[ f(x) \\right]^n f^\\prime (x) }\\mathrm{d}x &&= \\frac{\\left[ f(x) \\right]^{n+1}}{n+1} +C & ,a \\neq -1.\\\\
        &\\int{\\frac{f ^\\prime (x)}{\\sqrt{f(x)}}}\\mathrm{d}x &&= 2 \\sqrt{f(x)} +C\\\\
        &\\int{\\frac{f ^\\prime (x)}{f(x)}}\\mathrm{d}x &&= \\ln{|f(x)|} + C \\\\
        &\\int{e^{f(x)} \\cdot f^\\prime(x)}\\mathrm{d}x &&= e^{f(x)} + C \\\\
        &\\int{a^{f(x)} \\cdot f^\\prime(x)}\\mathrm{d}x &&= \\frac{a^{f(x)}}{\\ln{a}} + C &, a \\gt 0, a \\neq 1\\\\
        \\end{aligned}
        `}
    </S>
    <S h="Trigonometric and hyperbolic substitution">
        <div className='math-table-container'>
        <table className="math-table">
            <thead>
                <tr>
                    <th>Radical in the integral</th>
                    <th>Trigonometric sub</th>
                    <th>Hyperbolic sub</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{`$\\sqrt{a^2-x^2}$`}</td>
                    <td>{`$x = a \\sin (\\theta)$`}</td>
                    <td>{`$x = a \\tanh (\\phi)$`}</td>
                </tr>
                <tr>
                    <td>{`$\\sqrt{a^2+x^2}$`}</td>
                    <td>{`$x = a \\tan (\\theta)$`}</td>
                    <td>{`$x = a \\sinh (\\phi)$`}</td>
                </tr>
                <tr>
                    <td>{`$\\sqrt{x^2-a^2}$`}</td>
                    <td>{`$x = a \\sec (\\theta)$`}</td>
                    <td>{`$x = a \\cosh (\\phi)$`}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </S>
    <S h="Weierstrass substitution">
        {
            `$$
            \\sin x={\\frac {2t}{1+t^{2}}},\\qquad \\cos x={\\frac {1-t^{2}}{1+t^{2}}},\\qquad {\\text{and}}\\qquad dx={\\frac {2}{1+t^{2}}}\\,dt $$

            `}{`
            $$
            \\begin{aligned}&amp;\\sinh x={\\frac {2t}{1-t^{2}}},\\qquad \\cosh x={\\frac {1+t^{2}}{1-t^{2}}},\\qquad \\tanh x={\\frac {2t}{1+t^{2}}},\\\\[6pt]&amp;\\coth x={\\frac {1+t^{2}}{2t}},\\qquad \\operatorname {sech} x={\\frac {1-t^{2}}{1+t^{2}}},\\qquad \\operatorname {csch} x={\\frac {1-t^{2}}{2t}},\\\\[6pt]&amp;{\\text{and}}\\qquad dx={\\frac {2}{1-t^{2}}}\\,dt.\\end{aligned}
            $$
            `
        }
    </S>
    <S h="Euler substitution"></S>
  </SM>
  <SM h="Integration by parts"></SM>
  <SM h="Miscellaneous techniques">
    <S h="Completing Square"></S>
    <S h="Partial fractions"></S>
    <S h="Trigonometric and hyperbolic integrals"></S>
  </SM>
  <SM h="Common integrals"></SM>
  <SM h="Reduction formulas"></SM>
  <SM h="Difinite integration">
    <S h="Important formulas">
        {`
        \\begin{aligned}
        &\\int_a^a{f(x)dx}  =0. \\\\
        &\\int_a^b{f(x)dx} =-\\int_b^a f(x)dx. \\\\
        &\\int_a^b{f(x)dx} =\\int_a^c f(x)dx+\\int_c^b f(x)dx,c \\in \\mathrm{ domain of } f. \\\\
        &\\frac{\\mathrm{d} }{\\mathrm{d} x} \\left[\\int_{g(x)}^{h(x)} f(t)dt\\right] =f(h(x)) h\\prime (x)-f(g(x)) g\\prime (x). \\\\
        &\\int_0^a f(x)dx =\\int_0^a f(a-x)dx. \\\\
        \\end{aligned}`
        }
    </S>
    <S h="Common cases in definite integration">
        {`
        \\begin{aligned}
        I_n &=\\int_0^{\\frac{\\pi}{2}} {\\sin^n{x} dx}=\\int_0^{\\frac{\\pi}{2}}{\\cos^n{x} dx}\\\\ &= \\frac{((n-1)(n-3)\\dots)}{(n(n-2)(n-4)\\dots)} \\times
        \\begin{cases}
        \\frac{\\pi}{2} \\quad \\mathrm{if n is an even number}, \\\\
        1 \\quad \\mathrm{if n is an odd number }
        \\end{cases}\\\\
        I_{m,n}&=\\int_0^{\\frac{\\pi}{2}} {\\sin^m{⁡x}  \\cos^n⁡{x} dx}=
        \\\\ &= \\frac{(n-1)(n-3)\\dots(m-1)(m-3)\\dots}{(m+n)(m+n-2)(m+n-4)\\dots} \\times
        \\begin{cases}
        \\frac{\\pi}{2} \\quad \\mathrm{if n and m are both even}, \\\\
        \\frac{1}{2} \\quad \\mathrm{if n and m are both odd}, \\\\
        1 \\quad \\mathrm{else} \\\\
        \\end{cases}
        \\end{aligned}
        `}
        
    </S>
    <S h="Definite integration of even and odd functions">
        If {`"f"`} is even then
        {`$$\\int_{-a}^{a} {f(x)}dx=2\\cdot \\int_0^a {f(x)}dx$$`}
        if {`"f`} is odd then
        {`$$\\int_{-a}^{a} {f(x)}dx=0$$`}
        We can apply these formulas if the function is even or odd but shifted in the x-axis. (i.e. the function has a symmetry that is not about the y-axis or the origin.)
        {`$$\\int_{b-a}^{b+a} {f(x)}dx= 2\\cdot \\int_b^{b+a} f(x)dx , \\mathrm{ \\quad if \\quad} f \\text{ \\quad is \\quad symmetrical \\quad about \\quad} x=b.$$`} 
    </S>
    <S h="Improper integrals"></S>
  </SM>
</Chapter>
  )
}

export default Techniques
