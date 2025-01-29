import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import img from './hospital.jpg'
import img1 from './bhagavatiMata.jpg'
import img2 from './bhagwati-mata-temple.avif'
import img3 from './school.jpg'
import img4 from './sampada-img.jpg'
import img5 from './balgopal-acadmey.jpg'
import img6 from './sweet-shop.jpg'
import img7 from './cloth-shop.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App  img={img}  img1={img1}  img2={img2}  img3={img3}  img4={img4}  img5={img5}  img6={img6} img7={img7}/>  
    
  </StrictMode>,

)

