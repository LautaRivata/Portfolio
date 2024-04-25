import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.modal_qaa": {"show": false}, "state.modal_diplo": {"show": false}, "state.state": {}, "state.modaltitulo": {"show": false}, "state.on_load_internal_state": {}, "state.update_vars_internal_state": {}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__modal_qaa: createContext(null),
  state__modal_diplo: createContext(null),
  state__state: createContext(null),
  state__modaltitulo: createContext(null),
  state__on_load_internal_state: createContext(null),
  state__update_vars_internal_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const state_name = "state"

// Theses events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'state.update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('state.on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__modal_qaa, dispatch_state__modal_qaa] = useReducer(applyDelta, initialState["state.modal_qaa"])
  const [state__modal_diplo, dispatch_state__modal_diplo] = useReducer(applyDelta, initialState["state.modal_diplo"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const [state__modaltitulo, dispatch_state__modaltitulo] = useReducer(applyDelta, initialState["state.modaltitulo"])
  const [state__on_load_internal_state, dispatch_state__on_load_internal_state] = useReducer(applyDelta, initialState["state.on_load_internal_state"])
  const [state__update_vars_internal_state, dispatch_state__update_vars_internal_state] = useReducer(applyDelta, initialState["state.update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.modal_qaa": dispatch_state__modal_qaa,
      "state.modal_diplo": dispatch_state__modal_diplo,
      "state.state": dispatch_state__state,
      "state.modaltitulo": dispatch_state__modaltitulo,
      "state.on_load_internal_state": dispatch_state__on_load_internal_state,
      "state.update_vars_internal_state": dispatch_state__update_vars_internal_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__modal_qaa.Provider value={ state__modal_qaa }>
    <StateContexts.state__modal_diplo.Provider value={ state__modal_diplo }>
    <StateContexts.state__state.Provider value={ state__state }>
    <StateContexts.state__modaltitulo.Provider value={ state__modaltitulo }>
    <StateContexts.state__on_load_internal_state.Provider value={ state__on_load_internal_state }>
    <StateContexts.state__update_vars_internal_state.Provider value={ state__update_vars_internal_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__update_vars_internal_state.Provider>
    </StateContexts.state__on_load_internal_state.Provider>
    </StateContexts.state__modaltitulo.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state__modal_diplo.Provider>
    </StateContexts.state__modal_qaa.Provider>
    </StateContexts.state.Provider>
  )
}