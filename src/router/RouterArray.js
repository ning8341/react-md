import Home from '../componets/Home';
import News from '../componets/News';
import News_detail from '../componets/News_detail';
import Goods from '../componets/Goods';
import Info1 from '../componets/goods/Info1';
import Info2 from '../componets/goods/Info2';
/**
 * 统一路由管理封装
 */
let router=[
    {
        exact:true,
        path:'/',
        componet:Home
    },
    {
        exact:false,
        path:'/about',
        componet:News
    },
    {
        exact:false,
        path:'/newsdetail',
        componet:News_detail
        
    },
    {
        exact:false,
        path:'/goods',
        componet:Goods,
        routes: [
                {
                    exact:true,
                    path:'/goods/info1',
                    componet:Info1
                },
                {
                    exact:false,
                    path:'/goods/info2',
                    componet:Info2
                }
        ]
    }

]
export default router;