import React from 'react';
import FriendList from './components/FriendList';

const friends = [
  { name: "Ben", age: 29, pets: [{ name: "spot", breed: "tabby" }, { name: "John Johnson", breed: "husky" }, { name: "Bear the bear", breed: "Grizzly" }] },
  { name: "Bob", age: 31, pets: [{ name: "Sally", breed: "Australian Shepard" }] },
  { name: "Marcus", age: 25, pets: [{ name: "Indy", breed: "Akita" }, { name: "Anna", breed: "persian cat" }] },
  { name: "Jacob", age: 20, pets: [{ name: "fluffy", breed: "sphynx cat" }, { name: "patches", breed: "sphynx cat" }, { name: "tiger", breed: "sphynx cat" }, { name: "oscar", breed: "sphynx cat" }] }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Friend List</h1>
        <FriendList friends={friends} />
      </div>
    </div>
  );
};

export default App;
