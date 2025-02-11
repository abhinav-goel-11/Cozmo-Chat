import React, { useState, useEffect, useRef } from 'react';

interface ToggleButtonsProps {
    profileName: string;
    handleProfileClick: (query: string) => Promise<void>;
    handlePostsClick: () => void; 
  }
  



const ToggleButtons: React.FC<ToggleButtonsProps> = ({ profileName, handleProfileClick, handlePostsClick }) => {
  const [selectedButton, setSelectedButton] = useState<string>('posts');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName);

    if (buttonName === 'profile') {
      handleProfileClick(profileName);
      

    } else if (buttonName === 'posts') {
      handlePostsClick();
    }
  };

  return (
    <div className="flex w-full">
      <button
        className={`${
          selectedButton === 'posts'
            ? 'bg-selected text-white'
            : 'bg-notselected text-gray-700'
        } px-4 py-2 rounded-md focus:outline-none w-full text-base`}
        onClick={() => handleButtonClick('posts')}
      >
        Posts
      </button>
      <button
        className={`${
          selectedButton === 'profile'
            ? 'bg-selected text-white'
            : 'bg-notselected text-gray-700'
        } px-4 py-2 rounded-md focus:outline-none w-full text-base`}
        onClick={() => handleButtonClick('profile')}
      >
        Profile
      </button>
    </div>
  );
};

export default ToggleButtons;

  
  
