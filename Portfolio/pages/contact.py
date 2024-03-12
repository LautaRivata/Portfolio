import reflex as rx
import Portfolio.utils as utils
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.navbar import navbar
from Portfolio.views.index_links import index_links
from Portfolio.views.header import header
from Portfolio.views.footer import footer
from Portfolio.components.title import title
from Portfolio.views.contacto import contacto
from Portfolio.styles.styles import Size, SizeRadix


@rx.page(
    route=Route.CONTACT.value,
    title=utils.contact_title,
    description=utils.contact_description,
    image=utils.preview,
    meta=utils.contact_meta
)
def contact() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header("8"),
                title("Contacto"),
                contacto(),
                title("Otros Contactos"),
                index_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.ZERO.value,
                padding=Size.BIG.value,
                spacing=SizeRadix.MEDIUM.value,
            )
        ),
        footer()
    )
