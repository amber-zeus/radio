export default function ReleasesList({
  releases,
  loading,
  onReleaseClick = () => {},
}) {
  const renderList = () => {
    if (loading) return 'Loading...';
    if (!releases.length) return <p>No releases found :(</p>;

    return releases.map(release => (
      <div onClick={() => onReleaseClick(release)}>
        <h3>{release.name}</h3>
        <p>{release.artist}</p>
      </div>
    ));
  };

  return <div className="flex">{renderList()}</div>;
}
