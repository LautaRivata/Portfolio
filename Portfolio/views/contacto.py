import reflex as rx
import Portfolio.constants as const
from Portfolio.components.action_button import action_button
from Portfolio.components.link_button import link_button
from Portfolio.components.title import title


def contacto() -> rx.Component:
    return rx.vstack(
        link_button(
            "Email",
            const.EMAIL,
            "/icons/email.svg",
            f"mailto:{const.EMAIL}",
        ),
        action_button(
            "Copiar Email",
            "Click aqui para copiar email al portapapeles",
            "/icons/clipboard-check-regular.svg",
            action=rx.set_clipboard("lautarivata@gmail.com"),
        ),
        width="100%"
    )
