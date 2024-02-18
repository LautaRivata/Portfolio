import reflex as rx
import Portfolio.constants as const
from Portfolio.styles.styles import Size, Font
from Portfolio.styles.colors import Color, TextColor
from Portfolio.components.skill_icon import skill_icon


def skills() -> rx.Component:
    return rx.grid(
        rx.grid_item(
            skill_icon("Python", "/icons/python.svg", "Icono Python"),
            skill_icon("Django", "/icons/Skills/Django.svg", "Icono Django"),
            skill_icon("Reflex", "/icons/Skills/Reflex.png", "Icono Reflex"),
            row_span=3,
            col_span=1,
        ),
        rx.grid_item(
            skill_icon("JavaScript", "/icons/js.svg", "Icono JS"),
            skill_icon("Node.js", "/icons/node.svg", "Icono Node"),
            skill_icon("React", "/icons/react.svg", "Icono React"),
            row_span=3,
            col_span=1,
        ),
        rx.grid_item(
            skill_icon("Visual Studio",
                       "/icons/Skills/VisualStudio.svg", "Icono VisualStudio"),
            skill_icon("MySQL", "/icons/Skills/MySQL.svg", "Icono MySQL"),
            skill_icon("Github", "/icons/Skills/Github.svg", "Icono Github"),
            row_span=3,
            col_span=1,
        ),
        template_rows="repeat(3, 1fr)",
        template_columns="repeat(3, 1fr)",
        width="100%",
        gap="1em",
        justify_content="center",
        justify_items="center",
    )
