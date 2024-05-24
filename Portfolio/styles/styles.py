import reflex as rx
from enum import Enum
from .colors import Color, TextColor
from .fonts import Font, FontWeight

# Constants
MAX_WIDTH = "700px"


STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap",
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap"
]

# Sizes


class SizeRadix(Enum):
    ZERO = "0"
    SMALL = "2"
    MEDIUM = "4"
    DEFAULT = "5"
    BREAD = "6"
    LARGE = "7"
    BIG = "8"
    VERY_BIG = "9"


class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em"
    FOOTER = '0.6em'
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BREAD = "1.25em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"

# Styles


BASE_STYLE = {
    # Eliminar font_family y font_weight por defecto en Text, Box y Link
    "font_family": Font.DEFAULT.value,
    "font_weight": FontWeight.LIGHT.value,
    # Eliminar el !important en futuras versiones
    "background_color": Color.BACKGROUND.value,
    rx.heading: {
        "color": TextColor.HEADER.value,
        "font_family": Font.TITLE.value,
        "font_weight": FontWeight.MEDIUM.value
    },
    rx.button: {
        "width": "100%",
        "height": "100%",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color": TextColor.HEADER.value,
        "background_color": Color.CONTENT.value,
        "white_space": "normal",
        "text_align": "start",
        "_hover": {
            "background_color": Color.SECONDARY.value
        }
    },
    rx.link: {
        "font_family": Font.DEFAULT.value,
        "font_weight": FontWeight.LIGHT.value,
        "text_decoration": "none",
        "_hover": {}
    }
}

navbar_title_style = dict(
    font_family=Font.LOGO.value,
    font_weight=FontWeight.MEDIUM.value,
    font_size=Size.LARGE.value
)

title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    font_size=Size.LARGE.value
)

button_title_style = dict(
    font_family=Font.TITLE.value,
    font_weight=FontWeight.MEDIUM.value,
    font_size=Size.DEFAULT.value,
    color=TextColor.HEADER.value
)

button_body_style = dict(
    font_weight=FontWeight.LIGHT.value,
    font_size=Size.MEDIUM.value,
    color=TextColor.BODY.value
)

menu_style = dict(
    color=TextColor.HEADER.value,
    font_family=Font.LOGO.value,
    font_weight=FontWeight.MEDIUM.value,
    font_size=Size.DEFAULT.value,
    background_color=Color.CONTENT.value,
    _hover={
        "background_color": Color.SECONDARY.value
    }
)

button_type_style = dict(
    width="100%",
    height="100%",
    padding=Size.SMALL.value,
    border_radius=Size.DEFAULT.value,
    color=TextColor.HEADER.value,
    background_color=Color.CONTENT.value,
)
