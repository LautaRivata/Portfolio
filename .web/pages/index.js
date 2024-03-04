/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_a49f8297e8ea702c7d3f0a0a483efda9 } from "/utils/stateful_components"
import { Avatar, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



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
  <VStack justifyContent={`center`} sx={{"maxWidth": "700px", "width": "100%", "minHeight": "80vh", "marginY": "0px !important", "padding": "2em"}}>
  <Box sx={{"width": "100%", "spacing": "2em", "alignItems": "start", "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <HStack spacing={`1em`}>
  <Avatar name={`By Tupak`} size={`2xl`} src={`/me.jpg`} sx={{"color": "#A6A6A6", "bg": "#212123", "padding": "2px", "border": "4px", "borderColor": "#D93636"}}/>
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
  <VStack alignItems={`start`} spacing={`2em`} sx={{"width": "100%"}}>
  <Text sx={{"fontSize": "1em", "color": "#A6A6A6", "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  {`
            Soy Ingeniero Biomédico con diplomatura en desarrollo WEB 
            full-stack.
            Bienvenid@ a mi portfolio.
            `}
</Text>
  <Flex sx={{"width": "100%"}}>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#D93636"}}>
  {`2+`}
</Text>
  {` Años de Experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#A6A6A6", "fontFamily": "Ubuntu", "fontWeight": "300"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#D93636"}}>
  {`3+`}
</Text>
  {` Proyectos`}
</Box>
  <Spacer/>
</Flex>
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
  {`ByTupak | Desarrollador WEB Full-Stack`}
</title>
  <meta content={`Hola, mi nombre es Tupak. Soy ingeniero Biomedico y desarrollador freelance full-stack.`} name={`description`}/>
  <meta content={`https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg`} property={`og:image`}/>
  <meta content={`ByTupak | Desarrollador WEB Full-Stack`} name={`og:title`}/>
  <meta content={`Hola, mi nombre es Tupak. Soy ingeniero Biomedico y desarrollador freelance full-stack.`} name={`og:description`}/>
  <meta content={`website`} name={`og:type`}/>
  <meta content={`https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg`} name={`og:image`}/>
  <meta content={`summary_large_image`} name={`twitter:card`}/>
  <meta content={`@tupakrivata`} name={`twitter:site`}/>
</NextHead>
</Fragment>
  )
}