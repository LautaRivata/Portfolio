import reflex as rx
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.nav_item import nav_item
from Portfolio.styles.styles import Size
from Portfolio.styles.colors import Color, TextColor
from Portfolio.styles.fonts import Font, FontWeight


def nav_bread() -> rx.Component:
    return rx.chakra.breadcrumb(
        nav_item("My Perfil", "/icons/user-regular.svg",
                 Route.MYPROFILE.value),
        nav_item("Proyectos", "/icons/code.svg", Route.PROYECTS.value),
        nav_item("Contacto", "/icons/email.svg", Route.CONTACT.value),
        separator="",
        color=TextColor.HEADER.value,
        font_family=Font.LOGO.value,
        font_weight=FontWeight.MEDIUM.value,
        font_size=Size.DEFAULT.value,
    )
