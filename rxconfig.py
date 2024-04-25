import reflex as rx


# para usar el hosting de reflex no se requiere usar el api_url, simplemente se borra
# para usar el back de railway tengo que apuntar la api URL ==> "https://bytupakportfolio.up.railway.app/"
# Para el caso de fron y back separados usar el cors, admitir quien corresponda
config = rx.Config(
    app_name="Portfolio",
    cors_allowed_origins=[
        "https://bytupakportfolio.vercel.app",
        "http://localhost:3000",
        "https://rxh-prod-bytupakportfolio.fly.dev",
        "https://bytupakportfolio.reflex.run",
    ]
    # api_url="https://bytupakportfolio.up.railway.app/"
)
