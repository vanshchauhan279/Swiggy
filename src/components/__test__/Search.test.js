// import "@testing-library/jest-dom";
import Body from "../Body"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../Mocks/data"
import Shimmer from "../Shimmer"

global.fetch = jest.fn(()=>{
   return Promise.resolve({
        json: ()=>{
            Promise.resolve(RESTAURANT_DATA)
        }
    })
})

test("Shimmer should load on Home page",()=>{
    const shimmer =  render(
    <StaticRouter> 
    <Provider store={store}>
        <Shimmer/>
    </Provider>     
    </StaticRouter> );

  const getShimmer = shimmer.getByTestId("shimmer");
 
  expect(getShimmer.children.length).toBe(10)

})