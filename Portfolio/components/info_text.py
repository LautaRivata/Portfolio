import reflex as rx
from Portfolio.styles.styles import Size
from Portfolio.styles.colors import Color, TextColor


def info_text(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.text(
            title,
            font_weight="bold",
            color=Color.PRIMARY.value,
            as_="span"
        ),
        f" {body}",
        font_size=Size.MEDIUM.value,
        color=TextColor.BODY.value
    )
