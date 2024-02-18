import reflex as rx
from Portfolio.styles.styles import Size


def nav_item(name: str, icon: str, url: str, alt="Link Icon") -> rx.Component:
    return rx.breadcrumb_item(
        rx.hstack(
            rx.image(
                src=icon,
                width=Size.DEFAULT.value,
                height=Size.DEFAULT.value,
                alt=alt,
                margin=Size.SMALL.value,
            ),
        ),
        rx.breadcrumb_link(name, href=url, _hover={
            "text_decoration": "none"}),
    )
