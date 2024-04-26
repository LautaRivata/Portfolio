/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import Script from "next/script"
import NextLink from "next/link"
import { Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextHead from "next/head"



export function Fragment_6499b51736be44284c15de43340cb16c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_cb5edf864ed730e6ef1545318d0da5a2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Flex_843488594db4c1154cef74f373923006 () {



  return (
    <RadixThemesFlex align={`start`} css={{"alignSelf": "end"}} direction={`row`} gap={`2`}>
  {["Python", "Reflex"].map((l, index_92a1e5619c8327442a4ab5cc45a216b7) => (
  <Badge key={index_92a1e5619c8327442a4ab5cc45a216b7} sx={{"background": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</RadixThemesFlex>
  )
}

export function Link_10dba02501660ad418a7a217109dd7a2 () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`mailto:lautarivata@gmail.com`} passHref={true}>
  <img alt={`LinkedIn`} css={{"width": "1.5em", "height": "1.5em"}} src={`/icons/email.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_85f35b1e68e1b53b9165da2d4888fa13 () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/lautaro-rivata-38b770a1/`} passHref={true}>
  <img alt={`LinkedIn`} css={{"width": "1.5em", "height": "1.5em"}} src={`/icons/linkedin.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Flex_aad453a0d91f840e3642ce6da60da0fc () {



  return (
    <RadixThemesFlex align={`start`} css={{"alignSelf": "end"}} direction={`row`} gap={`2`}>
  {["Python", "Django", "MySQL"].map((l, index_92a1e5619c8327442a4ab5cc45a216b7) => (
  <Badge key={index_92a1e5619c8327442a4ab5cc45a216b7} sx={{"background": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</RadixThemesFlex>
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


export function Link_41bb85c5c5d29ae924ff55304f21433d () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/LautaRivata/`} passHref={true}>
  <img alt={`GitHub`} css={{"width": "1.5em", "height": "1.5em"}} src={`/icons/github.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Flex_247cafe83a7d3f98a84149ef9744a8a9 () {



  return (
    <RadixThemesFlex align={`start`} css={{"alignSelf": "end"}} direction={`row`} gap={`2`}>
  {["Javascript", "React", "MySQL"].map((l, index_92a1e5619c8327442a4ab5cc45a216b7) => (
  <Badge key={index_92a1e5619c8327442a4ab5cc45a216b7} sx={{"background": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</RadixThemesFlex>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_cb5edf864ed730e6ef1545318d0da5a2/>
</div>
  <Fragment_6499b51736be44284c15de43340cb16c/>
</Fragment>
  <RadixThemesBox>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "alignItems": "center", "background": "#212123", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "zIndex": "999", "top": "0"}} direction={`row`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": null}}>
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
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0.5em"}} src={`/icons/user-regular.svg`}/>
</RadixThemesFlex>
  <BreadcrumbLink as={NextLink} href={`/myprofile`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`My Perfil`}
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
  <MenuItem sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em", "backgroundColor": "#212123", "_hover": {"backgroundColor": "#D9525E"}}}>
  <BreadcrumbItem>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0.5em"}} src={`/icons/code.svg`}/>
</RadixThemesFlex>
  <BreadcrumbLink as={NextLink} href={`/proyects`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Proyectos`}
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
  <MenuItem sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em", "backgroundColor": "#212123", "_hover": {"backgroundColor": "#D9525E"}}}>
  <BreadcrumbItem>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0.5em"}} src={`/icons/email.svg`}/>
</RadixThemesFlex>
  <BreadcrumbLink as={NextLink} href={`/contact`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Contacto`}
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
</MenuList>
</Menu>
</Breadcrumb>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <Breadcrumb separator={``} sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em"}}>
  <BreadcrumbItem>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0.5em"}} src={`/icons/user-regular.svg`}/>
</RadixThemesFlex>
  <BreadcrumbLink as={NextLink} href={`/myprofile`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`My Perfil`}
</BreadcrumbLink>
</BreadcrumbItem>
  <BreadcrumbItem>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0.5em"}} src={`/icons/code.svg`}/>
</RadixThemesFlex>
  <BreadcrumbLink as={NextLink} href={`/proyects`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Proyectos`}
</BreadcrumbLink>
</BreadcrumbItem>
  <BreadcrumbItem>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Link Icon`} css={{"width": "1em", "height": "1em", "margin": "0.5em"}} src={`/icons/email.svg`}/>
</RadixThemesFlex>
  <BreadcrumbLink as={NextLink} href={`/contact`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Contacto`}
</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"maxWidth": "700px", "width": "100%", "marginTop": "0px !important", "marginBottom": "0px !important", "padding": "2em"}} direction={`column`} gap={`4`}>
  <RadixThemesBox css={{"width": "100%", "spacing": "5", "alignItems": "start"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`row`} gap={`5`}>
  <RadixThemesAvatar css={{"name": "By Tupak", "color": "#A6A6A6", "background": "#212123", "padding": "2px", "border": "4px", "borderColor": "#D93636"}} radius={`large`} size={`8`} src={`/me.jpg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"padding": "0px !important", "margin": "0px !important", "color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}} size={`8`}>
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
  <RadixThemesFlex align={`start`} direction={`row`} gap={`7`}>
  <Link_41bb85c5c5d29ae924ff55304f21433d/>
  <Link_85f35b1e68e1b53b9165da2d4888fa13/>
  <Link_10dba02501660ad418a7a217109dd7a2/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}}>
  {`Proyectos Principales`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "start", "borderRadius": "1em", "backgroundColor": "#212123", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
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
  <Flex_aad453a0d91f840e3642ce6da60da0fc/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "start", "borderRadius": "1em", "backgroundColor": "#212123", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
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
  <Flex_247cafe83a7d3f98a84149ef9744a8a9/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "start", "borderRadius": "1em", "backgroundColor": "#212123", "paddingInlineStart": "0.5em", "paddingInlineEnd": "0.5em", "paddingTop": "0.5em", "paddingBottom": "0.5em"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
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
  <Flex_843488594db4c1154cef74f373923006/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"color": "#737373", "background": "#212123", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "zIndex": "999"}} direction={`row`} gap={`5`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true} css={{"fontSize": "0.5em", "color": "#D93636", "fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": null}}>
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
  <RadixThemesFlex align={`start`} direction={`row`} gap={`7`}>
  <Link_41bb85c5c5d29ae924ff55304f21433d/>
  <Link_85f35b1e68e1b53b9165da2d4888fa13/>
  <Link_10dba02501660ad418a7a217109dd7a2/>
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
