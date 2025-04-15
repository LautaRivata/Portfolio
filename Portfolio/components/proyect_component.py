import reflex as rx
import Portfolio.styles.styles as styles
from Portfolio.styles.styles import Size, Color, Font, TextColor, FontWeight, SizeRadix
from Portfolio.components.link_icon import link_icon
from Portfolio.components.title import title
from Portfolio.components.button import button


def createbadge(lista) -> rx.Component:
    for l in lista:
        return rx.badge(l, variant="solid", color_scheme=Color.PRIMARY.value)


def proyect_component(name: str, body: str, languaje: list, imagen: str, alt: str, icon: str) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.image(
                src=icon,
                width=Size.LARGE.value,
                height=Size.LARGE.value,
                margin=Size.MEDIUM.value,
                alt="lenguaje Icon",
            ),
            rx.text(
                name,
                font_size=Size.LARGE.value,
                font_weight=FontWeight.MEDIUM.value,
                color=TextColor.HEADER.value,
            ),
        ),
        rx.text(body, style=styles.button_body_style),
        rx.image(
            src=imagen,
            height="15em",
            aspect_ratio="16 / 9",
            alt=alt,
            align_self="center",
        ),
        rx.hstack(
            rx.foreach(languaje, lambda l: rx.badge(l, variant="surface", bg=Color.PRIMARY.value,
                       color=TextColor.BODY.value, border_color=Color.SECONDARY.value, border_width=2,)),
            align_self="end",
        ),
        width="100%",
        align_items="start",
        border_radius=Size.DEFAULT.value,
        background_color=Color.CONTENT.value,
        spacing=SizeRadix.DEFAULT.value,
        padding_x=Size.SMALL.value,
        padding_y=Size.SMALL.value,
    )
