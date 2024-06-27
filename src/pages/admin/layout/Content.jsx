import Book from "../manager/Book";
import { Uicontext } from "../hooks/TabContext";
import { useContext } from "react";
const Content = () => {
    const { tab } = useContext(Uicontext)
    return (
        <div className="bg-slate-200 px-5 pt-5">

            {tab === 1 && (<Book />)}

        </div>
    );
};

export default Content;