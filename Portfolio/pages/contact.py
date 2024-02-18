import reflex as rx
import Portfolio.utils as utils
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.navbar import navbar
from Portfolio.views.header import header
from Portfolio.components.footer import footer
from Portfolio.components.title import title
from Portfolio.views.contacto import contacto
from Portfolio.styles.styles import Size


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
                header(),
                title("Contacto"),
                contacto(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )
