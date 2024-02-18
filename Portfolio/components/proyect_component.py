import reflex as rx
import Portfolio.styles.styles as styles
from Portfolio.styles.styles import Size, Color
from Portfolio.components.link_icon import link_icon
from Portfolio.components.title import title
from Portfolio.components.button import button


def proyect_component(name: str, body: str, languaje: str, imagen: str, alt: str, icon: str) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.image(
                src=icon,
                width=Size.LARGE.value,
                height=Size.LARGE.value,
                margin=Size.MEDIUM.value,
                alt="lenguaje Icon",
            ),
            rx.text(name, style=styles.button_title_style),
        ),
        rx.text(body, style=styles.button_body_style),
        rx.image(
            src=imagen,
            height="15em",
            aspect_ratio="16 / 9",
            alt=alt,
            align_self="center",
        ),
        rx.text(languaje, style=styles.button_body_style),
        width="100%",
        align_items="start",
        border_radius=Size.DEFAULT.value,
        background_color=Color.CONTENT.value,
        spacing=Size.DEFAULT.value,
        padding_x=Size.SMALL.value,
        padding_y=Size.SMALL.value,
    )
