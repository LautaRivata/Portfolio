import reflex as rx
import datetime
import Portfolio.constants as const
from Portfolio.components.link_icon import link_icon
from Portfolio.routes import Route
from Portfolio.styles.styles import Size, SizeRadix
from Portfolio.styles.colors import Color, TextColor


def footer() -> rx.Component:
    return rx.hstack(
        rx.spacer(),
        rx.link(
            rx.box(
                f"©{datetime.date.today().year} ",
                rx.chakra.span("ByTupak de Lautaro Rivata",
                               color=Color.PRIMARY.value),
                "  V1.0",
            ),
            href=Route.INDEX.value,
            font_size=Size.DEFAULT.value
        ),
        rx.spacer(),
        rx.hstack(
            link_icon(
                "/icons/github.svg",
                const.GITHUB_URL,
                "GitHub"
            ),
            link_icon(
                "/icons/linkedin.svg",
                const.LINKEDIN_URL,
                "LinkedIn"
            ),
            link_icon(
                "/icons/email.svg",
                f"mailto:{const.EMAIL}",
                "LinkedIn"
            ),
            spacing=SizeRadix.LARGE.value
        ),
        rx.spacer(),
        spacing=SizeRadix.DEFAULT.value,
        color=TextColor.FOOTER.value,
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
    )
