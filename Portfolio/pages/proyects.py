import reflex as rx
import Portfolio.utils as utils
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.navbar import navbar
from Portfolio.views.footer import footer
from Portfolio.components.title import title
from Portfolio.views.header import header
from Portfolio.views.proyects_links import proyects_links
from Portfolio.styles.styles import Size, SizeRadix


@rx.page(
    route=Route.PROYECTS.value,
    title=utils.proyects_title,
    description=utils.proyects_description,
    image=utils.preview,
    meta=utils.proyects_meta
)
def proyects() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header("8"),
                title("Proyectos Principales"),
                proyects_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.ZERO.value,
                padding=Size.BIG.value,
                spacing=SizeRadix.MEDIUM.value,
            )
        ),
        footer()
    )
