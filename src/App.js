
import { memo, useEffect, useRef } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";



dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
// GlobalDebug(false,true);

const RouterComponent = memo(() => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
});

function App() {


  return (
    <div

    >
      <RouterComponent />
    </div>
  );
}

export default App;
