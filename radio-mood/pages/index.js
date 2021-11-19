import Head from 'next/head'
import {Info, LandingPage, Title} from "../components/frontend"
import ReleasesList from "../components/frontend/ReleasesList";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>mood-radio</title>
      </Head>

      <div className="mt-4 mx-2 pb-12">
        <div className="max-w-3xl m-auto p-8 border-4 border-black" style={{fontFamily: "MontserratV18Latin900"}}>

          <Title style={{fontFamily: "HelveticaNowTextBold"}}/>
          <Info />

          <ReleasesList/>
          <LandingPage/>
        </div>
      </div>
    </>
  )
}
