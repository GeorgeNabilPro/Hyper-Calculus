from manim import*
import numpy as np
from manim.utils.unit import constants


f = lambda x: x**6 / 3 - 4 * x**3 + 5*x - 4
g1 = lambda x: 5*x**2
g2 = lambda x: -5*x**2
h = lambda x: 5 * np.sin(1/x) * x**2

print(config['frame_width'], config['frame_height'])

class SqueezeTheorem(Scene):
    def construct(self):
        
        logo = Text('By: George Nabil', color=GRAY_A , fill_opacity=0.8).scale(0.35).shift(5.8*LEFT + 3.6*DOWN)

        ax1 = NumberPlane(x_range=(-0.6,0.6,0.1), y_range=(-0.4,0.4,0.1), x_length=config["frame_width"],y_length=config['frame_height'] )
        correct = ax1.plot(
            h,
            x_range=(-0.4,0.4),
            discontinuities=[0],
            dt=0.01,
            color=RED,
        )
        first = ax1.plot(
            g1,
            x_range=(-0.4,0.4),
            dt = 0.01,
            color = GREEN,
        )
        second = ax1.plot(
            g2,
            x_range=(-0.4,0.4),
            dt = 0.01,
            color = BLUE,
        )
        f1_name = MathTex(r'\sin(\frac{1}{x})' , color = RED).next_to(correct, LEFT).shift(1.5 * DOWN )
        f2_name = MathTex(r'x^2', color = GREEN).shift(UP * 1.1 + 0.5 * LEFT)
        f3_name = MathTex(r'-x^2', color = BLUE).shift(DOWN * 1.1 + 0.5 * LEFT)
        anims1 = AnimationGroup(*[Write(l) for l in [f1_name, f2_name, f3_name]], run_time=2)
        anims2 = AnimationGroup(Create(first), Create(second), Create(correct) ,run_time = 10, rate_func= rate_functions.double_smooth)
        self.add(logo)
        self.add(ax1)
        self.wait(0.5)
        self.play(anims1, anims2, lag_ratio = 0.3)
        self.wait(0.5)
        