import Head from 'next/head'
import {Example} from "../components/Example";
import { Button, DatePicker } from 'antd';



export default function Home() {
  return (
    <>
      <Head>
        <title>mood-radio</title>
      </Head>

      <div className="max-w-md m-auto pt-10">
        <Example/>
      </div>
    </>
  )
}
