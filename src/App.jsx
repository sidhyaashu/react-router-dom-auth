import './App.css'
import { Routes,Route, useRoutes ,Outlet} from 'react-router-dom'
import NavBar from './pages/NavBar'
import { Dashboard, Home, Login, RequireAuth, Setting } from './pages/Global'


function App() {

  const routess = useRoutes([
    {
      path:'/',
      element:<NavBar/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:'/dashboard',
          element: <RequireAuth><Dashboard/></RequireAuth>  
        },
        {
          path:'/setting',
          element:<RequireAuth><Setting/></RequireAuth>  
        },
        {
          path:'/login',
          element:<Login/>
        },
      ]
    },
    
    
  ])



  return (
    <div className='app'>
    {routess}
    </div>
  )
}

export default App


{/* <Routes>
      <Route path='/'element={<NavBar/>}>
        <Route index element={<div>Home</div>}/>
        <Route path='/dashboard' element={<div>Dashboard</div>}/>
        <Route path='/setting' element={<div>Setting</div>}/>
        <Route path='/login' element={<div>Login</div>}/>
      </Route>
</Routes> */}