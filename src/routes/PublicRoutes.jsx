
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./layoutstyle.module.css";


export const HomeLayout = () => {
 
  return (
    <div className={styles.publiclayoutContainer}>
      <Outlet />
    </div>
  );
};

export const RolesLayout = ({ roles }) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
