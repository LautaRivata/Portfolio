import reflex as rx
import Portfolio.utils as utils
import Portfolio.styles.styles as styles
from Portfolio.routes import Route
from Portfolio.views.index_links import index_links
from Portfolio.views.certificaciones import certificaciones
from Portfolio.views.skills import skills
from Portfolio.views.header import header
from Portfolio.components.navbar import navbar
from Portfolio.components.action_button import action_button
from Portfolio.views.footer import footer
from Portfolio.components.title import title
from Portfolio.styles.styles import Size, SizeRadix


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
                header("8"),
                title("Certificaciones"),
                certificaciones(),
                title("Links de Interes"),
                index_links(),
                action_button(
                    "Ver CV",
                    "Aquí puedes descargar mi Curriculum Vitae",
                    "/icons/file-regular.svg",
                    action=rx.download(
                        url="/2025 - Rivata Lautaro ing Biomedico.pdf",
                        filename="Lautaro Rivata FullStack.pdf",
                    ),
                ),
                title("Pricipales Herramientas"),
                skills(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.ZERO.value,
                padding=Size.BIG.value,
                spacing=SizeRadix.MEDIUM.value,
            )
        ),
        footer(),
    )
