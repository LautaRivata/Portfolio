import reflex as rx
from Portfolio.styles.styles import Size


def footer_icon(image: str, url: str, alt: str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width=Size.DEFAULT.value,
            height=Size.DEFAULT.value,
            alt=alt
        ),
        href=url,
        is_external=True
    )
