import React, { useState } from 'react';
import styled from 'styled-components';
import imgBtn from '../../assets/img-button.png';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

const Footer = styled.footer`
  /* max-width: 390px; */
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top: 0.5px solid #dbdbdb;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 12px;
  outline: none;
  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const PostBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  text-align: right;
  color: ${({ theme, isActivated }) => (isActivated ? theme.colors.primary : theme.colors.gray)};
`;

const Comment = ({ atChatroom, userProfileImg }) => {
  const [word, setWord] = useState('');

  const handleOnChange = (e) => {
    let txt = e.target.value;
    setWord(txt);
  };

  let isActivated = false;
  if (word) isActivated = true;
  console.log(atChatroom);
  return (
    <Footer>
      <PostUserProfileImg size={'36px'} userProfileImg={userProfileImg} />
      <Input
        type='text'
        placeholder={atChatroom ? '메시지 입력하기...' : '댓글 입력하기...'}
        onChange={handleOnChange}
      />
      <PostBtn isActivated={isActivated} type='submit'>
        {atChatroom ? '전송' : '게시'}
      </PostBtn>
    </Footer>
  );
};

export default Comment;
