/**
 *
 * Story
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'components/Img';

import StatusCircle from './StatusCircle';

const StatusWrapper = styled.div`
  width: ${({ theme }) => theme.space['8']};
  height: ${({ theme }) => theme.space['8']};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const UserAvatar = styled(Img)`
  width: ${({ theme }) => theme.space['7']};
  border-radius: 50%;
`;

const Story = ({ handleOpenStory, username, avatar, viewed, ...props }) => (
  <StatusWrapper onClick={() => handleOpenStory(username)} {...props}>
    <StatusCircle viewed={viewed} />
    <UserAvatar src={avatar} alt={`${username} profile photo`} />
  </StatusWrapper>
);

Story.propTypes = {
  handleOpenStory: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  viewed: PropTypes.bool.isRequired,
};

export default styled(Story)``;
