// components 
import Sidebar from "../components/Sidebar"

const MainLayout = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <div>
            home page
        </div>
    </div>
  )
}

export default MainLayout