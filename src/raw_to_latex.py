"""     r"\lim_{x \to 0} \frac{\sin x}{x} = 1",
    r"\lim_{x \to 0} \frac{1 - \cos x}{x} = 0",
    r"{\displaystyle \lim _{x\to 0}(1+x)^{\frac {1}{x}}=\lim _{r\to \infty }\left(1+{\frac {1}{r}}\right)^{r}=e}",
    r"\lim_{x \to 0} \frac{e^{x}-1}{x} = 1",
    r"\lim_{x \to 0} \frac{e^{ax}-1}{bx} = \frac{a}{b}",
    r"\lim_{x \to 0} \frac{c^{ax}-1}{bx} = \frac{a}{b}\ln c",
    r"{\displaystyle \lim _{x\to 0^{+}}x^{x}=1}",
    r"\lim _{{x\to 0}}{\frac  {\ln(1+x)}{x}}=1",
    r"\lim_{x \to 0} \frac{\ln(1+ax)}{bx} = \frac{a}{b}", """
imported = [
    r"{\displaystyle \lim _{x\to c}{\frac {f(x)}{g(x)}}=\lim _{x\to c}{\frac {f'(x)}{g'(x)}}.}",
]
for i in imported:
    latex = ""
    for l in i:
        latex += "\\\\" if l == "\\" else l
    print(latex)