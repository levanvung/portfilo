import { Outlet, useLocation } from "react-router-dom";
import AppHeader from "./components/layout/app.header";
import AppFooter from "./components/layout/app.footer";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './styles/transition.css';

function Layout() {
  const location = useLocation();

  return (
    <div>
      <AppHeader />
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="page"
          timeout={100}
        >

          <div className="page-wrapper">
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <AppFooter />
    </div>
  );
}

export default Layout;
