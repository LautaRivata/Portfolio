import reflex as rx
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.nav_bread import nav_bread
from Portfolio.components.nav_menu import nav_menu
from Portfolio.styles.styles import Size
from Portfolio.styles.colors import Color


def navbar() -> rx.Component:
    return rx.hstack(
        rx.link(
            rx.box(
                rx.chakra.span("By", color=Color.PRIMARY.value),
                rx.chakra.span("Tupak", color=Color.SECONDARY.value),
                style=styles.navbar_title_style
            ),
            href=Route.INDEX.value
        ),
        rx.spacer(),
        rx.mobile_only(nav_menu()),
        rx.tablet_and_desktop(nav_bread()),
        position="sticky",
        align_items="center",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )
