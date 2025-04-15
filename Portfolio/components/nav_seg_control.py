import reflex as rx
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.nav_item import nav_item
from Portfolio.styles.styles import Size
from Portfolio.styles.colors import Color, TextColor
from Portfolio.styles.fonts import Font, FontWeight


def item_control(name: str, icon: str, src: str, icon_display: bool = True, alt: str = "Link Icon") -> rx.Component:
    return rx.link(
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
            rx.text(name, color=TextColor.HEADER.value),
            align_items="center",
            padding=Size.ZERO.value,
        ),
        color=TextColor.HEADER.value,
        font_family=Font.LOGO.value,
        font_weight=FontWeight.MEDIUM.value,
        font_size=Size.DEFAULT.value,
        href=src,
        _hover={"text_decoration": "none"},
    )


def nav_seg_control() -> rx.Component:
    return rx.segmented_control.root(
        rx.segmented_control.item(item_control(
            name="Mi Perfil", icon="/icons/user-regular.svg", src=Route.MYPROFILE.value), value=Route.MYPROFILE.value),
        rx.segmented_control.item(
            item_control(name="Proyectos", icon="/icons/code.svg", src=Route.PROYECTS.value), value=Route.PROYECTS.value
        ),
        rx.segmented_control.item(
            item_control(name="Contacto", icon="/icons/email.svg", src=Route.CONTACT.value), value=Route.CONTACT.value
        ),
        bg=Color.CONTENT.value,
        size="3"
    )
