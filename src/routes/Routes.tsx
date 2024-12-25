import { Route } from "react-router-dom";
import { pathhConstants } from "../utils/pathConstant";
import App from "../App";
import {Layout} from "../layout";

export const router=(
    <Route path={pathhConstants.ROOT} element={<App/>}>
   <Route element={<Layout/>}>
   <Route path={pathhConstants.HOME}  index element={<h1>HOME</h1>} />
            <Route path={pathhConstants.ABOUT} errorElement={<h1>error page oops</h1>} lazy={() => import("../pages/about")} />
   <Route path={pathhConstants.CONTACT}  errorElement={<h1>error page oops</h1>} lazy={()=>import("../pages/contact")} />
   <Route path={pathhConstants.PRODUCTS}  errorElement={<h1>error page oops</h1>} lazy={()=>import("../pages/products")}  />
   <Route path={pathhConstants.PORDUCTS_DETAILS} errorElement={<h1>error page oops</h1>} lazy={()=>import("../pages/products-details")}  />
   <Route path={pathhConstants.PORDUCTS_EDIT} errorElement={<h1>error page oops</h1>} lazy={()=>import("../pages/edit")}  />
   
   </Route>
    </Route>
)