import React from 'react';

const Pet = ({ pet }) => {
  return (
    <li className="ml-4 text-gray-700">
      {pet.name} ({pet.breed})
    </li>
  );
};

export default Pet;
