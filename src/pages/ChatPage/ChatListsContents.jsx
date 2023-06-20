import React from 'react';
import styled from 'styled-components';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { useNavigate } from 'react-router-dom';

const ChatListCard = styled.section`
  min-width: 358px;
  padding: 24px 16px;
  cursor: pointer;

  div {
    display: inline-block;
  }
  h2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #767676;
  }
  .date {
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
  }
`;

const ChatListsContents = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat/room');
  };

  return (
    <ChatListCard onClick={handleClick}>
      <PostUserProfileImg size={'42px'} />
      <div>
        <h2>🐾강냥공냥공냥냥</h2>
        <p>가입을 축하드립니다!</p>
        <p className='date'>2023.06.20</p>
      </div>
    </ChatListCard>
  );
};

export default ChatListsContents;
