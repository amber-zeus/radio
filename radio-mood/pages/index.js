import Head from 'next/head';
import { Title, LandingPage, Info } from '../components/frontend';
import { AccessToken } from '../components/backend';

export default function Home() {
  return (
    <>
      <Head>
        <title>mood-radio</title>
      </Head>

      <div className="max-w-md m-auto p-8">
        {/*<AccessToken/>*/}
        <Title />
        <Info />
        <LandingPage />
      </div>
    </>
  )
}
