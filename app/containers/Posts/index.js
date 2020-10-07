/**
 *
 * Posts
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import Post from 'components/Post';

import makeSelectPosts from './selectors';

const Layout = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const __POSTS__ = Array(52).fill(1);

export const Posts = () => (
  <div>
    <Helmet>
      <title>Posts</title>
      <meta name="description" content="Description of Posts" />
    </Helmet>
    <Layout>
      {__POSTS__.map((post, key) => (
        <Post key={key} username="pasqudek" handleOpenStory={() => {}} />
      ))}
    </Layout>
  </div>
);

Posts.propTypes = {};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Posts);
