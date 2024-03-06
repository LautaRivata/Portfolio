/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_a49f8297e8ea702c7d3f0a0a483efda9 } from "/utils/stateful_components"
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Grid, GridItem, Heading, HStack, Image as ChakraImage, Link, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Button_d9a148b9003951da4c64fd12b08ac0a4 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_01041feec2186d2f1866cdc3bc5e9caf = useCallback((_e) => addEvents([Event("_download", {url:`/2024 - Lautaro Rivata FullStack.pdf`,filename:`Lautaro Rivata FullStack.pdf`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_01041feec2186d2f1866cdc3bc5e9caf} sx={{"width": "100%", "borderColor": null, "borderWidth": null, "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Ver CV`} src={`/icons/file-regular.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Ver CV`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`Aquí puedes descargar mi Curriculum Vitae`}
</Text>
</VStack>
</HStack>
</Button>
  )
}

export function Modal_864d3dffb300c6c74fd6f8cc65cd9965 () {
  const state__modaltitulo = useContext(StateContexts.state__modaltitulo)


  return (
    <Modal isOpen={state__modaltitulo.show}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Ingeniero Biomedico`}
</ModalHeader>
  <ModalBody>
  <ChakraImage src={`/CertificadoIngBio.jpg`}/>
</ModalBody>
  <ModalFooter>
  <Button_2c95cf2a2250d41ea8d37af487161d52/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
  )
}

export function Button_3ff1528eaade23fca6fd4ca9952484d1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_534692acb4488c609bde3de0659d561f = useCallback((_e) => addEvents([Event("state.modal_diplo.change", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_534692acb4488c609bde3de0659d561f} sx={{"width": "100%", "borderColor": null, "borderWidth": null, "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Desarrollo WEB Full Stak`} src={`/icons/graduation-cap-solid.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Desarrollo WEB Full Stak`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`Icaro Organizacion`}
</Text>
</VStack>
</HStack>
</Button>
  )
}

export function Button_2c95cf2a2250d41ea8d37af487161d52 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_021d85cea0cb5d0410a6a559cef3c699 = useCallback((_e) => addEvents([Event("state.modaltitulo.change", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_021d85cea0cb5d0410a6a559cef3c699} sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  {`Cerar`}
</Button>
  )
}

export function Button_e2c97b4f76755d5db6e271346b601e57 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_534692acb4488c609bde3de0659d561f = useCallback((_e) => addEvents([Event("state.modal_diplo.change", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_534692acb4488c609bde3de0659d561f} sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  {`Cerar`}
</Button>
  )
}

export function Modal_ead9810bfc2fbaf50d1038771ad37584 () {
  const state__modal_diplo = useContext(StateContexts.state__modal_diplo)


  return (
    <Modal isOpen={state__modal_diplo.show}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Diplo Web Full Stack`}
</ModalHeader>
  <ModalBody>
  <ChakraImage src={`/CertificadoDiploWeb.jpg`}/>
</ModalBody>
  <ModalFooter>
  <Button_e2c97b4f76755d5db6e271346b601e57/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
  )
}

export function Button_01fb78f77a69d5c31c1f21bf72cae281 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_021d85cea0cb5d0410a6a559cef3c699 = useCallback((_e) => addEvents([Event("state.modaltitulo.change", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_021d85cea0cb5d0410a6a559cef3c699} sx={{"width": "100%", "borderColor": null, "borderWidth": null, "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#D9525E"}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`Ingeniero Biomedico`} src={`/icons/graduation-cap-solid.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Ingeniero Biomedico`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu"}}>
  {`Universidad Nacional de Cordoba FCEFyN`}
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
  {`Certificaciones`}
</Heading>
  <VStack sx={{"width": "100%"}}>
  <Button_01fb78f77a69d5c31c1f21bf72cae281/>
  <Button_3ff1528eaade23fca6fd4ca9952484d1/>
  <Modal_864d3dffb300c6c74fd6f8cc65cd9965/>
  <Modal_ead9810bfc2fbaf50d1038771ad37584/>
</VStack>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}}>
  {`Links de Interes`}
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
  <Button_d9a148b9003951da4c64fd12b08ac0a4/>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}}>
  {`Pricipales Herramientas`}
</Heading>
  <Grid sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "justifyContent": "center", "justifyItems": "center"}} templateColumns={`repeat(3, 1fr)`} templateRows={`repeat(3, 1fr)`}>
  <GridItem colSpan={1} rowSpan={3}>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono Python`} src={`/icons/python.svg`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Python`}
</Text>
</Box>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono Django`} src={`/icons/Skills/Django.svg`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Django`}
</Text>
</Box>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono Reflex`} src={`/icons/Skills/Reflex.png`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Reflex`}
</Text>
</Box>
</GridItem>
  <GridItem colSpan={1} rowSpan={3}>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono JS`} src={`/icons/js.svg`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`JavaScript`}
</Text>
</Box>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono Node`} src={`/icons/node.svg`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Node.js`}
</Text>
</Box>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono React`} src={`/icons/react.svg`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`React`}
</Text>
</Box>
</GridItem>
  <GridItem colSpan={1} rowSpan={3}>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono VisualStudio`} src={`/icons/vscode-alt.svg`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Visual Studio`}
</Text>
</Box>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono MySQL`} src={`/icons/Skills/MySQL.svg`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`MySQL`}
</Text>
</Box>
  <Box sx={{"_hover": {"backgroundColor": "#D9525E"}, "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <ChakraImage alt={`Icono Github`} src={`/icons/github.svg`} sx={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}}/>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Github`}
</Text>
</Box>
</GridItem>
</Grid>
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
  {`ByTupak | Mi Perfil`}
</title>
  <meta content={`Mis Habilidades y Experiencia`} name={`description`}/>
  <meta content={`https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg`} property={`og:image`}/>
  <meta content={`ByTupak | Mi Perfil`} name={`og:title`}/>
  <meta content={`Mis Habilidades y Experiencia`} name={`og:description`}/>
  <meta content={`website`} name={`og:type`}/>
  <meta content={`https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg`} name={`og:image`}/>
  <meta content={`summary_large_image`} name={`twitter:card`}/>
  <meta content={`@tupakrivata`} name={`twitter:site`}/>
</NextHead>
</Fragment>
  )
}
