/**
 *
 * Stories
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import useMediaQuery from 'hooks/useMediaQuery';
import Typography from 'components/Typography';
import Story from 'components/Story';
import makeSelectStories from './selectors';
import reducer from './reducer';
import saga from './saga';
const key = 'stories';

const StoriesWrapper = styled.section``;
const StoriesHeader = styled.header``;

const StoriesContent = styled.div`
  display: inline-flex;
`;

export const Stories = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const __STORIES__ = Array(24).fill(1);

  const hideHeaderOnMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <StoriesWrapper>
      {hideHeaderOnMobile ? null : (
        <StoriesHeader>
          <Typography variant="h2">Stories</Typography>
        </StoriesHeader>
      )}
      <StoriesContent>
        {__STORIES__.map((_, i) => (
          <Story
            key={i}
            username="pasqudek"
            avatar="https://picsum.photos/200"
            viewed={Math.random() > 0.3}
          />
        ))}
      </StoriesContent>
    </StoriesWrapper>
  );
};

Stories.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stories: makeSelectStories(),
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
)(Stories);
