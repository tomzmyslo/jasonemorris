import React from 'react';
import PropTypes from 'prop-types';

function Rule({container, light}) {
  const hasContainer = container ? 'container' : '';
  const isLight = light ? 'text-light' : '';
  return(
    <div className={hasContainer}>
      <hr className={isLight} />
    </div>
  );
}

Rule.defaultProps = {
  container: false,
  light: false
};

Rule.propTypes = {
  container: PropTypes.bool,
  light: PropTypes.bool
};

export default Rule;
