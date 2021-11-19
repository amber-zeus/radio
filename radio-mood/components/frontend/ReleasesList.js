import Link from "next/link";

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
      <div className="my-2 px-2 w-1/3 overflow-hidden">
        <Link href={`albums/${release.name}_${release.artist}`}>
          <div className="text-center p-4 border-2 m-4 cursor-pointer hover:border-black"
               onClick={() => onReleaseClick(release)}>
            <p>{release.artist}</p>
            <img src={release.imageUrl}/>
            <h3>{release.name}</h3>
          </div>
        </Link>
      </div>

    ));
  };

  return <div className="flex flex-wrap overflow-hidden"
              style={{fontFamily: "HelveticaNowDisplayBlk"}}>{renderList()}</div>;
}
