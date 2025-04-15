import reflex as rx
from Portfolio.styles.styles import button_type_style, SizeRadix
from Portfolio.components.action_button import action_button


class ModalQAA(rx.State):
    show: bool = False

    def change(self):
        self.show = not (self.show)


def certificaciones() -> rx.Component:
    return rx.vstack(
        rx.alert_dialog.root(
            rx.alert_dialog.trigger(
                action_button(
                    "Ingeniero Biomedico",
                    "Universidad Nacional de Cordoba FCEFyN",
                    "/icons/graduation-cap-solid.svg",
                    ModalQAA.change,
                ),
                width="100%",
            ),
            rx.alert_dialog.content(
                rx.alert_dialog.title("Ingeniero Biomedico"),
                rx.inset(
                    rx.container(
                        rx.image(src="/CertificadoIngBio.jpg",
                                 object_fit="contain"),
                    )
                ),
                rx.alert_dialog.cancel(
                    rx.button("Cerrar"),
                ),
            ),
        ),
        rx.alert_dialog.root(
            rx.alert_dialog.trigger(
                action_button(
                    "Desarrollo WEB Full Stack",
                    "Icaro Organizacion",
                    "/icons/graduation-cap-solid.svg",
                    ModalQAA.change,
                ),
                width="100%",
            ),
            rx.alert_dialog.content(
                rx.alert_dialog.title("Diplo Web Full Stack"),
                rx.inset(
                    rx.container(
                        rx.image(src="/CertificadoDiploWeb.jpg",
                                 object_fit="contain"),
                    ),
                ),
                rx.alert_dialog.cancel(
                    rx.button("Cerrar"),
                ),
            ),
        ),
        rx.alert_dialog.root(
            rx.alert_dialog.trigger(
                action_button(
                    "Tester QA Automation",
                    "Icaro Organizacion",
                    "/icons/graduation-cap-solid.svg",
                    ModalQAA.change,
                ),
                width="100%",
            ),
            rx.alert_dialog.content(
                rx.alert_dialog.title("Tester QAA"),
                rx.inset(
                    rx.container(
                        rx.image(src="/TesterQAACertificado.jpg",
                                 object_fit="contain"),
                    )
                ),
                rx.alert_dialog.cancel(
                    rx.button("Cerrar"),
                ),
            ),
        ),
        spacing=SizeRadix.MEDIUM.value,
        width="100%",
    )
