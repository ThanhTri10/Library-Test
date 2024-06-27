import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";
const MainAdmin = () => {
    return (
        <div className="flex">
            <div className="w-[20%] ">
                <Sidebar />
            </div>
            <div className="w-[80%]">
                <Content />
            </div>
        </div>
    );
};

export default MainAdmin;