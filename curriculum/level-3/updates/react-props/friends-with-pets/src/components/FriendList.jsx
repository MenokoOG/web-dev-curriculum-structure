import React from 'react';
import Friend from './Friend';

const FriendList = ({ friends }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
