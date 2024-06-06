import { Provider } from "react-redux";
import Header from "../Title";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"


test("logo should be load on rendering header",()=>{
   const header= render(
    <StaticRouter>
      <Provider store={store}>
        <Header/>
      </Provider>
    </StaticRouter>
    );
  
   const logo = header.getAllByTestId("logo"); 

   expect(logo[0].src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0qhlm0pFwyDcjgb4QIzyP9iPgdWx8WHRVQ&s");
});


test("logo should be load on rendering header",()=>{
    const header= render(
     <StaticRouter>
       <Provider store={store}>
         <Header/>
       </Provider>
     </StaticRouter>
     );
 
    const isOnline = header.getAllByTestId("isOnline"); 

    expect(isOnline[0].innerHTML).toBe("you are online");  
 });


 test("cart should have 0 items on rendering header",()=>{
    const header= render(
     <StaticRouter>
       <Provider store={store}>
         <Header/>
       </Provider>
     </StaticRouter>
     );
 
    const cart = header.getByTestId("cart"); 

    expect(cart.innerHTML).toBe("Cart 0");  
 });