import React, { Fragment } from 'react';

import NavBar from './layout/NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="mx-4 sm:mx-auto mt-24 mb-6">
        {children}
      </div>
    </Fragment>
  )
}

export default Layout;
