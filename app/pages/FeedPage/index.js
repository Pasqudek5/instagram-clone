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
import styled from 'styled-components';
import Stories from 'containers/Stories';
import makeSelectFeedPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'feedPage';

export const Layout = styled.main`
  overflow-x: hidden;
  padding-top: 7rem;

  ${({ theme }) => theme.mq.desktop`
    padding-left: calc(350px + ${theme.spacing.lg});
    padding-right: ${theme.spacing.lg};
  `}
`;

export const FeedPage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Layout>
      <Helmet>
        <title>FeedPage</title>
        <meta name="description" content="Description of FeedPage" />
      </Helmet>
      <Stories />
    </Layout>
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
