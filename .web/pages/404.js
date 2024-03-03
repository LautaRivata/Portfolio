/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_a49f8297e8ea702c7d3f0a0a483efda9 } from "/utils/stateful_components"
import { isTrue } from "/utils/state"
import Error from "next/error"
import { useClientSideRouting } from "/utils/client_side_routing"
import NextHead from "next/head"



export default function Component() {
  const routeNotFound = useClientSideRouting()

  return (
    <Fragment>
  <Fragment_a49f8297e8ea702c7d3f0a0a483efda9/>
  <Fragment>
  {isTrue(routeNotFound) ? (
  <Fragment>
  <Error statusCode={404}/>
</Fragment>
) : (
  <Fragment>
  
</Fragment>
)}
</Fragment>
  <NextHead>
  <title>
  {`404 - Not Found`}
</title>
  <meta content={`The page was not found`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
