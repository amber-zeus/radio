import Link from "next/link";
import Image from 'next/image'

export default function ReleasesList({
                                       releases,
                                       loading,
                                       onReleaseClick = (e) => {
                                         console.log(e)
                                       },
                                     }) {
  const renderList = () => {
    if (loading) return 'Loading...';

    if (!releases?.length) {
      return <p></p>
    }
    ;

    return releases.map(release => (
      <div className="my-4 px-4 w-1/2 overflow-hidden h-96">
        <Link href={`albums/${release.name}_${release.artist}`}>
          <div className="text-center p-4 border-2 m-4 cursor-pointer border-gray-500 hover:border-black"
               onClick={() => onReleaseClick(release)}>
            <p>{release.artist}</p>
            <Image width={200} height={200} src={release.imageUrl}/>
            <h3>{release.name}</h3>
          </div>
        </Link>
      </div>

    ));
  };

  return <div className="flex flex-wrap -mx-4 overflow-hidden"
              style={{fontFamily: "HelveticaNowDisplayBlk"}}>{renderList()}</div>;
}
