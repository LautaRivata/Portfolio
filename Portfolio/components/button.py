import reflex as rx
import Portfolio.styles.styles as styles
from Portfolio.styles.styles import Size, Color


def button(title: str, body: str, image: str, highlight=False) -> rx.Component:
    return rx.button(
        rx.hstack(
            rx.image(
                src=image,
                width=Size.LARGE.value,
                height=Size.LARGE.value,
                margin=Size.MEDIUM.value,
                alt=title
            ),
            rx.vstack(
                rx.text(title, style=styles.button_title_style),
                rx.text(body, style=styles.button_body_style),
                align_items="start",
                spacing=Size.SMALL.value,
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value
            ),
            width="100%"
        ),
        width="100%",
        border_color=Color.SECONDARY.value if highlight else None,
        border_width="2px" if highlight else None
    )
