import React from 'react';
import PropTypes from 'prop-types';

const Edit1 = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M0.5 12.375V15.5H3.625L12.8331 6.29185L9.70813 3.16692L0.5 12.375ZM15.2501 3.87493C15.5833 3.54169 15.5833 3.04157 15.2501 2.70833L13.2917 0.749932C12.9584 0.416689 12.4583 0.416689 12.1251 0.749932L10.5834 2.29169L13.7083 5.41661L15.2501 3.87493Z" fill="#BDBDBD" />
    </svg>
  );
};

Edit2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Edit2.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Edit1;
