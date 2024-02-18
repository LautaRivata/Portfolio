import reflex as rx
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.styles.styles import Size
from Portfolio.styles.colors import Color
from Portfolio.components.nav_item import nav_item
from Portfolio.styles.fonts import Font, FontWeight


def nav_menu() -> rx.Component:
    return rx.breadcrumb(
        rx.menu(
            rx.menu_button(
                rx.image(
                    src="/icons/bars-solid.svg",
                    width=Size.DEFAULT.value,
                    height=Size.DEFAULT.value,
                    alt="Icono Menu"
                ),
            ),
            rx.menu_list(
                rx.menu_item(
                    nav_item("My Perfil", "/icons/user-regular.svg",
                             Route.MYPROFILE.value),
                    style=styles.menu_style
                ),
                rx.menu_item(
                    nav_item("Proyectos", "/icons/code.svg",
                             Route.PROYECTS.value),
                    style=styles.menu_style
                ),
                rx.menu_item(
                    nav_item("Contacto", "/icons/email.svg",
                             Route.CONTACT.value),
                    style=styles.menu_style
                ),
            ),
            bg=Color.CONTENT.value
        ))
