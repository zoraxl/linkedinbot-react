import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ClerkProvider publishableKey="<key here>">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
)
