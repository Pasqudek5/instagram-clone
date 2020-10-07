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
import Posts from 'containers/Posts';
import makeSelectFeedPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'feedPage';

export const Layout = styled.section`
  margin: ${({ theme }) => theme.space['1']};
  overflow-x: hidden;
  min-height: 100%;
`;

export const FeedPage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <React.Fragment>
      <Helmet>
        <title>FeedPage</title>
        <meta name="description" content="Description of FeedPage" />
      </Helmet>
      <Layout>
        <Stories />
        <Posts />
      </Layout>
    </React.Fragment>
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
