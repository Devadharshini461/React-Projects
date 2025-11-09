import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Comment from './Buttons/Comments.jsx'
import Like from './Buttons/Like.jsx'
import Subscribe from './Buttons/Subscribe.jsx'
import Share from './Buttons/Share.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div className='container'>
    <Comment />
    <Like />
    <Share />
    <Subscribe />
    </div>
  </StrictMode>,
)
