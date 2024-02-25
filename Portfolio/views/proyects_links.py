import reflex as rx
from Portfolio.components.proyect_component import proyect_component
from Portfolio.styles.styles import Size


def proyects_links() -> rx.Component:
    return rx.vstack(
        proyect_component(
            name="Trazabilidad Para Central Esterilizacion",
            body="""El objetivo del proyecto es llevar el registro de los productos medicos
                que sean procezados en una central de esterilizacion.
                Se registran todas las acciones y protocolos que se apliquen a dichos productos y
                los operarios responsables de ejecutalas.           
                """,
            languaje=["Python", "Django", "MySQL"],
            imagen="/ProyectEsterimed/HomeEditado.png",
            alt="Imagen de Home del Proyecto Esterimed",
            icon="/icons/python.svg",
        ),
        proyect_component(
            name="Ecommerce",
            body="""Proyecto Final Diplomatura, una version lite de una pagina web para comercio de mecaderia.
                Distingue entre usuarios adiministradores y clientes permitiendo distintas funciones segun el tipo establecido
                Cuenta con una base de Datos para Usuarios, Productos y Ordenes de Compras.            
                """,
            languaje=["Javascript", "React", "MySQL"],
            imagen="/ProyectEcomerse/Index.jpg",
            alt="Imagen de Home del Proyecto Ecomerse",
            icon="/icons/js.svg",
        ),
        proyect_component(
            name="Links Page",
            body="""Pagina de links de Interes para visualizacion de Perfiles,
                utilizada como base para la creacion de este Portfolio
                """,
            languaje=["Python", "Reflex"],
            imagen="/ProyectLinks/Home.png",
            alt="Imagen de Home del Proyecto Links",
            icon="/icons/python.svg",
        ),
        width="100%",
        spacing=Size.DEFAULT.value,
    )
