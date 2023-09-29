import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{
    backgroundColor: '#343a40',
    padding: '10px 0',
    textAlign: 'center',
    fontSize: '0.875rem',
    borderTop: '1px solid #dee2e6'
  }}>
    ©2023 FRC. All rights reserved.{' '}
    <Link to="/admin" style={{ color: 'yellow', textDecoration: 'underline' }}>
      Admin Dashboard
    </Link>
  </footer>
);

export default Footer;