import React, { useContext } from 'react';
import styled from 'styled-components';
import 'focus-visible';
import { format, compareAsc } from 'date-fns'

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';
import { TweetContext } from '../Tweet/TweetContext'

const App = () => {
  const {
    state: { numOfLikes, numOfRetweets, isLiked, isRetweeted },
    actions: { like, retweet }
  } = useContext(TweetContext)

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={format(new Date(), "h:mm A - MMMM Mo, YYYY")}
        numOfRetweets={numOfRetweets}
        numOfLikes={numOfLikes}
        isLikedByCurrentUser={isLiked}
        isRetweetedByCurrentUser={isRetweeted}
        handleToggleLike={like}
        handleToggleRetweet={retweet}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
