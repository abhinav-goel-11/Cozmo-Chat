import React from 'react';
import { twMerge } from 'tailwind-merge';
import spinner from '../../assets/svg-icon/ei_spinner-3.svg';
import whiteSpinner from '../../assets/svg-icon/white-spinner.svg';

const variants = 'h-80'; 

const Loader = ({
  height = 80,
  className,
  isWhite = false, 
}: { height?: number; className?: string; isWhite?: boolean }) => {
  const containerStyle = `h-${height}`;
  const spinnerSrc = isWhite ? whiteSpinner?.src : spinner?.src;

  return (
    <div className={`flex justify-center items-center ${containerStyle}`}>
      <img src={spinnerSrc} alt="Loading..." className={twMerge("animate-spin h-14 w-14",className)}  />
    </div>
  );
};

export default Loader;
