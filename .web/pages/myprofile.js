/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import Script from "next/script"
import NextLink from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import NextHead from "next/head"



export function Link_41bb85c5c5d29ae924ff55304f21433d () {



  return (
    <RadixThemesLink asChild={true} css={{"fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/LautaRivata/`} passHref={true}>
  <img alt={`GitHub`} css={{"width": "1.5em", "height": "1.5em"}} src={`/icons/github.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Modal_ae231c9e3230c6d016a4b8dd8e6a182b () {
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
  <Button_6240099e2d40374e0a72cb0b8d1ba5ed/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
  )
}

export function Button_7c8c13e5e5dfa460cdb56dd9b0911b65 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_d6dbe4603fbd1f13911795c669126178 = useCallback((_e) => addEvents([Event("state.modal_qaa.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_d6dbe4603fbd1f13911795c669126178}>
  {`Cerar`}
</RadixThemesButton>
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

export function Button_6382d467ca5a761404f0341ad4acde31 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_534692acb4488c609bde3de0659d561f = useCallback((_e) => addEvents([Event("state.modal_diplo.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_534692acb4488c609bde3de0659d561f}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <img alt={`Desarrollo WEB Full Stack`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/graduation-cap-solid.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
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

export function Button_e39e338878a9a793a3a7a2c6b3d4d06b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_021d85cea0cb5d0410a6a559cef3c699 = useCallback((_e) => addEvents([Event("state.modaltitulo.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_021d85cea0cb5d0410a6a559cef3c699}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <img alt={`Ingeniero Biomedico`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/graduation-cap-solid.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
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

export function Modal_f4be1d779245e72b2abdd72305dbc3db () {
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
  <Button_7c8c13e5e5dfa460cdb56dd9b0911b65/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
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

export function Link_bac3e549ed4773cf406daf8402e24c7c () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/lautaro-rivata-38b770a1/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <img alt={`Linked In`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/linkedin.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
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

export function Button_a90f479e4623df887b1cc124676ada4f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_534692acb4488c609bde3de0659d561f = useCallback((_e) => addEvents([Event("state.modal_diplo.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_534692acb4488c609bde3de0659d561f}>
  {`Cerar`}
</RadixThemesButton>
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

export function Link_4a82984c576a9c576006503d98a34241 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "fontFamily": "Ubuntu", "fontWeight": "300", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/LautaRivata/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <img alt={`Github`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/github.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Modal_c9ae8e7176597d400849d1334886d009 () {
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
  <Button_a90f479e4623df887b1cc124676ada4f/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
  )
}

export function Button_22eff46ca33d5800bf1141d84ccb9d29 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_d6dbe4603fbd1f13911795c669126178 = useCallback((_e) => addEvents([Event("state.modal_qaa.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_d6dbe4603fbd1f13911795c669126178}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <img alt={`Tester QA Automation`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/graduation-cap-solid.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
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

export function Button_b3662fc88b49977c04764480f20da8c9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_01041feec2186d2f1866cdc3bc5e9caf = useCallback((_e) => addEvents([Event("_download", {url:`/2024 - Lautaro Rivata FullStack.pdf`,filename:`Lautaro Rivata FullStack.pdf`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_01041feec2186d2f1866cdc3bc5e9caf}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <img alt={`Ver CV`} css={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}} src={`/icons/file-regular.svg`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em"}} direction={`column`} gap={`2`}>
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

export function Button_6240099e2d40374e0a72cb0b8d1ba5ed () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_021d85cea0cb5d0410a6a559cef3c699 = useCallback((_e) => addEvents([Event("state.modaltitulo.change", {})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F2F2F2", "backgroundColor": "#212123", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#D9525E"}}} onClick={on_click_021d85cea0cb5d0410a6a559cef3c699}>
  {`Cerar`}
</RadixThemesButton>
  )
}

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
  {`Certificaciones`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <Button_e39e338878a9a793a3a7a2c6b3d4d06b/>
  <Button_6382d467ca5a761404f0341ad4acde31/>
  <Button_22eff46ca33d5800bf1141d84ccb9d29/>
  <Modal_ae231c9e3230c6d016a4b8dd8e6a182b/>
  <Modal_c9ae8e7176597d400849d1334886d009/>
  <Modal_f4be1d779245e72b2abdd72305dbc3db/>
</RadixThemesFlex>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}}>
  {`Links de Interes`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <Link_4a82984c576a9c576006503d98a34241/>
  <Link_bac3e549ed4773cf406daf8402e24c7c/>
</RadixThemesFlex>
  <Button_b3662fc88b49977c04764480f20da8c9/>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F2F2F2", "fontFamily": "Ubuntu", "fontWeight": "500"}}>
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
