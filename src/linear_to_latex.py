# -*- coding: UTF-8 -*-
import re

formulas = [
'∬_D^ ▒f(r,θ)rdrdθ=∫_α^β▒(∫_(h_1 (θ))^(h_2 (θ))▒f(r,θ)rdr)dθ'
]

parser_dict = {
    '≤':'\\\\le ',
    '⁡∑_':'\\\\sum',
    '∪':'\\\\cup ',
    '∩':'\\\\cap ',
    '∞':'\\\\infty',
    'sin':'\\\\sin',
    'cos':'\\\\cos',
    '∫':'\\\\int',
    '∬':'\\\\iint',
    '∆':'\\\\Delta ',
    'θ':'\\\\theta',
    '→':'\\\\rightarrow ',
    'd/dx':'\\\\frac{\\\\mathrm{d} }{\\\\mathrm{d} x}',
    'π/2' :'\\\\frac{\\\\pi}{2}',
    '(lim)':'\\\\lim',
    'lim':'\\\\lim',
    "^'":'\\\\prime',
    '⋯':'\\\\dots',
    '∅':'\\\\emptyset',
    'dA':r'\\mathrm{d} A',
    'dx':r'\\mathrm{d} x',
    'dy':r'\\mathrm{d} y',
    'd':r'\\mathrm{d}',
    
    '[':'\\\\left[',
    ']':'\\\\right]',
    '〖':'{',
    '〗':'}',
    '_(':'_{',
    '^(':'^{',
    '^ ':'',
    '▒':' ',
    '┬(':'_{',
    '□(24&':' ',
}
for formula in formulas:
    for target in parser_dict:
        formula = formula.replace(target,parser_dict[target])
    print(formula)
