import reflex as rx
import datetime
import Portfolio.constants as const
from Portfolio.styles.styles import Size
from Portfolio.styles.colors import Color, TextColor


def footer() -> rx.Component:
    return rx.vstack(
        rx.link(
            rx.box(
                f"©{datetime.date.today().year} ",
                rx.span("ByTupak de Lautaro Rivata",
                        color=Color.PRIMARY.value),
                "  V1.0",
                padding_top=Size.DEFAULT.value
            ),
            href=const.BYTUPAK_URL,
            is_external=True,
            font_size=Size.MEDIUM.value
        ),
        rx.hstack(
            rx.image(
                src="/icons/favicon.ico",
                height=Size.LARGE.value,
                width=Size.LARGE.value
            ),
            rx.text(
                "Please Excuse, Under Construction",
                font_size=Size.MEDIUM.value,
                margin_top=Size.ZERO.value
            ),
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.VERY_BIG.value,
        padding_x=Size.BIG.value,
        spacing=Size.ZERO.value,
        color=TextColor.FOOTER.value
    )
