import paths from "./path";
import Home from "../pages/Home";
import BookNew from "../pages/BookNew";
import RegisterMember from "../pages/RegisterMember";
import MainAdmin from "../pages/admin/MainAdmin";
const allRouter = [
    {
        path:paths.Home,
        component:Home
    },
    {
        path:paths.BookNew,
        component:BookNew
    },
    {
        path:paths.RegisterMember,
        component:RegisterMember
    },
    {
        path:paths.Admin,
        component:MainAdmin
    }
]
export default allRouter;