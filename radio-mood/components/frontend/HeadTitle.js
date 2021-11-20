import {
  FaRegGrinTongueWink,
  FaRegSmileWink,
  FaRegAngry,
} from 'react-icons/fa';

export const HeadTitle = style => {
  return (
    <h1 className="text-4xl bold pb-4 pt-4 flex" style={style}>
      <span className="mr-2">mood albums</span>{' '}
      <FaRegGrinTongueWink className="mr-2" /> <FaRegAngry className="mr-2" />
      <FaRegSmileWink className="mr-2" />
    </h1>
  );
};
