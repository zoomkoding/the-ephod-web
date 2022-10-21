import { Link } from 'gatsby';
import React from 'react';
import Image from '../image';
import './style.scss';

function PageHeader() {
  return (
    <header className="page-header-wrapper">
      <div className="page-header">
        <div className="front-section">
          <Link className="link" to="/">
            <Image style={{ width: 25, height: 25 }} src="app_icon.png" alt="thumbnail" />
            <div className="title">the Ephod</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
