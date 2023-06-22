import { useContext, useState, useEffect } from 'react';
import TopMainNav from './TopMainNav';
import Contents from './Contents';
import TabMenu from '../../components/common/TabMenu/TabMenu';

import { AuthContextStore } from '../../context/AuthContext';

const Home = () => {
  const { userToken } = useContext(AuthContextStore);
  const [post, setPost] = useState(null);

  const handlePostList = async () => {
    try {
      const response = await fetch('https://api.mandarin.weniv.co.kr/post/feed', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log('데이터:', data);
        setPost(data);
      } else {
        console.error('요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  useEffect(() => {
    if (userToken) {
      handlePostList();
    }
  }, [userToken]);

  return (
    <>
      <TopMainNav />
      {userToken ? <Contents post={post} setPost={setPost} /> : <Contents />}
      <TabMenu active='0' />
    </>
  );
};

export default Home;
