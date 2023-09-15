import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Faq from './pages/Faq'
import SpecialistList from './pages/SpecialistList'
import TreatmentList from './pages/TreatmentList'
import Training from './pages/Training'
import Price from './pages/Price'
import TreatmentPrices from './pages/TreatmentPrices'
import BeforeAfter from './pages/BeforeAfter'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about/',
    element: <About/>
  },
  {
    path: '/contacts/',
    element: <Contacts/> 
  },
  {
    path: '/faq/',
    element: <Faq/>
  },
  {
    path: '/specialists/',
    element: <SpecialistList/>
  },
  {
    path: '/treatments/',
    children: [
      {
        index: true,
        element: <TreatmentList/> 
      },
      {
        path: ':treatmentId/',
        element: <TreatmentPrices/>
      }
    ]
  },
  {
    path: '/training/',
    element: <Training/>
  },
  {
    path: '/price/',
    element: <Price/>
  },
  {
    path: '/before-after/',
    element: <BeforeAfter/>
  },
  {
    path: '/news/',
    element: <News/>
  },
  {
    path: '/news/:id',
    element: <NewsDetail/>
  }
])


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
