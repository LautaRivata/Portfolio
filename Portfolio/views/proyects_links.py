import reflex as rx
import Portfolio.constants as const
from Portfolio.routes import Route
from Portfolio.components.proyect_component import proyect_component
from Portfolio.styles.styles import Size


def proyects_links() -> rx.Component:
    return rx.vstack(
        proyect_component(
            name="Esterimed",
            body="Sistema de Gestion Central Esterilizacion",
            languaje="Creado Con Django, Python y SQL",
            imagen="/ProyectEsterimed/HomeEditado.png",
            alt="Imagen de Home del Proyecto Esterimed",
            icon="/icons/python.svg",
        ),
        proyect_component(
            name="Ecommerce",
            body="Proyecto Final Diplomatura, una version lite de una pagina web para comercio de mecaderia",
            languaje="Creado Con Javascript, React y SQL",
            imagen="/ProyectEcomerse/Index.jpg",
            alt="Imagen de Home del Proyecto Ecomerse",
            icon="/icons/js.svg",
        ),
        proyect_component(
            name="Links Page",
            body="Pagina con link para visualizacion de Perfiles",
            languaje="Creado Con Python y Reflex",
            imagen="/ProyectLinks/Home.png",
            alt="Imagen de Home del Proyecto Links",
            icon="/icons/python.svg",
        ),
        width="100%",
        spacing=Size.DEFAULT.value,
    )
