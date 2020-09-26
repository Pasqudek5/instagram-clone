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

import Navigation from 'components/Navigation';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import makeSelectFeedPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'feedPage';

const StyledWrapper = styled.div`
  background-color: red;
  height: 100vh;
`;

export const FeedPage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <StyledWrapper>
      <Helmet>
        <title>FeedPage</title>
        <meta name="description" content="Description of FeedPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Navigation />
    </StyledWrapper>
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
