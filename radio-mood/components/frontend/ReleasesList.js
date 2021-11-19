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
      <div className="w-1/2 overflow-hidden">
        <Link href={`albums/${release.name}_${release.artist}`}>
          <div className="text-center p-4 border-2 cursor-pointer border-white hover:border-black flex"
               onClick={() => onReleaseClick(release)}>
            <Image width={250} height={250} src={release.imageUrl}/>
            <div className="p-2 align-middle justify-content text-center w-full h-full pt-8 text-lg">
              <p style={{fontFamily: "HelveticaNowDisplayBlk"}}>{release.artist}</p>
              <p className="text-sm text-base" style={{fontFamily: "HelveticaNowTextBold"}}>{release.name}</p>
            </div>
          </div>
        </Link>
      </div>

    ));
  };

  return <div className="flex flex-wrap -mx-4 overflow-hidden"
              style={{fontFamily: "HelveticaNowDisplayBlk"}}>{renderList()}</div>;
}
