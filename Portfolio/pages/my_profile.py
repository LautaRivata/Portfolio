import reflex as rx
import Portfolio.utils as utils
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.components.navbar import navbar
from Portfolio.views.header import header
from Portfolio.components.footer import footer
from Portfolio.components.title import title
from Portfolio.views.skills import skills
from Portfolio.styles.styles import Size


@rx.page(
    route=Route.MYPROFILE.value,
    title=utils.myprofile_title,
    description=utils.myprofile_description,
    image=utils.preview,
    meta=utils.myprofile_meta
)
def my_profile() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                title("Mi Perfil"),
                skills(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),
        footer()
    )
