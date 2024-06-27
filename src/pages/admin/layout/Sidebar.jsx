import { FaBookOpen } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { useContext } from "react";
import { Uicontext } from "../hooks/TabContext";
const Sidebar = () => {
    const {handleTabUi , tab} = useContext(Uicontext)
    return (
        <>
            <div className="p-3 shadow h-dvh">
            <div className="border-b-2">
                <span className="text-[30px]">Thư Viện Sách</span>
            </div>
                <div className={`flex p-2 gap-2 items-center hover:bg-blue-300 duration-300 cursor-pointer rounded-[5px] my-2 ${tab === 1? ' bg-blue-300' : ''}`} onClick={()=>handleTabUi(1)}>
                    <FaBookOpen className={`text-[20px] ${tab === 1? 'text-[#fff]' : ''}`} />
                    <span className={`text-[20px] ${tab === 1? 'text-[#fff]' : ''}`}>Sách</span>
                </div>

                <div className="flex p-2 gap-2 items-center hover:bg-blue-300 duration-300 cursor-pointer rounded-[5px]">
                    <CgLogOut className="text-[20px]" />
                    <span>Đăng xuất</span>
                </div>
            </div>
        </>
    );
};

export default Sidebar;