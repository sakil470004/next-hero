import AboutContents from '@/components/AboutContents';
import React from 'react';

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/time');
    if (!res.ok) {
      throw new Error('Failed to fetch time');
    }
    const data = await res.json();
    return {
      props: { currentTime: data.currentTime || 'N/A' },
    };
  } catch (error) {
    console.error('Error fetching time:', error.message);
    return {
      props: { currentTime: 'Error fetching time' },
    };
  }
}

function AboutPage({ currentTime }) {
  return (
    <div>
      <AboutContents />
      <div className="text-center text-2xl mt-10">
        Current Time: {currentTime}
      </div>
    </div>
  );
}

export default AboutPage;
