import Link from 'next/link'

const Id = () => {
  return (
    <div className="mt-4 mx-2 pb-12">
      <div className="max-w-4xl m-auto p-8 border-2 border-black" style={{fontFamily: "MontserratV18Latin900"}}>
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
