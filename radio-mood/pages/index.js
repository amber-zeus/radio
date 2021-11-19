import Head from 'next/head'
import {Info, Title} from "../components/frontend"
import {Album} from "../components/frontend/Album";


export default function Home() {
  return (
    <>
      <Head>
        <title>mood-radio</title>
      </Head>

      <div className="mt-4">
        <div className="max-w-md m-auto p-8 border-4 border-black">
          <Title/>
          <Info/>
          <Album/>
          <Album/>
          <Album/>
          <Album/>
        </div>
      </div>
    </>
  )
}
