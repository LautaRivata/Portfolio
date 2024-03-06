/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_a49f8297e8ea702c7d3f0a0a483efda9 } from "/utils/stateful_components"
import { Avatar, Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Heading, HStack, Image as ChakraImage, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import NextLink from "next/link"
import "@radix-ui/themes/styles.css"
import "focus-visible/dist/focus-visible"
import { Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "/utils/theme.js"
import NextHead from "next/head"



export function Hstack_3dfd61bf66e81837d945c8dd0bad8b39 () {


  return (
    <HStack sx={{"alignSelf": "end"}}>
  {["Python", "Reflex"].map((l, index_29003ef2a0dcf3ec76abc634908259b7) => (
  <Badge key={index_29003ef2a0dcf3ec76abc634908259b7} sx={{"bg": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</HStack>
  )
}

export function Hstack_9bbc812d7980400d59deafbe8d708f33 () {


  return (
    <HStack sx={{"alignSelf": "end"}}>
  {["Javascript", "React", "MySQL"].map((l, index_29003ef2a0dcf3ec76abc634908259b7) => (
  <Badge key={index_29003ef2a0dcf3ec76abc634908259b7} sx={{"bg": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</HStack>
  )
}

export function Hstack_dc9e2c8c6677783a26ef35d7eb709804 () {


  return (
    <HStack sx={{"alignSelf": "end"}}>
  {["Python", "Django", "MySQL"].map((l, index_29003ef2a0dcf3ec76abc634908259b7) => (
  <Badge key={index_29003ef2a0dcf3ec76abc634908259b7} sx={{"bg": "#D93636", "color": "#A6A6A6", "borderColor": "#D9525E", "borderWidth": 2}} variant={`subtle`}>
  {l}
</Badge>
))}
</HStack>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_a49f8297e8ea702c7d3f0a0a483efda9/>
  <Box sx={{"fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <HStack sx={{"position": "sticky", "bg": "#212123", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Link as={NextLink} href={`/`} sx={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <Box sx={{"fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#D93636"}}>
  {`By`}
</Text>
  <Text as={`span`} sx={{"color": "#D9525E"}}>
  {`Tupak`}
</Text>
</Box>
</Link>
  <Spacer/>
  <Box sx={{"display": ["block", "none", "none", "none"], "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <Breadcrumb>
  <Menu sx={{"bg": "#212123"}}>
  <MenuButton>
  <ChakraImage alt={`Icono Menu`} src={`/icons/bars-solid.svg`} sx={{"width": "1em", "height": "1em"}}/>
</MenuButton>
  <MenuList>
  <MenuItem sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em", "backgroundColor": "#212123", "_hover": {"backgroundColor": "#D9525E"}}}>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage alt={`Link Icon`} src={`/icons/user-regular.svg`} sx={{"width": "1em", "height": "1em", "margin": "0.5em"}}/>
</HStack>
  <BreadcrumbLink as={NextLink} href={`/myprofile`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`My Perfil`}
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
  <MenuItem sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em", "backgroundColor": "#212123", "_hover": {"backgroundColor": "#D9525E"}}}>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage alt={`Link Icon`} src={`/icons/code.svg`} sx={{"width": "1em", "height": "1em", "margin": "0.5em"}}/>
</HStack>
  <BreadcrumbLink as={NextLink} href={`/proyects`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Proyectos`}
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
  <MenuItem sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em", "backgroundColor": "#212123", "_hover": {"backgroundColor": "#D9525E"}}}>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage alt={`Link Icon`} src={`/icons/email.svg`} sx={{"width": "1em", "height": "1em", "margin": "0.5em"}}/>
</HStack>
  <BreadcrumbLink as={NextLink} href={`/contact`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Contacto`}
</BreadcrumbLink>
</BreadcrumbItem>
</MenuItem>
</MenuList>
</Menu>
</Breadcrumb>
</Box>
  <Box sx={{"display": ["none", "block", "block", "block"], "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <Breadcrumb separator={``} sx={{"color": "#F2F2F2", "fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1em"}}>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage alt={`Link Icon`} src={`/icons/user-regular.svg`} sx={{"width": "1em", "height": "1em", "margin": "0.5em"}}/>
</HStack>
  <BreadcrumbLink as={NextLink} href={`/myprofile`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`My Perfil`}
</BreadcrumbLink>
</BreadcrumbItem>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage alt={`Link Icon`} src={`/icons/code.svg`} sx={{"width": "1em", "height": "1em", "margin": "0.5em"}}/>
</HStack>
  <BreadcrumbLink as={NextLink} href={`/proyects`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Proyectos`}
</BreadcrumbLink>
</BreadcrumbItem>
  <BreadcrumbItem>
  <HStack>
  <ChakraImage alt={`Link Icon`} src={`/icons/email.svg`} sx={{"width": "1em", "height": "1em", "margin": "0.5em"}}/>
</HStack>
  <BreadcrumbLink as={NextLink} href={`/contact`} sx={{"_hover": {"textDecoration": "none"}}}>
  {`Contacto`}
</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</Box>
</HStack>
  <Center>
  <VStack spacing={`1em`} sx={{"maxWidth": "700px", "width": "100%", "marginY": "0px !important", "padding": "2em"}}>
  <Box sx={{"width": "100%", "spacing": "2em", "alignItems": "start", "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <HStack spacing={`1em`}>
  <Avatar name={`By Tupak`} size={`xl`} src={`/me.jpg`} sx={{"color": "#A6A6A6", "bg": "#212123", "padding": "2px", "border": "4px", "borderColor": "#D93636"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}}>
  {`Lautaro Rivata`}
</Heading>
  <Text sx={{"fontFamily": "Montserrat", "fontWeight": "500", "fontSize": "1.5em", "marginTop": "0px !important"}}>
  <Text as={`span`} sx={{"color": "#D93636"}}>
  {`@By`}
</Text>
  <Text as={`span`} sx={{"color": "#D9525E"}}>
  {`Tupak`}
</Text>
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/LautaRivata/`} isExternal={true} sx={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`GitHub`} src={`/icons/github.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/lautaro-rivata-38b770a1/`} isExternal={true} sx={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`LinkedIn`} src={`/icons/linkedin.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`mailto:lautarivata@gmail.com`} isExternal={true} sx={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`LinkedIn`} src={`/icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
</Box>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}}>
  {`Proyectos Principales`}
</Heading>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <VStack alignItems={`start`} spacing={`1em`} sx={{"width": "100%", "borderRadius": "1em", "backgroundColor": "#212123", "paddingX": "0.5em", "paddingY": "0.5em"}}>
  <HStack>
  <ChakraImage alt={`lenguaje Icon`} src={`/icons/python.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <Text sx={{"fontSize": "1.5em", "fontWeight": "500", "color": "#F2F2F2", "fontFamily": "Ubuntu"}}>
  {`Trazabilidad Para Central Esterilizacion`}
</Text>
</HStack>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`El objetivo del proyecto es llevar el registro de los productos medicos
                que sean procezados en una central de esterilizacion.
                Se registran todas las acciones y protocolos que se apliquen a dichos productos y
                los operarios responsables de ejecutalas.           
                `}
</Text>
  <ChakraImage alt={`Imagen de Home del Proyecto Esterimed`} src={`/ProyectEsterimed/HomeEditado.png`} sx={{"height": "15em", "aspectRatio": "16 / 9", "alignSelf": "center"}}/>
  <Hstack_dc9e2c8c6677783a26ef35d7eb709804/>
</VStack>
  <VStack alignItems={`start`} spacing={`1em`} sx={{"width": "100%", "borderRadius": "1em", "backgroundColor": "#212123", "paddingX": "0.5em", "paddingY": "0.5em"}}>
  <HStack>
  <ChakraImage alt={`lenguaje Icon`} src={`/icons/js.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <Text sx={{"fontSize": "1.5em", "fontWeight": "500", "color": "#F2F2F2", "fontFamily": "Ubuntu"}}>
  {`Ecommerce`}
</Text>
</HStack>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`Proyecto Final Diplomatura, una version lite de una pagina web para comercio de mecaderia.
                Distingue entre usuarios adiministradores y clientes permitiendo distintas funciones segun el tipo establecido
                Cuenta con una base de Datos para Usuarios, Productos y Ordenes de Compras.            
                `}
</Text>
  <ChakraImage alt={`Imagen de Home del Proyecto Ecomerse`} src={`/ProyectEcomerse/Index.jpg`} sx={{"height": "15em", "aspectRatio": "16 / 9", "alignSelf": "center"}}/>
  <Hstack_9bbc812d7980400d59deafbe8d708f33/>
</VStack>
  <VStack alignItems={`start`} spacing={`1em`} sx={{"width": "100%", "borderRadius": "1em", "backgroundColor": "#212123", "paddingX": "0.5em", "paddingY": "0.5em"}}>
  <HStack>
  <ChakraImage alt={`lenguaje Icon`} src={`/icons/python.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <Text sx={{"fontSize": "1.5em", "fontWeight": "500", "color": "#F2F2F2", "fontFamily": "Ubuntu"}}>
  {`Links Page`}
</Text>
</HStack>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`Pagina de links de Interes para visualizacion de Perfiles,
                utilizada como base para la creacion de este Portfolio
                `}
</Text>
  <ChakraImage alt={`Imagen de Home del Proyecto Links`} src={`/ProyectLinks/Home.png`} sx={{"height": "15em", "aspectRatio": "16 / 9", "alignSelf": "center"}}/>
  <Hstack_3dfd61bf66e81837d945c8dd0bad8b39/>
</VStack>
</VStack>
</VStack>
</Center>
  <HStack spacing={`1em`} sx={{"color": "#737373", "bg": "#212123", "paddingX": "2em", "paddingY": "1em", "zIndex": "999"}}>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"fontSize": "1em", "fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <Box sx={{"fontFamily": "Ubuntu", "fontWeight": "300"}}>
  {`©2024 `}
  <Text as={`span`} sx={{"color": "#D93636"}}>
  {`ByTupak de Lautaro Rivata`}
</Text>
  {`  V1.0`}
</Box>
</Link>
  <Spacer/>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/LautaRivata/`} isExternal={true} sx={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`GitHub`} src={`/icons/github.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/lautaro-rivata-38b770a1/`} isExternal={true} sx={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`LinkedIn`} src={`/icons/linkedin.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`mailto:lautarivata@gmail.com`} isExternal={true} sx={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <ChakraImage alt={`LinkedIn`} src={`/icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
</HStack>
  <Spacer/>
</HStack>
</Box>
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
