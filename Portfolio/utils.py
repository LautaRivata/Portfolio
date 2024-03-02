import reflex as rx

# Común


def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")


preview = "https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg"

_meta = [
    {"name": "og:type", "content": "website"},
    {"name": "og:image", "content": preview},
    {"name": "twitter:card", "content": "summary_large_image"},
    {"name": "twitter:site", "content": "@tupakrivata"}
]

# Index

index_title = "ByTupak | Desarrollador WEB Full-Stack"
index_description = "Hola, mi nombre es Tupak. Soy ingeniero Biomedico y desarrollador freelance full-stack."

index_meta = [
    {"name": "og:title", "content": index_title},
    {"name": "og:description", "content": index_description},
]
index_meta.extend(_meta)

# My Profile

myprofile_title = "ByTupak | Mi Perfil"
myprofile_description = "Mis Habilidades y Experiencia"

myprofile_meta = [
    {"name": "og:title", "content": myprofile_title},
    {"name": "og:description", "content": myprofile_description},
]
myprofile_meta.extend(_meta)

# Proyectos

proyects_title = "ByTupak | Proyectos principales"
proyects_description = "Listado de mis proyectos principales"

proyects_meta = [
    {"name": "og:title", "content": proyects_title},
    {"name": "og:description", "content": proyects_description},
]
proyects_meta.extend(_meta)

# Contact

contact_title = "ByTupak | Contactame..."
contact_description = "Medios de Contactarte con ByTupak"

contact_meta = [
    {"name": "og:title", "content": contact_title},
    {"name": "og:description", "content": contact_description},
]
contact_meta.extend(_meta)
