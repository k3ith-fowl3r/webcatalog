import React from 'react';
import PropTypes from 'prop-types';

import indigo from 'material-ui/colors/indigo';

import connectComponent from '../../helpers/connect-component';

const titleBarHeight = window.platform === 'darwin' ? 22 : 0;

const styles = {
  root: {
    backgroundColor: indigo[700],
    height: titleBarHeight,
    WebkitAppRegion: 'drag',
    WebkitUserSelect: 'none',
  },
};

const FakeTitleBar = (props) => {
  const {
    classes,
    color,
  } = props;

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: color }}
    />
  );
};

FakeTitleBar.defaultProps = {
  color: indigo[700],
};

FakeTitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default connectComponent(
  FakeTitleBar,
  null,
  null,
  styles,
);
