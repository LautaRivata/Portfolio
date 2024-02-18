import reflex as rx
import Portfolio.constants as const
from Portfolio.routes import Route
from Portfolio.components.action_button import action_button
from Portfolio.components.link_button import link_button

from Portfolio.components.title import title
from Portfolio.styles.styles import Size


def index_links() -> rx.Component:
    return rx.vstack(
        title("Desarrollo Profesional"),
        link_button(
            "Proyectos Principales",
            "Ver proyectos más relevantes realizados y en desarrollo",
            "/icons/code.svg",
            Route.PROYECTS.value,
            False,
            True
        ),
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
        action_button(
            "Ver CV",
            "Aquí puedes descaargar mi Curriculum Vitae",
            "/icons/file-regular.svg",
            action=rx.download(
                url="/2024 - Lautaro Rivata ING Biomedico.pdf",
                filename="Lautaro Rivata FullStack.pdf",
            ),
        ),
        width="100%",
        spacing=Size.DEFAULT.value,
    )
