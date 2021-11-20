import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ReleasesList({
  releases,
  loading,
  onReleaseClick = () => {},
}) {
  const renderList = () => {
    if (loading) return 'Loading...';

    if (!releases?.length) {
      return <p></p>;
    }

    return releases.map(release => (
      <div className="md:w-1/2 md:overflow-hidden w-full">
        <div
          className="text-center p-4 border-2 cursor-pointer border-gray-100 m-2 hover:border-black sm:flex"
          onClick={() => onReleaseClick(release)}
        >
          <Image
            width={250}
            height={250}
            src={release.imageUrl}
            layout="intrinsic"
          />
          <div className="p-2 align-middle justify-content text-center w-full h-full sm:pt-8 text-lg">
            <p style={{ fontFamily: 'HelveticaNowDisplayBlk' }}>
              {release.artist}
            </p>
            <p
              className="text-sm text-base p-0 m-4"
              style={{ fontFamily: 'HelveticaNowTextBold' }}
            >
              {release.name}
            </p>
          </div>
          <div className="relative sm:p-0">
            <div className="genre sm:visible invisible">
              {release.releaseDate.slice(0, 4)}
            </div>
            <div className="md:absolute genreRelative sm:invisible visible">
              {release.releaseDate.slice(0, 4)}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div
      className="flex flex-wrap -mx-4 overflow-hidden"
      style={{ fontFamily: 'HelveticaNowDisplayBlk' }}
    >
      {renderList()}
    </div>
  );
}
