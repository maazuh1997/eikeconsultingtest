import { Result } from "antd";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomeLayout,} from "./PublicRoutes";

import {
  Test,
} from "../screens/CommonScreens";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Test />} />
      </Route>
     
      <Route
        path="*"
        element={
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
          />
        }
      />
    </>
  )
);
