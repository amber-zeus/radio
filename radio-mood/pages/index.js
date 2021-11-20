import Head from 'next/head'
import {HeadDescription, LandingPage, HeadTitle, Graph} from "../components/frontend"
import ReleasesList from "../components/frontend/ReleasesList";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>mood-radio</title>
      </Head>

      <div className="mt-4 mx-2 pb-12">
        <div className="max-w-4xl m-auto p-8 border-2 border-black" style={{fontFamily: "MontserratV18Latin900"}}>

          <HeadTitle style={{fontFamily: "HelveticaNowTextBold"}}/>
          <HeadDescription />
          <ReleasesList/>
          <LandingPage/>
        </div>
      </div>
    </>
  )
}
