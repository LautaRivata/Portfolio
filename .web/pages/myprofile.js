/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { AlertDialog as RadixThemesAlertDialog, Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Inset as RadixThemesInset, Link as RadixThemesLink, SegmentedControl as RadixThemesSegmentedControl, Text as RadixThemesText } from "@radix-ui/themes"
import Script from "next/script"
import NextLink from "next/link"
import { SquareMenuIcon as LucideSquareMenuIcon } from "lucide-react"
import { Event, isTrue } from "$/utils/state"
import { EventLoopContext } from "$/utils/context"
import NextHead from "next/head"



export function Button_77a378a511fa35d5f38cd4ae07d0ba7b () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_06a9d097e796f9789c7bfdbf821c69ba = useCallback(((...args) => (addEvents([(Event("_download", ({ ["url"] : "/2025 - Rivata Lautaro ing Biomedico.pdf", ["filename"] : "Lautaro Rivata FullStack.pdf" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })} onClick={on_click_06a9d097e796f9789c7bfdbf821c69ba}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<img alt={"Ver CV"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/file-regular.svg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["paddingRight"] : "0.5em" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2" })}>

{"Ver CV"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"Aqu\u00ed puedes descargar mi Curriculum Vitae"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export default function Component() {
    
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

<RadixThemesBox>

<Script strategy={"afterInteractive"}>

{"document.documentElement.lang='es'"}
</Script>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["position"] : "sticky", ["alignItems"] : "center", ["background"] : "#212123", ["paddingInlineStart"] : "2em", ["paddingInlineEnd"] : "2em", ["paddingTop"] : "1em", ["paddingBottom"] : "1em", ["zIndex"] : "999", ["top"] : "0" })} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesBox css={({ ["fontFamily"] : "Montserrat", ["--default-font-family"] : "Montserrat", ["fontWeight"] : "500", ["fontSize"] : "1.5em" })}>

<RadixThemesText as={"span"} css={({ ["color"] : "#D93636" })}>

{"By"}
</RadixThemesText>
<RadixThemesText as={"span"} css={({ ["color"] : "#D9525E" })}>

{"Tupak"}
</RadixThemesText>
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesDropdownMenu.Root>

<RadixThemesDropdownMenu.Trigger>

<LucideSquareMenuIcon css={({ ["color"] : "#D93636" })} size={25}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<RadixThemesDropdownMenu.Item css={({ ["color"] : "#D93636", ["fontFamily"] : "Montserrat", ["--default-font-family"] : "Montserrat", ["fontWeight"] : "500", ["fontSize"] : "1em", ["backgroundColor"] : "#212123", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "none" }) })}>

<NextLink href={"/myprofile"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["padding"] : "0px !important" })} direction={"row"} gap={"3"}>

<Fragment>

{true ? (
  <Fragment>

<img alt={"Link Icon"} css={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "0px !important" })} src={"/icons/user-regular.svg"}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"} css={({ ["color"] : "#F2F2F2" })}>

{"My Perfil"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item css={({ ["color"] : "#D93636", ["fontFamily"] : "Montserrat", ["--default-font-family"] : "Montserrat", ["fontWeight"] : "500", ["fontSize"] : "1em", ["backgroundColor"] : "#212123", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "none" }) })}>

<NextLink href={"/proyects"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["padding"] : "0px !important" })} direction={"row"} gap={"3"}>

<Fragment>

{true ? (
  <Fragment>

<img alt={"Link Icon"} css={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "0px !important" })} src={"/icons/code.svg"}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"} css={({ ["color"] : "#F2F2F2" })}>

{"Proyectos"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item css={({ ["color"] : "#D93636", ["fontFamily"] : "Montserrat", ["--default-font-family"] : "Montserrat", ["fontWeight"] : "500", ["fontSize"] : "1em", ["backgroundColor"] : "#212123", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "none" }) })}>

<NextLink href={"/contact"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["padding"] : "0px !important" })} direction={"row"} gap={"3"}>

<Fragment>

