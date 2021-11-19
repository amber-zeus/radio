import Link from "next/link";

export default function ReleasesList({
  releases,
  loading,
  onReleaseClick = (e) => {console.log(e)},
}) {
  const renderList = () => {
    if (loading) return 'Loading...';

    if (!releases?.length) {
      return <p> </p>
    };

    return releases.map(release => (
      <Link href={`albums/${release.name}_${release.artist}`}>
      <div className="text-center p-4 border-2 m-4 cursor-pointer hover:border-black" onClick={() => onReleaseClick(release)}>
        <p>{release.artist}</p>
        <img src={release.imageUrl} />
        <h3>{release.name}</h3>
      </div>
      </Link>

    ));
  };

  return <div className="flex flex-col" style={{fontFamily: "HelveticaNowDisplayBlk"}}>{renderList()}</div>;
}
