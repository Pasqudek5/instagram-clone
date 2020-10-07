/**
 *
 * Post
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { LIGHT_MODE, DARK_MODE } from 'containers/ThemeProvider/constants';
import { Light, Dark } from 'themes';
import {
  FiMoreVertical,
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
} from 'react-icons/fi';

import Story from 'components/Story';
import Typography from 'components/Typography';
import Input from 'components/Input';
import Img from 'components/Img';
import Icon from 'components/Icon';
import Button from 'components/Button';

const Wrapper = styled.section`
  margin-top: ${({ theme }) => theme.space['7']};
  margin-bottom: ${({ theme }) => theme.space['3rem']};
  background-color: ${Dark.background.alt2};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  max-width: 620px;
`;

const Header = styled.header`
  padding: ${({ theme }) => theme.space['2']} ${({ theme }) => theme.space['1']};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;

  ${Typography} {
    margin-left: ${({ theme }) => theme.space['1']};
  }
`;

const Content = styled.div`
  ${Img} {
    width: 100%;
    border-radius: ${({ theme }) => theme.border.radius.medium};
  }
`;

const Action = styled.div`
  padding: ${({ theme }) => theme.space['0']} ${({ theme }) => theme.space['1']};
  display: flex;
  align-items: center;

  ${Button}:last-child {
    margin-left: auto;
  }
`;

const Post = ({ username, handleOpenStory }) => (
  <Wrapper>
    <Header>
      <User>
        <Story
          username={username}
          avatar="https://picsum.photos/200"
          viewed
          handleOpenStory={handleOpenStory}
        />
        <Typography variant="h2">{username}</Typography>
      </User>
      <Button variant="icon">
        <Icon variant="small" type={FiMoreVertical} />
      </Button>
    </Header>
    <Content>
      <Img src="https://picsum.photos/800" alt="alt" />
    </Content>
    <Action>
      <Button variant="icon">
        <Icon variant="small" type={FiHeart} />
      </Button>
      <Button variant="icon">
        <Icon variant="small" type={FiMessageCircle} />
      </Button>
      <Button variant="icon">
        <Icon variant="small" type={FiSend} />
      </Button>
      <Button variant="icon">
        <Icon variant="small" type={FiBookmark} />
      </Button>
    </Action>
  </Wrapper>
);

Post.propTypes = {
  username: PropTypes.string.isRequired,
  handleOpenStory: PropTypes.func.isRequired,
};

export default Post;
