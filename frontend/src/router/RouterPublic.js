import Contant from "../pages/frontend/Contant/Contant";
import Login from "../pages/frontend/Login/Login";
import Product from "../pages/frontend/Products";
import Register from "../pages/frontend/Register/Register";
import Home from "../pages/frontend/Home/Home";
import Category from "../pages/frontend/Categorys";
import Detail from "../pages/frontend/Detail";
import ProductDetail from "../pages/frontend/Products/ProductDetail";
const RouterPublic=[
    {path: '/', component:Home},
    {path: '/san-pham', component:Product},
    {path: '/chi-tiet-san-pham/:slug', component:ProductDetail},
    {path: '/san-pham/:page', component:Product},
    {path: '/lien-he', component:Contant},
    {path: '/dang-nhap', component:Login},
    {path: '/dang-ky', component:Register},
    {path: '/phan-loai', component:Category},
    {path: '/phan-loai/:id', component:Category},
    {path: '/chi-tiet', component:Detail}

];
export default RouterPublic;