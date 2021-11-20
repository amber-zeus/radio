import { TiFlash } from 'react-icons/ti';
import { GiBootPrints, GiTrumpet, GiNothingToSay } from 'react-icons/gi';
import { FaGuitar } from 'react-icons/fa';
import { BiPulse } from 'react-icons/bi';

export const HeadDescription = () => {
  return (
    <div className="italic" style={{ fontFamily: 'HelveticaNowTextBold' }}>
      are you tired of listening whole albums?
      <br />
      <div
        className="not-italic"
        style={{ fontFamily: 'HelveticaNowTextBold' }}
      >
        <br />
        <span className="underline">
          Thanks to our solution you can see following parameters of the songs
        </span>
        :
        <ul className="text-sm flex flex-wrap m-auto">
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-3 flex items-center justify-center">
            <TiFlash className="mr-2" />
            energy
          </li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-3 flex items-center justify-center">
            <FaGuitar className="mr-2" />
            acousticness
          </li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-3 flex items-center justify-center">
            <GiBootPrints className="mr-2" />
            danceability
          </li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-2 flex items-center justify-center">
            <GiTrumpet className="mr-2" />
            instrumentalness
          </li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-2 flex items-center justify-center">
            <BiPulse className="mr-2" />
            liveness
          </li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-2 flex items-center justify-center">
            <GiNothingToSay className="mr-2" />
            speechiness
          </li>
        </ul>
      </div>
    </div>
  );
};
