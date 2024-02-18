import reflex as rx
from Portfolio.styles.styles import Size, button_title_style


def skill_icon(name: str, imagen: str, alt: str) -> rx.Component:
    return rx.box(
        rx.image(
            src=imagen,
            height=Size.VERY_BIG.value,
            aspect_ratio="5 / 4",
            alt=alt
        ),
        rx.text(name, style=button_title_style, text_align="center"),
    )

# rx.aspect_ratio(
#        rx.image(
#            src=imagen,
#            alt=alt,
#            height=Size.SMALL.value,
#        ),
#            ratio=3 / 2,
#    )
