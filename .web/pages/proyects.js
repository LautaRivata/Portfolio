/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import Script from "next/script"
import NextLink from "next/link"
import { Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import NextHead from "next/head"



export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Link_d092d3390f9894667b3bff6301b9df14 () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/LautaRivata/`} passHref={true}>
  <img alt={`GitHub`} css={{"width": "1.25em", "height": "1.25em"}} src={`/icons/github.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Link_46772287e54ebcdf468eb39cbf0cb6ca () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`mailto:lautarivata@gmail.com`} passHref={true}>
  <img alt={`LinkedIn`} css={{"width": "1em", "height": "1em"}} src={`/icons/email.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Flex_d1a34c974f9ce54d212b2f291921a183 () {



  return (
    <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignSelf": "end"}} direction={`row`} gap={`3`}>
  {["Python", "Django", "MySQL"].map((l, index_f4b7fa456d9bff4e) => (
  <Badge key={index_f4b7fa456d9bff4e} sx={{"background": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</RadixThemesFlex>
  )
}

export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Flex_f11126ad3f290190e92bf877abca7118 () {



  return (
    <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignSelf": "end"}} direction={`row`} gap={`3`}>
  {["Javascript", "React", "MySQL"].map((l, index_f4b7fa456d9bff4e) => (
  <Badge key={index_f4b7fa456d9bff4e} sx={{"background": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</RadixThemesFlex>
  )
}

export function Link_2605b281de72f70923f3a9bb1a1e3b55 () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/lautaro-rivata-38b770a1/`} passHref={true}>
  <img alt={`LinkedIn`} css={{"width": "1.25em", "height": "1.25em"}} src={`/icons/linkedin.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_2a6d52032107af3bd2632c56e86f382e () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/LautaRivata/`} passHref={true}>
  <img alt={`GitHub`} css={{"width": "1em", "height": "1em"}} src={`/icons/github.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_9fc2af66b54f644abd6a25a1295fbd68 () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`mailto:lautarivata@gmail.com`} passHref={true}>
  <img alt={`LinkedIn`} css={{"width": "1.25em", "height": "1.25em"}} src={`/icons/email.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Toaster_89416713a273995fc60191a4cf573054 () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={colorMode}/>
  )
}

