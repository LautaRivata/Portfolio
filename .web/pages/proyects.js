/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Badge as RadixThemesBadge, Box as RadixThemesBox, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, SegmentedControl as RadixThemesSegmentedControl, Text as RadixThemesText } from "@radix-ui/themes"
import Script from "next/script"
import NextLink from "next/link"
import { SquareMenuIcon as LucideSquareMenuIcon } from "lucide-react"
import { isTrue } from "$/utils/state"
import NextHead from "next/head"



export function Flex_bc5fd6edc1f339224f64dc32398620ea () {
  





  
  return (
    <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignSelf"] : "end" })} direction={"row"} gap={"3"}>

<>{ ["Javascript", "React", "MySQL"].map((l, index_98a6bc24b3832b48) => (
  <RadixThemesBadge css={({ ["background"] : "#D93636", ["color"] : "#A6A6A6", ["borderColor"] : "#D9525E", ["borderWidth"] : 2 })} key={index_98a6bc24b3832b48} variant={"surface"}>

{l}
</RadixThemesBadge>
))}</>
</RadixThemesFlex>
  )
}

export function Flex_4142696e5a032c4aca241ff071e90f08 () {
  





  
  return (
    <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignSelf"] : "end" })} direction={"row"} gap={"3"}>

<>{ ["Python", "Django", "MySQL"].map((l, index_98a6bc24b3832b48) => (
  <RadixThemesBadge css={({ ["background"] : "#D93636", ["color"] : "#A6A6A6", ["borderColor"] : "#D9525E", ["borderWidth"] : 2 })} key={index_98a6bc24b3832b48} variant={"surface"}>

{l}
</RadixThemesBadge>
))}</>
</RadixThemesFlex>
  )
}

export function Flex_cd0748223137730d734206a80559222b () {
  





  
  return (
    <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignSelf"] : "end" })} direction={"row"} gap={"3"}>

<>{ ["Python", "Reflex"].map((l, index_98a6bc24b3832b48) => (
  <RadixThemesBadge css={({ ["background"] : "#D93636", ["color"] : "#A6A6A6", ["borderColor"] : "#D9525E", ["borderWidth"] : 2 })} key={index_98a6bc24b3832b48} variant={"surface"}>

{l}
</RadixThemesBadge>
))}</>
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

{"Proyectos Principales"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["alignItems"] : "start", ["borderRadius"] : "1em", ["backgroundColor"] : "#212123", ["paddingInlineStart"] : "0.5em", ["paddingInlineEnd"] : "0.5em", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"lenguaje Icon"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/python.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.5em", ["fontWeight"] : "500", ["color"] : "#F2F2F2" })}>

{"Trazabilidad Para Central Esterilizacion"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"El objetivo del proyecto es llevar el registro de los productos medicos\n                que sean procezados en una central de esterilizacion.\n                Se registran todas las acciones y protocolos que se apliquen a dichos productos y\n                los operarios responsables de ejecutalas.           \n                "}
</RadixThemesText>
<img alt={"Imagen de Home del Proyecto Esterimed"} css={({ ["height"] : "15em", ["aspectRatio"] : "16 / 9", ["alignSelf"] : "center" })} src={"/ProyectEsterimed/HomeEditado.png"}/>
<Flex_4142696e5a032c4aca241ff071e90f08/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["alignItems"] : "start", ["borderRadius"] : "1em", ["backgroundColor"] : "#212123", ["paddingInlineStart"] : "0.5em", ["paddingInlineEnd"] : "0.5em", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"lenguaje Icon"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/js.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.5em", ["fontWeight"] : "500", ["color"] : "#F2F2F2" })}>

{"Ecommerce"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"Proyecto Final Diplomatura, una version lite de una pagina web para comercio de mecaderia.\n                Distingue entre usuarios adiministradores y clientes permitiendo distintas funciones segun el tipo establecido\n                Cuenta con una base de Datos para Usuarios, Productos y Ordenes de Compras.            \n                "}
</RadixThemesText>
<img alt={"Imagen de Home del Proyecto Ecomerse"} css={({ ["height"] : "15em", ["aspectRatio"] : "16 / 9", ["alignSelf"] : "center" })} src={"/ProyectEcomerse/Index.jpg"}/>
<Flex_bc5fd6edc1f339224f64dc32398620ea/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["alignItems"] : "start", ["borderRadius"] : "1em", ["backgroundColor"] : "#212123", ["paddingInlineStart"] : "0.5em", ["paddingInlineEnd"] : "0.5em", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img alt={"lenguaje Icon"} css={({ ["width"] : "1.5em", ["height"] : "1.5em", ["margin"] : "0.8em" })} src={"/icons/python.svg"}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.5em", ["fontWeight"] : "500", ["color"] : "#F2F2F2" })}>

{"Links Page"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "300", ["fontSize"] : "0.8em", ["color"] : "#A6A6A6" })}>

{"Pagina de links de Interes para visualizacion de Perfiles,\n                utilizada como base para la creacion de este Portfolio\n                "}
</RadixThemesText>
<img alt={"Imagen de Home del Proyecto Links"} css={({ ["height"] : "15em", ["aspectRatio"] : "16 / 9", ["alignSelf"] : "center" })} src={"/ProyectLinks/Home.png"}/>
<Flex_cd0748223137730d734206a80559222b/>
</RadixThemesFlex>
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

{"ByTupak | Proyectos principales"}
</title>
<meta content={"Listado de mis proyectos principales"} name={"description"}/>
<meta content={"https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg"} property={"og:image"}/>
<meta content={"ByTupak | Proyectos principales"} name={"og:title"}/>
<meta content={"Listado de mis proyectos principales"} name={"og:description"}/>
<meta content={"website"} name={"og:type"}/>
<meta content={"https://bytupakportfolio.reflex.run/PrewiewPortfolio.jpg"} name={"og:image"}/>
<meta content={"summary_large_image"} name={"twitter:card"}/>
<meta content={"@tupakrivata"} name={"twitter:site"}/>
</NextHead>
</Fragment>
  )
}
