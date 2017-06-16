import React    from 'react';
import { Link } from 'react-router';

import '../styles/about-page.css';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        About content.
      </p>
      <p>
        <Link to="/badlink">Click to 404 page.</Link>
      </p>
    </div>
  );
};

export default AboutPage;
