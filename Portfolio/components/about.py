import reflex as rx
import datetime
import Portfolio.constants as const
from Portfolio.styles.styles import Size, SizeRadix
from Portfolio.styles.colors import Color, TextColor
from Portfolio.components.link_icon import link_icon
from Portfolio.components.info_text import info_text


def about() -> rx.Component:
    return rx.vstack(
        rx.text(
            f"""
                Soy Ingeniero Biomédico con un perfil técnico. 
                Mi formación y experiencia me han permitido desarrollar habilidades en gestión,
                control de calidad, validación y trazabilidad de procesos.
                Además, complemento mi perfil con una diplomatura en desarrollo web, 
                ampliando mi enfoque para la integración de la tecnología en mis proyectos.
            """,
            font_size=Size.DEFAULT.value,
            color=TextColor.BODY.value
        ),
        rx.flex(
            rx.spacer(),
            info_text(
                f"{experience()}+",
                "Años de Experiencia"
            ),
            rx.spacer(),
            info_text(
                "3+", "Proyectos"
            ),
            rx.spacer(),
            width="100%"
        ),
        width="100%",
        spacing=SizeRadix.BIG.value,
        align_items="start"
    )


def experience() -> int:
    return datetime.date.today().year - 2022
