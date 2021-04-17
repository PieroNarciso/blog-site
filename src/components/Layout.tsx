import React, { Fragment } from 'react';

import NavBar from './layout/NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div>
        {children}
      </div>
    </Fragment>
  )
}

export default Layout;
