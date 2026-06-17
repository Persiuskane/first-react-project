// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from "react-dom/client";

createRoot(document.querySelector("#root")).render(
  <div>
    <h2>hello</h2>
    <ul>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
    </ul>
  </div>,
);
