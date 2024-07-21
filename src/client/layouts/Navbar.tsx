import { Outlet } from "react-router"


const Navbar = () => {
    return (
        <>
            <div className="bg-blue-400 w-full"
            >Navbar</div>
            <Outlet />
        </>


    )
}

export default Navbar