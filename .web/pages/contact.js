/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, SegmentedControl as RadixThemesSegmentedControl, Text as RadixThemesText } from "@radix-ui/themes"
import Script from "next/script"
import NextLink from "next/link"
import { SquareMenuIcon as LucideSquareMenuIcon } from "lucide-react"
import { Event, isTrue } from "$/utils/state"
import { EventLoopContext } from "$/utils/context"
import NextHead from "next/head"



export function Flex_e75102c8743f4b420864da07ffca20fe () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_5ffcb9f223d2451a9d6decaa9ac4434b = useCallback(((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"]("lautarivata@gmail.com"))), ["callback"] : null }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["width"] : "100%" })} direction={"row"} onClick={on_click_5ffcb9f223d2451a9d6decaa9ac4434b} gap={"3"}>

<img css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/clipboard-check-regular.svg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["paddingRight"] : "0.5em" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2" })}>

{"Copiar Email"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"al Portapales"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  )
}

export default function Component() {
    




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

{"Contacto"}
</RadixThemesHeading>
<RadixThemesFlex>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["width"] : "100%" })} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/email.svg"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["paddingRight"] : "0.5em" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Ubuntu", ["--default-font-family"] : "Ubuntu", ["fontWeight"] : "500", ["fontSize"] : "1em", ["color"] : "#F2F2F2" })}>

{"Email"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"lautarivata@gmail.com"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
<Flex_e75102c8743f4b420864da07ffca20fe/>
</RadixThemesFlex>
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

{"ByTupak | Contactame..."}
</title>
<meta content={"Medios de Contactarte con ByTupak"} name={"description"}/>
<meta content={"https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg"} property={"og:image"}/>
<meta content={"ByTupak | Contactame..."} name={"og:title"}/>
<meta content={"Medios de Contactarte con ByTupak"} name={"og:description"}/>
<meta content={"website"} name={"og:type"}/>
<meta content={"https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg"} name={"og:image"}/>
<meta content={"summary_large_image"} name={"twitter:card"}/>
<meta content={"@tupakrivata"} name={"twitter:site"}/>
</NextHead>
</Fragment>
  )
}
