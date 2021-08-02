import Sidebar from "./SidebarAdmin";

const Layout = ({children}) => {
    return(
        <div>
            <Sidebar>
                {children}
            </Sidebar>
        </div>
    )
}

export default Layout