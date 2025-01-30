import { NavLink, Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
        <ul> 
        <NavLink  style={{
            "marginRight": "20px"
        }} to={'/'}>home</NavLink>
        <NavLink to={'/login'}>login</NavLink>
        </ul>
        <Outlet></Outlet>

    </div>
  )
}

export default MainLayout