export function Flex_cecf3f9acc7d226e00807aee1129b6b3 () {



  return (
    <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignSelf": "end"}} direction={`row`} gap={`3`}>
  {["Python", "Reflex"].map((l, index_f4b7fa456d9bff4e) => (
  <Badge key={index_f4b7fa456d9bff4e} sx={{"background": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</RadixThemesFlex>
  )
}

export function Link_f39992aa27b97ecdeb61edbc375b299b () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/lautaro-rivata-38b770a1/`} passHref={true}>
  <img alt={`LinkedIn`} css={{"width": "1em", "height": "1em"}} src={`/icons/linkedin.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_89416713a273995fc60191a4cf573054/>
</Fragment>
  <RadixThemesBox>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"position": "sticky", "alignItems": "center", "background": "#212123", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "zIndex": "999", "top": "0"}} direction={`row`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesBox css={{"fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#D93636"}}>
  {`By`}
</Text>
  <Text as={`span`} sx={{"color": "#D9525E"}}>
  {`Tupak`}
</Text>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <Breadcrumb>
  <Menu sx={{"background": "#212123"}}>
  <MenuButton>
  <img alt={`Icono Menu`} css={{"width": "1em", "height": "1em"}} src={`/icons/bars-solid.svg`}/>
</MenuButton>
  <MenuList>
  <MenuItem sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em", "backgroundColor": "#212123", "_hover": {"backgroundColor": "#D9525E"}}}>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/myprofile`} sx={{"_hover": {"textDecoration": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center", "padding": "0px !important"}} direction={`row`} gap={`3`}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0px !important"}} src={`/icons/user-regular.svg`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesText as={`p`}>
  {`My Perfil`}
</RadixThemesText>
</RadixThemesFlex>
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
  <MenuItem sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em", "backgroundColor": "#212123", "_hover": {"backgroundColor": "#D9525E"}}}>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/proyects`} sx={{"_hover": {"textDecoration": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center", "padding": "0px !important"}} direction={`row`} gap={`3`}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0px !important"}} src={`/icons/code.svg`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesText as={`p`}>
  {`Proyectos`}
</RadixThemesText>
</RadixThemesFlex>
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
  <MenuItem sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em", "backgroundColor": "#212123", "_hover": {"backgroundColor": "#D9525E"}}}>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/contact`} sx={{"_hover": {"textDecoration": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center", "padding": "0px !important"}} direction={`row`} gap={`3`}>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0px !important"}} src={`/icons/email.svg`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesText as={`p`}>
  {`Contacto`}
</RadixThemesText>
</RadixThemesFlex>
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
</MenuList>
</Menu>
</Breadcrumb>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <Breadcrumb separator={`|`} sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em"}}>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/myprofile`} sx={{"_hover": {"textDecoration": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center", "padding": "0px !important"}} direction={`row`} gap={`3`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0px !important"}} src={`/icons/user-regular.svg`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesText as={`p`}>
  {`My Perfil`}
</RadixThemesText>
</RadixThemesFlex>
</BreadcrumbLink>
</BreadcrumbItem>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/proyects`} sx={{"_hover": {"textDecoration": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center", "padding": "0px !important"}} direction={`row`} gap={`3`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0px !important"}} src={`/icons/code.svg`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesText as={`p`}>
  {`Proyectos`}
</RadixThemesText>
</RadixThemesFlex>
</BreadcrumbLink>
</BreadcrumbItem>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/contact`} sx={{"_hover": {"textDecoration": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center", "padding": "0px !important"}} direction={`row`} gap={`3`}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0px !important"}} src={`/icons/email.svg`}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <RadixThemesText as={`p`}>
  {`Contacto`}
</RadixThemesText>
</RadixThemesFlex>
</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"maxWidth": "700px", "width": "100%", "marginTop": "0px !important", "marginBottom": "0px !important", "padding": "2em"}} direction={`column`} gap={`4`}>
  <RadixThemesBox css={{"width": "100%", "spacing": "5", "alignItems": "start"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`5`}>
  <RadixThemesAvatar css={{"name": "By Tupak", "color": "#A6A6A6", "background": "#212123", "padding": "2px", "border": "4px", "borderColor": "#D93636"}} radius={`large`} size={`8`} src={`/me.jpg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "start"}} direction={`column`} gap={`3`}>
  <RadixThemesHeading css={{"color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500", "padding": "0px !important", "margin": "0px !important"}} size={`8`}>
  {`Lautaro Rivata`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#D93636"}}>
  {`@By`}
</Text>
  <Text as={`span`} sx={{"color": "#D9525E"}}>
  {`Tupak`}
</Text>
</RadixThemesText>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`7`}>
  <Link_d092d3390f9894667b3bff6301b9df14/>
  <Link_2605b281de72f70923f3a9bb1a1e3b55/>
  <Link_9fc2af66b54f644abd6a25a1295fbd68/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesHeading css={{"color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500", "width": "100%", "paddingTop": "1em", "fontSize": "1.5em"}}>
  {`Proyectos Principales`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alignItems": "start", "borderRadius": "1em", "backgroundColor": "#212123", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`lenguaje Icon`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/python.svg`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "1.5em", "fontWeight": "500", "color": "#F2F2F2"}}>
  {`Trazabilidad Para Central Esterilizacion`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`El objetivo del proyecto es llevar el registro de los productos medicos
                que sean procezados en una central de esterilizacion.
                Se registran todas las acciones y protocolos que se apliquen a dichos productos y
                los operarios responsables de ejecutalas.           
                `}
</RadixThemesText>
  <img alt={`Imagen de Home del Proyecto Esterimed`} css={{"height": "15em", "aspectRatio": "16 / 9", "alignSelf": "center"}} src={`/ProyectEsterimed/HomeEditado.png`}/>
  <Flex_d1a34c974f9ce54d212b2f291921a183/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alignItems": "start", "borderRadius": "1em", "backgroundColor": "#212123", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`lenguaje Icon`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/js.svg`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "1.5em", "fontWeight": "500", "color": "#F2F2F2"}}>
  {`Ecommerce`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`Proyecto Final Diplomatura, una version lite de una pagina web para comercio de mecaderia.
                Distingue entre usuarios adiministradores y clientes permitiendo distintas funciones segun el tipo establecido
                Cuenta con una base de Datos para Usuarios, Productos y Ordenes de Compras.            
                `}
</RadixThemesText>
  <img alt={`Imagen de Home del Proyecto Ecomerse`} css={{"height": "15em", "aspectRatio": "16 / 9", "alignSelf": "center"}} src={`/ProyectEcomerse/Index.jpg`}/>
  <Flex_f11126ad3f290190e92bf877abca7118/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alignItems": "start", "borderRadius": "1em", "backgroundColor": "#212123", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`lenguaje Icon`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/python.svg`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "1.5em", "fontWeight": "500", "color": "#F2F2F2"}}>
  {`Links Page`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`Pagina de links de Interes para visualizacion de Perfiles,
                utilizada como base para la creacion de este Portfolio
                `}
</RadixThemesText>
  <img alt={`Imagen de Home del Proyecto Links`} css={{"height": "15em", "aspectRatio": "16 / 9", "alignSelf": "center"}} src={`/ProyectLinks/Home.png`}/>
  <Flex_cecf3f9acc7d226e00807aee1129b6b3/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"color": "#737373", "background": "#212123", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "zIndex": "999"}} direction={`row`} gap={`5`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "fontSize": "0.6em", "color": "#D93636", "textAlign": "center"}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesBox>
  {`©2024 `}
  <Text as={`span`} sx={{"color": "#D93636"}}>
  {`ByTupak de Lautaro Rivata`}
</Text>
  {`  V1.0`}
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`5`}>
  <Link_2a6d52032107af3bd2632c56e86f382e/>
  <Link_f39992aa27b97ecdeb61edbc375b299b/>
  <Link_46772287e54ebcdf468eb39cbf0cb6ca/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`ByTupak | Proyectos principales`}
</title>
  <meta content={`Listado de mis proyectos principales`} name={`description`}/>
  <meta content={`https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg`} property={`og:image`}/>
  <meta content={`ByTupak | Proyectos principales`} name={`og:title`}/>
  <meta content={`Listado de mis proyectos principales`} name={`og:description`}/>
  <meta content={`website`} name={`og:type`}/>
  <meta content={`https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg`} name={`og:image`}/>
  <meta content={`summary_large_image`} name={`twitter:card`}/>
  <meta content={`@tupakrivata`} name={`twitter:site`}/>
</NextHead>
</Fragment>
  )
}
