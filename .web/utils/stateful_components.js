/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"




export function Fragment_a49f8297e8ea702c7d3f0a0a483efda9 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text sx={{"fontFamily": "Ubuntu", "fontWeight": "300"}}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}
