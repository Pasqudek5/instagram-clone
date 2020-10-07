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

import ScrollContainer from 'react-indiana-drag-scroll';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Story from 'components/Story';
import makeSelectStories from './selectors';
import reducer from './reducer';
import saga from './saga';
const key = 'stories';

const StoriesWrapper = styled.section`
  display: flex;
  margin: ${({ theme }) => theme.space['3']} ${({ theme }) => theme.space['0']};

  & > * {
    margin: ${({ theme }) => theme.space['0']}
      ${({ theme }) => theme.space['05']};

    &:first-child {
      margin-left: ${({ theme }) => theme.space['0']};
    }
    &:last-child {
      margin-left: ${({ theme }) => theme.space['0']};
    }
  }
`;

const __STORIES__ = Array(90).fill(1);

export const Stories = ({ handleOpenStory }) => (
  <ScrollContainer component="section">
    <StoriesWrapper>
      {__STORIES__.map((_, i) => (
        <Story
          key={i}
          username="pasqudek"
          avatar="https://picsum.photos/200"
          viewed={Math.random() > 0.3}
          handleOpenStory={handleOpenStory}
        />
      ))}
    </StoriesWrapper>
  </ScrollContainer>
);

Stories.propTypes = {
  handleOpenStory: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stories: makeSelectStories(),
});

const mapDispatchToProps = dispatch => ({
  handleOpenStory: id => console.log('story id', id),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Stories);