{true ? (
  <Fragment>

<img alt={"Link Icon"} css={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "0px !important" })} src={"/icons/email.svg"}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"} css={({ ["color"] : "#F2F2F2" })}>

{"Contacto"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesSegmentedControl.Root css={({ ["background"] : "#212123" })} size={"3"}>

<RadixThemesSegmentedControl.Item value={"/myprofile"}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Montserrat", ["--default-font-family"] : "Montserrat", ["fontWeight"] : "500", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "none" }), ["color"] : "#F2F2F2", ["fontSize"] : "1em" })}>

<NextLink href={"/myprofile"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["padding"] : "0px !important" })} direction={"row"} gap={"3"}>

<Fragment>

{true ? (
  <Fragment>

<img alt={"Link Icon"} css={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "0px !important" })} src={"/icons/user-regular.svg"}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"} css={({ ["color"] : "#F2F2F2" })}>

{"Mi Perfil"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesSegmentedControl.Item>
<RadixThemesSegmentedControl.Item value={"/proyects"}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Montserrat", ["--default-font-family"] : "Montserrat", ["fontWeight"] : "500", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "none" }), ["color"] : "#F2F2F2", ["fontSize"] : "1em" })}>

<NextLink href={"/proyects"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["padding"] : "0px !important" })} direction={"row"} gap={"3"}>

<Fragment>

{true ? (
  <Fragment>

<img alt={"Link Icon"} css={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "0px !important" })} src={"/icons/code.svg"}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"} css={({ ["color"] : "#F2F2F2" })}>

{"Proyectos"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesSegmentedControl.Item>
<RadixThemesSegmentedControl.Item value={"/contact"}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Montserrat", ["--default-font-family"] : "Montserrat", ["fontWeight"] : "500", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "none" }), ["color"] : "#F2F2F2", ["fontSize"] : "1em" })}>

<NextLink href={"/contact"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["padding"] : "0px !important" })} direction={"row"} gap={"3"}>

<Fragment>

{true ? (
  <Fragment>

<img alt={"Link Icon"} css={({ ["width"] : "1em", ["height"] : "1em", ["margin"] : "0px !important" })} src={"/icons/email.svg"}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"} css={({ ["color"] : "#F2F2F2" })}>

{"Contacto"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesSegmentedControl.Item>
</RadixThemesSegmentedControl.Root>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "700px", ["width"] : "100%", ["marginTop"] : "0px !important", ["marginBottom"] : "0px !important", ["padding"] : "2em" })} direction={"column"} gap={"4"}>

