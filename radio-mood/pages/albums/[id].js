import Link from 'next/link'
import {Graph, OneTrackGraph} from "../../components/frontend";

const Id = () => {
  return (
    <div className="mt-4 mx-2 pb-12">
      <div className="max-w-4xl m-auto p-8 border-2 border-black" style={{fontFamily: "MontserratV18Latin900"}}>
        <Link href="/">
          GO BACK</Link>

        <div>
          this is details page now
        </div>

        <div className="m-auto p-10 text-center flex align-center">
          <Graph/>
        </div>

        <div className="text-center m-auto flex align-center">
          <OneTrackGraph/>
        </div>

      </div>
    </div>
  )
}
export default Id;
``
