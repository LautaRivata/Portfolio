import reflex as rx
import Portfolio.constants as const
from Portfolio.components.action_button import action_button
from Portfolio.components.link_button import link_button
from Portfolio.styles.styles import SizeRadix, Size, Color, TextColor
import Portfolio.styles.styles as styles


def funk():
    rx.window_alert("Copiado...")


def contacto3() -> rx.Component:
    return rx.flex(
        rx.hstack(
            rx.image(
                src="/icons/email.svg",
                width=Size.LARGE.value,
                height=Size.LARGE.value,
                margin=Size.MEDIUM.value,
            ),
            rx.vstack(
                rx.text("Email", style=styles.button_title_style),
                rx.text(const.EMAIL, style=styles.button_body_style),
                align_items="start",
                spacing=SizeRadix.SMALL.value,
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value
            ),
            align_items="start",
            # on_click=f"mailto:{const.EMAIL}",
            width="100%",
        ),
        rx.hstack(
            rx.image(
                src="/icons/clipboard-check-regular.svg",
                width=Size.LARGE.value,
                height=Size.LARGE.value,
                margin=Size.MEDIUM.value,
            ),
            rx.vstack(
                rx.text("Copiar Email",
                        style=styles.button_title_style),
                rx.text("al Portapales",
                        style=styles.button_body_style),
                align_items="start",
                spacing=SizeRadix.SMALL.value,
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value
            ),
            align_items="start",
            on_click=rx.set_clipboard(f"{const.EMAIL}"),
            width="100%",
        ),
    )


def contacto2() -> rx.Component:
    return rx.flex(
        rx.hstack(
            rx.link(
                rx.button(
                    rx.image(
                        src="/icons/email.svg",
                        width=Size.LARGE.value,
                        height=Size.LARGE.value,
                        margin=Size.MEDIUM.value,
                    ),
                    rx.vstack(
                        rx.text("Email", style=styles.button_title_style),
                        rx.text(const.EMAIL, style=styles.button_body_style),
                        align_items="start",
                        spacing=SizeRadix.SMALL.value,
                        padding_y=Size.SMALL.value,
                        padding_right=Size.SMALL.value
                    ),
                ),
                align_items="start",
                href=f"mailto:{const.EMAIL}",
                is_external=True,
                width="100%",
            ),
            action_button(
                "Copiar Email",
                "al portapapeles",
                "/icons/clipboard-check-regular.svg",
                action=rx.set_clipboard(f"{const.EMAIL}"),
            ),
        ),
        width="100%"
    )


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
            action=rx.set_clipboard(f"{const.EMAIL}"),
        ),
        spacing=SizeRadix.MEDIUM.value,
        width="100%"
    )
