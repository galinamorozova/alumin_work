import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './transparentRollet.scss';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src='https://pbs.twimg.com/media/Duy0GsWW4AEmd56.jpg' onDragStart={handleDragStart} role="presentation" alt=""/>,
  <img src='https://pbs.twimg.com/media/Duy0GsWW4AEmd56.jpg' onDragStart={handleDragStart} role="presentation" alt=""/>,
  <img src='https://pbs.twimg.com/media/Duy0GsWW4AEmd56.jpg' onDragStart={handleDragStart} role="presentation" alt=""/>,
];



export default function Gallery()  {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}