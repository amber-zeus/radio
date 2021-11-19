import Link from 'next/link'

const Id = () => {
  return (
    <div className="mt-4">

      <div className="max-w-md m-auto p-8 border-4 border-black" style={{fontFamily: "MontserratV18Latin900"}}>
        <Link href="/">
          go back</Link>

        <br/>
        <div className="p-8">
          this is details page now
        </div>
      </div>
    </div>
  )
}
export default Id;
``
