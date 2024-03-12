import reflex as rx
import Portfolio.constants as const
from Portfolio.routes import Route
from Portfolio.components.action_button import action_button
from Portfolio.components.link_button import link_button
from Portfolio.components.title import title
from Portfolio.styles.styles import SizeRadix


def index_links() -> rx.Component:
    return rx.vstack(
        link_button(
            "Github",
            "Conoce mis Repositorios",
            "/icons/github.svg",
            const.GITHUB_URL
        ),
        link_button(
            "Linked In",
            "Mi experiencia en el Ámbito Laboral",
            "/icons/linkedin.svg",
            const.LINKEDIN_URL
        ),
        width="100%",
        spacing=SizeRadix.MEDIUM.value,
    )
