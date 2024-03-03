/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_a49f8297e8ea702c7d3f0a0a483efda9 } from "/utils/stateful_components"
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Heading, HStack, Image as ChakraImage, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Button_692c42548b447ca00f145d7dc277860f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_36c35cb34d24c3a675ae3fce9adacf27 = useCallback((_e) => addEvents([Event("_set_clipboard", {content:`lautarivata@gmail.com`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_36c35cb34d24c3a675ae3fce9adacf27} sx={{"width": "100%", "borderColor": null, "borderWidth": null, "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Copiar Email`} src={`/icons/clipboard-check-regular.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Copiar Email`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`Click aqui para copiar email al portapapeles`}
</Text>
</VStack>
</HStack>
</Button>
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
  {`Contacto`}
</Heading>
  <VStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`mailto:lautarivata@gmail.com`} isExternal={true} sx={{"width": "100%", "fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"borderColor": null, "borderWidth": null, "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Email`} src={`/icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Email`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`lautarivata@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Button_692c42548b447ca00f145d7dc277860f/>
</VStack>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}}>
  {`Otros Contactos`}
</Heading>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/LautaRivata/`} isExternal={true} sx={{"width": "100%", "fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"borderColor": null, "borderWidth": null, "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Github`} src={`/icons/github.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Github`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`Conoce mis Repositorios`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/lautaro-rivata-38b770a1/`} isExternal={true} sx={{"width": "100%", "fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"borderColor": null, "borderWidth": null, "width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Linked In`} src={`/icons/linkedin.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Linked In`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`Mi experiencia en el Ámbito Laboral`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
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
  {`ByTupak | Contactame...`}
</title>
  <meta content={`Medios de Contactarte con ByTupak`} name={`description`}/>
  <meta content={`https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg`} property={`og:image`}/>
  <meta content={`ByTupak | Contactame...`} name={`og:title`}/>
  <meta content={`Medios de Contactarte con ByTupak`} name={`og:description`}/>
  <meta content={`website`} name={`og:type`}/>
  <meta content={`https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg`} name={`og:image`}/>
  <meta content={`summary_large_image`} name={`twitter:card`}/>
  <meta content={`@tupakrivata`} name={`twitter:site`}/>
</NextHead>
</Fragment>
  )
}
