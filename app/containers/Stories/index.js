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

const W = styled.div`
  min-width: 100%;
  min-height: 100%;
  position: relative;
  background-color: red;
  overflow-x: hidden;
`;

const StoriesWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: red;
`;

export const Stories = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const __STORIES__ = Array(90).fill(1);

  return (
    <W>
      <ScrollContainer
        component="section"
        onScroll={() => console.log('hello')}
      >
        <StoriesWrapper>
          {__STORIES__.map((_, i) => (
            <Story
              key={i}
              username="pasqudek"
              avatar="https://picsum.photos/200"
              viewed={Math.random() > 0.3}
            />
          ))}
        </StoriesWrapper>
      </ScrollContainer>
    </W>
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