<RadixThemesBox css={({ ["width"] : "100%", ["spacing"] : "5", ["alignItems"] : "start" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"5"}>

<RadixThemesAvatar css={({ ["name"] : "By Tupak", ["color"] : "#A6A6A6", ["background"] : "#212123", ["padding"] : "2px", ["border"] : "4px", ["borderColor"] : "#D93636" })} radius={"large"} size={"8"} src={"/me.jpg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["color"] : "#F2F2F2", ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["padding"] : "0px !important", ["margin"] : "0px !important" })} size={"8"}>

{"Lautaro Rivata"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Montserrat", ["--default-font-family"] : "Montserrat", ["fontWeight"] : "500", ["fontSize"] : "1.5em" })}>

<RadixThemesText as={"span"} css={({ ["color"] : "#D93636" })}>

{"@By"}
</RadixThemesText>
<RadixThemesText as={"span"} css={({ ["color"] : "#D9525E" })}>

{"Tupak"}
</RadixThemesText>
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"7"}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/LautaRivata/"} passHref={true}>

<img alt={"GitHub"} css={({ ["width"] : "1.25em", ["height"] : "1.25em" })} src={"/icons/github.svg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/lautaro-rivata-38b770a1/"} passHref={true}>

<img alt={"LinkedIn"} css={({ ["width"] : "1.25em", ["height"] : "1.25em" })} src={"/icons/linkedin.svg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"mailto:lautarivata@gmail.com"} passHref={true}>

<img alt={"LinkedIn"} css={({ ["width"] : "1.25em", ["height"] : "1.25em" })} src={"/icons/email.svg"}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesHeading css={({ ["color"] : "#F2F2F2", ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["width"] : "100%", ["paddingTop"] : "1em", ["fontSize"] : "1.5em" })}>

{"Certificaciones"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesAlertDialog.Root>

<RadixThemesAlertDialog.Trigger css={({ ["width"] : "100%" })}>

<RadixThemesFlex>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.portfolio___views___certificaciones____modal_qaa.change", ({  }), ({  })))], args, ({  }))))}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<img alt={"Ingeniero Biomedico"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/graduation-cap-solid.svg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["paddingRight"] : "0.5em" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2" })}>

{"Ingeniero Biomedico"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"Universidad Nacional de Cordoba FCEFyN"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesAlertDialog.Trigger>
<RadixThemesAlertDialog.Content>

<RadixThemesAlertDialog.Title>

{"Ingeniero Biomedico"}
</RadixThemesAlertDialog.Title>
<RadixThemesInset>

<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>

<img css={({ ["objectFit"] : "contain" })} src={"/CertificadoIngBio.jpg"}/>
</RadixThemesContainer>
</RadixThemesInset>
<RadixThemesAlertDialog.Cancel>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

{"Cerrar"}
</RadixThemesButton>
</RadixThemesAlertDialog.Cancel>
</RadixThemesAlertDialog.Content>
</RadixThemesAlertDialog.Root>
<RadixThemesAlertDialog.Root>

<RadixThemesAlertDialog.Trigger css={({ ["width"] : "100%" })}>

<RadixThemesFlex>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.portfolio___views___certificaciones____modal_qaa.change", ({  }), ({  })))], args, ({  }))))}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<img alt={"Desarrollo WEB Full Stack"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/graduation-cap-solid.svg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["paddingRight"] : "0.5em" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2" })}>

{"Desarrollo WEB Full Stack"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"Icaro Organizacion"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesAlertDialog.Trigger>
<RadixThemesAlertDialog.Content>

<RadixThemesAlertDialog.Title>

{"Diplo Web Full Stack"}
</RadixThemesAlertDialog.Title>
<RadixThemesInset>

<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>

<img css={({ ["objectFit"] : "contain" })} src={"/CertificadoDiploWeb.jpg"}/>
</RadixThemesContainer>
</RadixThemesInset>
<RadixThemesAlertDialog.Cancel>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

{"Cerrar"}
</RadixThemesButton>
</RadixThemesAlertDialog.Cancel>
</RadixThemesAlertDialog.Content>
</RadixThemesAlertDialog.Root>
<RadixThemesAlertDialog.Root>

<RadixThemesAlertDialog.Trigger css={({ ["width"] : "100%" })}>

<RadixThemesFlex>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.portfolio___views___certificaciones____modal_qaa.change", ({  }), ({  })))], args, ({  }))))}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<img alt={"Tester QA Automation"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/graduation-cap-solid.svg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["paddingRight"] : "0.5em" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2" })}>

{"Tester QA Automation"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"Icaro Organizacion"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesAlertDialog.Trigger>
<RadixThemesAlertDialog.Content>

<RadixThemesAlertDialog.Title>

{"Tester QAA"}
</RadixThemesAlertDialog.Title>
<RadixThemesInset>

<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>

<img css={({ ["objectFit"] : "contain" })} src={"/TesterQAACertificado.jpg"}/>
</RadixThemesContainer>
</RadixThemesInset>
<RadixThemesAlertDialog.Cancel>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

{"Cerrar"}
</RadixThemesButton>
</RadixThemesAlertDialog.Cancel>
</RadixThemesAlertDialog.Content>
</RadixThemesAlertDialog.Root>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["color"] : "#F2F2F2", ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["width"] : "100%", ["paddingTop"] : "1em", ["fontSize"] : "1.5em" })}>

{"Links de Interes"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/LautaRivata/"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<img alt={"Github"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/github.svg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["paddingRight"] : "0.5em" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2" })}>

