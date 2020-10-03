/**
 *
 * Story
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'components/Img';

const UserAvatar = styled(Img)`
  width: 7rem;
  border-radius: 50%;
  border: 0.5rem solid #fff;
`;

const StoriesAvatarStatus = styled.div`
  margin: 0 0.3rem;
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    692.93% 298.5% at -40% 261.5%,
    #f9ed32 52.48%,
    #ee2a7b 73.44%,
    #002aff 100%
  );
  border-radius: 50%;

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

const Story = ({ username, avatar, viewed, ...props }) => (
  <StoriesAvatarStatus viewed={viewed} {...props}>
    <UserAvatar src={avatar} alt={`${username} profile photo`} />
  </StoriesAvatarStatus>
);

Story.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  viewed: PropTypes.bool.isRequired,
};

export default Story;
