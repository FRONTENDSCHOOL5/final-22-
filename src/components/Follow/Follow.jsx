import React, { useContext, useState } from 'react';

import * as S from './Follow.style';
import { AuthContextStore } from '../../context/AuthContext';
<<<<<<< HEAD
<<<<<<< HEAD
import { followApi } from '../../api/follow';
=======
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
import { followApi } from '../../api/follow';
>>>>>>> 4cf1536 (refactor: 요청 api 따로 분리 (#132))

const Follow = ({ item }) => {
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [follow, setFollow] = useState(item);
  const { accountname, image, username, intro, isfollow } = follow;

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      await followApi(accountname, isfollow, userToken);
      setFollow((prev) => ({ ...prev, isfollow: !prev.isfollow }));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.Item>
      <S.StyledLink to={`/profile/${accountname}`}>
        <S.ProfileImg size='22px' src={image} alt={`${accountname}의 프로필 이미지`} />
        <S.Container>
          <S.UserName className='sl-ellipsis'>{username}</S.UserName>
          <S.Intro className='sl-ellipsis'>{intro}</S.Intro>
        </S.Container>
        {follow.accountname !== userAccountname && (
          <S.StyledBtn mode={isfollow ? 'active' : 'default'} size='sm' onClick={handleClick}>
            {isfollow ? '취소' : '팔로우'}
          </S.StyledBtn>
        )}
      </S.StyledLink>
    </S.Item>
  );
};

export default Follow;
