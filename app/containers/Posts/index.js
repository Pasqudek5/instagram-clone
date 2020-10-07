/**
 *
 * Posts
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPosts from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export const Posts = () => {
  useInjectReducer({ key: 'posts', reducer });
  useInjectSaga({ key: 'posts', saga });

  return (
    <div>
      <Helmet>
        <title>Posts</title>
        <meta name="description" content="Description of Posts" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
};

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Posts);
