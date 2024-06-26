import reflex as rx
from Portfolio.styles.styles import Size


def link_icon(image: str, url: str, alt: str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width=Size.BREAD.value,
            height=Size.BREAD.value,
            alt=alt
        ),
        href=url,
        is_external=True
    )
