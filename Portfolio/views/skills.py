import reflex as rx
from Portfolio.styles.styles import button_type_style, Size, Color
from Portfolio.components.skill_icon import skill_icon


def skills() -> rx.Component:
    return rx.grid(
        rx.card(
            skill_icon("Python", "/icons/python.svg", "Icono Python"),
            skill_icon("Django", "/icons/Skills/Django.svg", "Icono Django"),
            skill_icon("Reflex", "/icons/Skills/Reflex.png", "Icono Reflex"),
            row_span=3,
            col_span=1,
            variant="ghost",
        ),
        rx.card(
            skill_icon("JavaScript", "/icons/js.svg", "Icono JS"),
            skill_icon("Node.js", "/icons/node.svg", "Icono Node"),
            skill_icon("React", "/icons/react.svg", "Icono React"),
            row_span=3,
            col_span=1,
            variant="ghost",
        ),
        rx.card(
            skill_icon("Visual Studio",
                       "/icons/vscode-alt.svg", "Icono VisualStudio"),
            skill_icon("MySQL", "/icons/Skills/MySQL.svg", "Icono MySQL"),
            skill_icon("Github", "/icons/github.svg", "Icono Github"),
            row_span=3,
            col_span=1,
            variant="ghost",
        ),
        # template_rows="repeat(3, 1fr)",    Para Chakra
        # template_columns="repeat(3, 1fr)", Para Chakra
        style=button_type_style,
        justify_content="center",
        justify_items="center",
        columns="3",
        spacing="4",
        width="100%",
    )
