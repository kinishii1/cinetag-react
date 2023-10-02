import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './components/GlobalStyles/index.tsx'
import AppRoutes from './AppRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>,
)
