import React from 'react';
import './style.scss';

function PageFooter() {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">© {new Date().getFullYear()} Team Ephod</p>
    </footer>
  );
}

export default PageFooter;
