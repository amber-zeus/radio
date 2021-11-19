import Head from 'next/head'
import {Info, LandingPage, Title} from "../components/frontend"
import {Album} from "../components/frontend/Album";
import ReleasesList from "../components/frontend/ReleasesList";


export default function Home() {
  return (
    <>
      <Head>
        <title>mood-radio</title>
      </Head>

      <div className="mt-4">
        <div className="max-w-md m-auto p-8 border-4 border-black" style={{fontFamily: "MontserratV18Latin900"}}>
          <Title style={{fontFamily: "HelveticaNowTextBold"}}/>
          <Info />
          <ReleasesList/>
          <LandingPage/>
        </div>
      </div>
    </>
  )
}
