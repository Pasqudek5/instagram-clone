/**
 *
 * FeedPage
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
import makeSelectFeedPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export const FeedPage = () => {
  useInjectReducer({ key: 'feedPage', reducer });
  useInjectSaga({ key: 'feedPage', saga });

  return (
    <div>
      <Helmet>
        <title>FeedPage</title>
        <meta name="description" content="Description of FeedPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
};

FeedPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  feedPage: makeSelectFeedPage(),
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
)(FeedPage);
