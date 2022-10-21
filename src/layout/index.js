import React from 'react';
import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import './style.scss';

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <PageHeader />
      <main className="page-content">{children}</main>
      <PageFooter />
    </div>
  );
};

export default Layout;
