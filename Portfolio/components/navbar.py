import reflex as rx
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.nav_seg_control import nav_seg_control
from Portfolio.components.nav_menu import nav_menu
from Portfolio.styles.styles import Size
from Portfolio.styles.colors import Color


def navbar() -> rx.Component:
    return rx.hstack(
        rx.link(
            rx.box(
                rx.text("By", color=Color.PRIMARY.value, as_="span"),
                rx.text("Tupak", color=Color.SECONDARY.value, as_="span"),
                style=styles.navbar_title_style
            ),
            href=Route.INDEX.value
        ),
        rx.spacer(),
        rx.mobile_only(nav_menu()),
        rx.tablet_and_desktop(nav_seg_control()),
        position="sticky",
        align_items="center",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )
