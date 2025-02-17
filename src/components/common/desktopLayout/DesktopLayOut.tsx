
import { Outlet } from 'react-router-dom'
import DestopFooter from '../../static/DestopFooter'
import RightSidebar from '../../static/RightSidebar'
import LeftSidebar from '../../static/LeftSidebar'

const DesktopLayOut = () => {
    return (
        <div
            style={{
            display: "flex",
                width: "100%",
            flexDirection: "column"
        }}
        >
            <div style={{
                display: "flex",
                width: "100%"
            }}>
                <LeftSidebar />
                <Outlet />
                <RightSidebar />
            </div>
            <DestopFooter />
        </div>
    )
}

export default DesktopLayOut