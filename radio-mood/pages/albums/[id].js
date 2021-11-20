import Link from 'next/link'
import {Graph, OneTrackGraph} from "../../components/frontend";
import {useRouter} from 'next/router'


const AlbumDetails = ({params}) => {


  const router = useRouter()
  // debugger
  if (router === undefined) {
    router.push('/')
  }

  const [album, artist] = (router.query?.id?.split("_")) || []


  console.log(album)
  console.log(artist)

  return (
    <div className="mt-4 mx-2 pb-12">
      <div className="max-w-4xl m-auto p-8 border-2 border-black" style={{fontFamily: "MontserratV18Latin900"}}>
        <div className="mb-10">
          <Link href="/" className="">
            <div
              className="text-2xl border border-2 w-40 border-gray-300 text-center p-2 hover:border-black cursor-pointer text-blue-900" style={{fontFamily: "HelveticaNowDisplayBlk"}}>
              go back
            </div>
          </Link>
        </div>


        <div className="bg-blue-700 text-white p-10 text-center" style={{fontFamily: "MontserratV18Latin900"}}>
          <div className="text-5xl ">
            {artist}
          </div>
          <div className="text-3xl mt-2">
            {album}
          </div>
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
export default AlbumDetails;
``
