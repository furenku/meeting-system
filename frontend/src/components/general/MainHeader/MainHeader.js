import React from 'react'

import { NavLink } from "react-router-dom";

const MainHeader = () => (
    <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar">
                Calendar
              </NavLink>
            </li>
          </ul>
        </nav>
    </header>
)


export default MainHeader;