import reflex as rx
from Portfolio.styles.styles import button_type_style, SizeRadix
from Portfolio.components.action_button import action_button


class Modaltitulo(rx.State):
    show: bool = False

    def change(self):
        self.show = not (self.show)


class ModalDiplo(rx.State):
    show: bool = False

    def change(self):
        self.show = not (self.show)


def certificaciones() -> rx.Component:
    return rx.vstack(
        action_button(
            "Ingeniero Biomedico",
            "Universidad Nacional de Cordoba FCEFyN",
            "/icons/graduation-cap-solid.svg",
            Modaltitulo.change,
        ),
        action_button(
            "Desarrollo WEB Full Stak",
            "Icaro Organizacion",
            "/icons/graduation-cap-solid.svg",
            ModalDiplo.change,
        ),
        rx.chakra.modal(
            rx.chakra.modal_overlay(
                rx.chakra.modal_content(
                    rx.chakra.modal_header("Ingeniero Biomedico"),
                    rx.chakra.modal_body(
                        rx.image(
                            src="/CertificadoIngBio.jpg",
                        )
                    ),
                    rx.chakra.modal_footer(
                        rx.button(
                            "Cerar",
                            on_click=Modaltitulo.change,
                        )
                    ),
                )
            ),
            is_open=Modaltitulo.show,
        ),
        rx.chakra.modal(
            rx.chakra.modal_overlay(
                rx.chakra.modal_content(
                    rx.chakra.modal_header("Diplo Web Full Stack"),
                    rx.chakra.modal_body(
                        rx.image(
                            src="/CertificadoDiploWeb.jpg",
                        )
                    ),
                    rx.chakra.modal_footer(
                        rx.button(
                            "Cerar",
                            on_click=ModalDiplo.change,
                        )
                    ),
                )
            ),
            is_open=ModalDiplo.show,
        ),
        spacing=SizeRadix.MEDIUM.value,
        width="100%",
    )
