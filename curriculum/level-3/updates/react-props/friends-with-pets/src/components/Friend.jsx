import React from 'react';
import Pet from './Pet';

const Friend = ({ friend }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">{friend.name}, {friend.age}</h2>
      <h3 className="text-lg font-medium text-gray-600 mt-2">Pets:</h3>
      <ul className="mt-2">
        {friend.pets.map((pet, index) => (
          <Pet key={index} pet={pet} />
        ))}
      </ul>
    </div>
  );
};

export default Friend;
