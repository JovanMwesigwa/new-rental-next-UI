import LeftSideBar from "./LeftSideBar";

interface Props {
    children?: any
}

const LordLayout: React.FC<Props> = ({ children }) => {
    return (
        <div >
            {/* <LeftSideBar /> */}
            <h1>Dashboard</h1>
            {children}
            {/* <LeftSideBar /> */}
        </div>
    )
}

export default LordLayout;