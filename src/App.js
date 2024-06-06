import React, {Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header,{Title} from "./components/Title"
import Body from "./components/Body"
import {Footer} from "./components/Footer"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Error from "./components/Error"
import Contacts from "./components/Contacts";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import InstaMart from "./components/InstaMart";
import userContext from "./utils/userContext";
import {Provider} from "react-redux";
import store from "./utils/store"
import Cart from "./components/Card";


// const InstaMart = lazy(()=>import('./components/InstaMart'));
const About = lazy(()=>import('./components/About'))

const AppLayout = ()=>{
const [user,setUser]= useState({
  name: "Namaste react",
  email: "support@namaste.com"
});

    return(
      <Provider store={store}>
         <userContext.Provider value={{
          userInfo: user,
          setUserInfo: setUser}}>
              <Header/>
              <Outlet/>
              <Footer/>
         </userContext.Provider>         
      </Provider>
    )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
     children: [
      {
        path: "/",
        element: <Body user={{
          name: "Namaste react",
          emial: "support@namaste.com"
        }}/>
      },
    {
      path: "/about",
      element: (<Suspense fallback={<Shimmer/>}><About/></Suspense>),
      children: [
        {
          path: "profile",
          element: <Profile/>
        }
      ]
    },
    {
      path: "/contact",
      element: <Contacts/>                                                                 
    },
    {
      path: "/restaurant/:id",
      element: <RestaurantMenu/>
    },
    {
      path: "/instaMart",
      element: <InstaMart/>
    },
    {
      path: "/cart",
      element: <Cart/>
    }
  ]
},
])

//render into the browser
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);

