import reflex as rx
from Portfolio.styles.styles import Size


def nav_item(name: str, icon: str, url: str, icon_display: bool = True, alt: str = "Link Icon") -> rx.Component:
    return rx.chakra.breadcrumb_item(
        rx.chakra.breadcrumb_link(
            rx.hstack(
                rx.cond(
                    icon_display,
                    rx.image(
                        src=icon,
                        width=Size.DEFAULT.value,
                        height=Size.DEFAULT.value,
                        alt=alt,
                        margin=Size.ZERO.value,
                    ),
                ),
                rx.text(name),
                align_items="center",
                padding=Size.ZERO.value,
            ),
            href=url,
            _hover={"text_decoration": "none"}
        ),
    )