{"Github"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"Conoce mis Repositorios"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["width"] : "100%" })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/lautaro-rivata-38b770a1/"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["whiteSpace"] : "normal", ["textAlign"] : "start", ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<img alt={"Linked In"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/linkedin.svg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["paddingRight"] : "0.5em" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2" })}>

{"Linked In"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"Mi experiencia en el \u00c1mbito Laboral"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<Button_77a378a511fa35d5f38cd4ae07d0ba7b/>
<RadixThemesHeading css={({ ["color"] : "#F2F2F2", ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["width"] : "100%", ["paddingTop"] : "1em", ["fontSize"] : "1.5em" })}>

{"Pricipales Herramientas"}
</RadixThemesHeading>
<RadixThemesGrid columns={"3"} css={({ ["width"] : "100%", ["height"] : "100%", ["padding"] : "0.5em", ["borderRadius"] : "1em", ["color"] : "#F2F2F2", ["backgroundColor"] : "#212123", ["justifyContent"] : "center", ["justifyItems"] : "center" })} gap={"4"}>

<RadixThemesCard css={({ ["rowSpan"] : 3, ["colSpan"] : 1 })} variant={"ghost"}>

<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono Python"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/python.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"Python"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono Django"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/Skills/Django.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"Django"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono Reflex"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/Skills/Reflex.png"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"Reflex"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesCard>
<RadixThemesCard css={({ ["rowSpan"] : 3, ["colSpan"] : 1 })} variant={"ghost"}>

<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono JS"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/js.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"JavaScript"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono Node"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/node.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"Node.js"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono React"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/react.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"React"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesCard>
<RadixThemesCard css={({ ["rowSpan"] : 3, ["colSpan"] : 1 })} variant={"ghost"}>

<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono VisualStudio"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/vscode-alt.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"Visual Studio"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono MySQL"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/Skills/MySQL.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"MySQL"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["&:hover"] : ({ ["backgroundColor"] : "#D9525E" }) })}>

<img alt={"Icono Github"} css={({ ["height"] : "4em", ["aspectRatio"] : "5 / 4", ["alignSelf"] : "center" })} src={"/icons/github.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2", ["textAlign"] : "center" })}>

{"Github"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesCard>
</RadixThemesGrid>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["color"] : "#737373", ["background"] : "#212123", ["paddingInlineStart"] : "2em", ["paddingInlineEnd"] : "2em", ["paddingTop"] : "1em", ["paddingBottom"] : "1em", ["zIndex"] : "999" })} direction={"row"} gap={"5"}>

<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }), ["fontSize"] : "0.6em", ["color"] : "#D93636", ["textAlign"] : "center" })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesBox>

{"\u00a92025 "}
<RadixThemesText as={"span"} css={({ ["color"] : "#D93636" })}>

{"ByTupak de Lautaro Rivata"}
</RadixThemesText>
{"  V1"}
</RadixThemesBox>
</NextLink>
</RadixThemesLink>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"5"}>

<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/LautaRivata/"} passHref={true}>

<img alt={"GitHub"} css={({ ["width"] : "1em", ["height"] : "1em" })} src={"/icons/github.svg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/lautaro-rivata-38b770a1/"} passHref={true}>

<img alt={"LinkedIn"} css={({ ["width"] : "1em", ["height"] : "1em" })} src={"/icons/linkedin.svg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "300", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"mailto:lautarivata@gmail.com"} passHref={true}>

<img alt={"LinkedIn"} css={({ ["width"] : "1em", ["height"] : "1em" })} src={"/icons/email.svg"}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"ByTupak | Mi Perfil"}
</title>
<meta content={"Mis Habilidades y Experiencia"} name={"description"}/>
<meta content={"https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg"} property={"og:image"}/>
<meta content={"ByTupak | Mi Perfil"} name={"og:title"}/>
<meta content={"Mis Habilidades y Experiencia"} name={"og:description"}/>
<meta content={"website"} name={"og:type"}/>
<meta content={"https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg"} name={"og:image"}/>
<meta content={"summary_large_image"} name={"twitter:card"}/>
<meta content={"@tupakrivata"} name={"twitter:site"}/>
</NextHead>
</Fragment>
  )
}
