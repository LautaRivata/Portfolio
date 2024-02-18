import reflex as rx
from Portfolio.components.link_button import link_button
from Portfolio.components.button import button
from Portfolio.components.title import title


def resurses() -> rx.Component:
    return rx.vstack(
        title("Recursos"),
        button(
            "Python",
            "Reflex, FasApi, Django entre otros...",
            "/icons/python.svg",
        ),
        button(
            "JavaScript",
            "Node, Express, React entre otros...",
            "/icons/js.svg",
        ),
        button(
            "C/C++",
            "Algunos proyectos para impletar en PIC",
            "/icons/c-solid.svg",
        ),
        button(
            "Git y GitHub",
            "Manejo de Versiones de Software",
            "/icons/git.svg",
        ),
        button(
            "Bases de Datos",
            "MySQL y MongoDB",
            "/icons/sql.svg",
        ),
        width="100%",
    )
