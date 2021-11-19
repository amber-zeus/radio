import Head from 'next/head'
import {Title, Example, Info} from "../components/frontend"


export default function Home() {
  return (
    <>
      <Head>
        <title>mood-radio</title>
      </Head>

      <div className="max-w-md m-auto p-8">



        <Title/>
        <Info/>
        <Example/>
      </div>
    </>
  )
}
