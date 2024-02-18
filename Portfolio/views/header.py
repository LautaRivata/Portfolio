import reflex as rx
import datetime
import Portfolio.constants as const
from Portfolio.styles.styles import Size, Font, navbar_title_style
from Portfolio.styles.colors import Color, TextColor
from Portfolio.components.link_icon import link_icon


def header() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.avatar(
                name="By Tupak",
                size="xl",
                src="/avatar.jpg",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                padding="2px",
                border="4px",
                border_color=Color.PRIMARY.value
            ),
            rx.vstack(
                rx.heading(
                    "Lautaro Rivata",
                    size="lg"
                ),
                rx.text(
                    rx.span("@By", color=Color.PRIMARY.value),
                    rx.span("Tupak", color=Color.SECONDARY.value),
                    style=navbar_title_style,
                    margin_top=Size.ZERO.value,
                ),
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
                    spacing=Size.LARGE.value
                ),
                align_items="start"
            ),
            spacing=Size.DEFAULT.value
        ),
        width="100%",
        spacing=Size.BIG.value,
        align_items="start"
    )


def experience() -> int:
    return datetime.date.today().year - 2022
