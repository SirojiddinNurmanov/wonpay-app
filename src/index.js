import React from "react"
import ReactDOM from "react-dom/client"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { APIContextProvider } from "./context"

import App from "./apps"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <APIContextProvider>
        <App />
    </APIContextProvider>
)
