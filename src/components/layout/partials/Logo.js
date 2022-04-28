import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <img
            style={{filter:'highlighting(16000%)'}}
            src={require('../../../assets/images/logo.png')}
            alt="Open"
            width={80}
            height={80} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;