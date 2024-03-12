import reflex as rx
import Portfolio.utils as utils
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.navbar import navbar
from Portfolio.components.about import about
from Portfolio.views.footer import footer
from Portfolio.views.header import header
from Portfolio.views.index_links import index_links
from Portfolio.views.contacto import contacto
from Portfolio.views.resurses import resurses
from Portfolio.styles.styles import Size


@rx.page(
    route=Route.INDEX.value,
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    meta=utils.index_meta
)
def index() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header("9"),
                about(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                min_height="80vh",
                margin_y=Size.ZERO.value,
                padding=Size.BIG.value,
                justify_content="center",
            )
        ),
        footer()
    )
