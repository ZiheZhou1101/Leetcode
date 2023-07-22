import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import Record from './Record'

const router = createHashRouter([
    {
        path: '',
        element: <Record />,
    },
])
function App() {
    return <RouterProvider router={router} />
}

export default App
