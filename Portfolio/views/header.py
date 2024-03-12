import reflex as rx
import datetime
import Portfolio.constants as const
from Portfolio.styles.styles import Size, Font, navbar_title_style, SizeRadix
from Portfolio.styles.colors import Color, TextColor
from Portfolio.components.link_icon import link_icon


def header(size: str) -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.avatar(
                name="By Tupak",
                size=size,
                src="/me.jpg",
                radius="large",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                padding="2px",
                border="4px",
                border_color=Color.PRIMARY.value
            ),
            rx.vstack(
                rx.heading(
                    "Lautaro Rivata",
                    size="8",
                    padding=Size.ZERO.value,
                    margin=Size.ZERO.value
                ),
                rx.text(
                    rx.chakra.span("@By", color=Color.PRIMARY.value),
                    rx.chakra.span("Tupak", color=Color.SECONDARY.value),
                    style=navbar_title_style,
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
                    spacing=SizeRadix.LARGE.value
                ),
                align_items="start"
            ),
            spacing=SizeRadix.DEFAULT.value,
            align_items="center",
        ),
        width="100%",
        spacing=SizeRadix.DEFAULT.value,
        align_items="start"
    )


def experience() -> int:
    return datetime.date.today().year - 2022
