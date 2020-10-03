/**
 *
 * Portal
 *
 */

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children }) => {
  const mount = document.getElementById('portal');
  const el = document.createElement('div');

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portal;
