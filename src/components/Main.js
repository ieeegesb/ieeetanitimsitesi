import React from 'react';
import Slider from './Slider';
import AboutUs from './AboutUs';
import CommitteesSection from './committees/CommitteesSection';

export default function Main() {
  return (
    <>
      <Slider />
      <AboutUs />
      <CommitteesSection />
    </>
  )
}