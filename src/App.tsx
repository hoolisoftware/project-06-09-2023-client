import { API_URL } from '@/config'
import axios from 'axios'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'

import { setConfig } from '@/features/data/dataReducer'
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
import Book from './pages/Book'
import Test from '@/pages/Test'


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
    path: '/training/',
    element: <Training/>
  },
  {
    path: '/news/',
    element: <News/>
  },
  {
    path: '/news/:id/',
    element: <NewsDetail/>
  },
  {
    path: '/book/',
    element: <Book/>
  },
  {
    path: '/test/',
    element: <Test/>
  }
])


function App() {
  const dispatch = useDispatch()
  useQuery('config', {
    queryFn: async () => {
      const {data} = await axios.get(`${API_URL}clinic/config/`)
      dispatch(setConfig(data))
      return data
    }
  })

  return (
    <RouterProvider router={router}/>
  )
}

export default App
