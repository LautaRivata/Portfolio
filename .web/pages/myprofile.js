/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import Script from "next/script"
import NextLink from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
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

export function Link_46772287e54ebcdf468eb39cbf0cb6ca () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`mailto:lautarivata@gmail.com`} passHref={true}>
  <img alt={`LinkedIn`} css={{"width": "1em", "height": "1em"}} src={`/icons/email.svg`}/>
</NextLink>
</RadixThemesLink>
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

export function Button_0936174dc7a4b483cf7cbfa0c95ac54c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_d6dbe4603fbd1f13911795c669126178 = useCallback((_e) => addEvents([Event("state.modal_qaa.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_d6dbe4603fbd1f13911795c669126178}>
  {`Cerrar`}
</RadixThemesButton>
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

export function Button_a7871e61643bc796952fe9f0a617d667 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_01041feec2186d2f1866cdc3bc5e9caf = useCallback((_e) => addEvents([Event("_download", {url:`/2024 - Lautaro Rivata FullStack.pdf`,filename:`Lautaro Rivata FullStack.pdf`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_01041feec2186d2f1866cdc3bc5e9caf}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <img alt={`Ver CV`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/file-regular.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Ver CV`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`Aquí puedes descargar mi Curriculum Vitae`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export function Button_9cae5cbffed231960d0fecf0a3a41fa6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_534692acb4488c609bde3de0659d561f = useCallback((_e) => addEvents([Event("state.modal_diplo.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_534692acb4488c609bde3de0659d561f}>
  {`Cerrar`}
</RadixThemesButton>
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


export function Modal_afd9a34b72a10d2a7c8446829212ea44 () {
  const state__modaltitulo = useContext(StateContexts.state__modaltitulo)



  return (
    <Modal isOpen={state__modaltitulo.show}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Ingeniero Biomedico`}
</ModalHeader>
  <ModalBody>
  <img src={`/CertificadoIngBio.jpg`}/>
</ModalBody>
  <ModalFooter>
  <Button_d3a523dc7563ae634d891122dde4ede9/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
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

export function Modal_ec6c098441633942b2cffa451137beaa () {
  const state__modal_diplo = useContext(StateContexts.state__modal_diplo)



  return (
    <Modal isOpen={state__modal_diplo.show}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Diplo Web Full Stack`}
</ModalHeader>
  <ModalBody>
  <img src={`/CertificadoDiploWeb.jpg`}/>
</ModalBody>
  <ModalFooter>
  <Button_9cae5cbffed231960d0fecf0a3a41fa6/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
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

export function Button_88ca958af9e7185956728d4d7aa0cf55 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_d6dbe4603fbd1f13911795c669126178 = useCallback((_e) => addEvents([Event("state.modal_qaa.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_d6dbe4603fbd1f13911795c669126178}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <img alt={`Tester QA Automation`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/graduation-cap-solid.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Tester QA Automation`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`Icaro Organizacion`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export function Button_b20c052d5dae762901982972a52139e5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_021d85cea0cb5d0410a6a559cef3c699 = useCallback((_e) => addEvents([Event("state.modaltitulo.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_021d85cea0cb5d0410a6a559cef3c699}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <img alt={`Ingeniero Biomedico`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/graduation-cap-solid.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Ingeniero Biomedico`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`Universidad Nacional de Cordoba FCEFyN`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export function Button_d3a523dc7563ae634d891122dde4ede9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_021d85cea0cb5d0410a6a559cef3c699 = useCallback((_e) => addEvents([Event("state.modaltitulo.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_021d85cea0cb5d0410a6a559cef3c699}>
  {`Cerrar`}
</RadixThemesButton>
  )
}

export function Button_1087318ce6d15c47e92ff8997236fca3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_534692acb4488c609bde3de0659d561f = useCallback((_e) => addEvents([Event("state.modal_diplo.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_534692acb4488c609bde3de0659d561f}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <img alt={`Desarrollo WEB Full Stack`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/graduation-cap-solid.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Desarrollo WEB Full Stack`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`Icaro Organizacion`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export function Link_cace7a17e3c40ceded0e6b48b0f024cf () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/lautaro-rivata-38b770a1/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <img alt={`Linked In`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/linkedin.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Linked In`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`Mi experiencia en el Ámbito Laboral`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Modal_cf6b64dc270618ab128132321eea7541 () {
  const state__modal_qaa = useContext(StateContexts.state__modal_qaa)



  return (
    <Modal isOpen={state__modal_qaa.show}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Tester QAA`}
</ModalHeader>
  <ModalBody>
  <img src={`/TesterQAACertificado.jpg`}/>
</ModalBody>
  <ModalFooter>
  <Button_0936174dc7a4b483cf7cbfa0c95ac54c/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
  )
}

export function Link_90c267fae365cce28ab648009daa05f6 () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/LautaRivata/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`3`}>
  <img alt={`Github`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/github.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2"}}>
  {`Github`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#A6A6A6"}}>
  {`Conoce mis Repositorios`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
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
  {`Certificaciones`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <Button_b20c052d5dae762901982972a52139e5/>
  <Button_1087318ce6d15c47e92ff8997236fca3/>
  <Button_88ca958af9e7185956728d4d7aa0cf55/>
  <Modal_afd9a34b72a10d2a7c8446829212ea44/>
  <Modal_ec6c098441633942b2cffa451137beaa/>
  <Modal_cf6b64dc270618ab128132321eea7541/>
</RadixThemesFlex>
  <RadixThemesHeading css={{"color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500", "width": "100%", "paddingTop": "1em", "fontSize": "1.5em"}}>
  {`Links de Interes`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <Link_90c267fae365cce28ab648009daa05f6/>
  <Link_cace7a17e3c40ceded0e6b48b0f024cf/>
</RadixThemesFlex>
  <Button_a7871e61643bc796952fe9f0a617d667/>
  <RadixThemesHeading css={{"color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500", "width": "100%", "paddingTop": "1em", "fontSize": "1.5em"}}>
  {`Pricipales Herramientas`}
</RadixThemesHeading>
  <RadixThemesGrid columns={`3`} css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "justifyContent": "center", "justifyItems": "center"}} gap={`4`}>
  <RadixThemesCard css={{"rowSpan": 3, "colSpan": 1}} variant={`ghost`}>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono Python`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/python.svg`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Python`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono Django`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/Skills/Django.svg`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Django`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono Reflex`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/Skills/Reflex.png`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Reflex`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesCard>
  <RadixThemesCard css={{"rowSpan": 3, "colSpan": 1}} variant={`ghost`}>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono JS`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/js.svg`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`JavaScript`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono Node`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/node.svg`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Node.js`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono React`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/react.svg`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`React`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesCard>
  <RadixThemesCard css={{"rowSpan": 3, "colSpan": 1}} variant={`ghost`}>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono VisualStudio`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/vscode-alt.svg`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Visual Studio`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono MySQL`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/Skills/MySQL.svg`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`MySQL`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"&:hover": {"backgroundColor": "#D9525E"}}}>
  <img alt={`Icono Github`} css={{"height": "4em", "aspectRatio": "5 / 4", "alignSelf": "center"}} src={`/icons/github.svg`}/>
  <RadixThemesText as={`p`} css={{"fontFamily": "Ubuntu", "fontWeight": "500", "fontSize": "1em", "color": "#F2F2F2", "textAlign": "center"}}>
  {`Github`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesCard>
</RadixThemesGrid>
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
