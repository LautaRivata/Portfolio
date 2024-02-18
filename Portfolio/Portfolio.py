from rxconfig import config
import reflex as rx
import Portfolio.constants as const
import Portfolio.styles.styles as styles
from Portfolio.pages.index import index
from Portfolio.pages.proyects import proyects
from Portfolio.pages.contact import contact
from Portfolio.pages.my_profile import my_profile


class State(rx.State):
    """The app state."""

    pass


# Create app instance and add index page.
app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
)
