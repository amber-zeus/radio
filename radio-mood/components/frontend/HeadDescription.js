export const HeadDescription = () => {
  return (
    <div className="italic" style={{fontFamily: "HelveticaNowTextBold"}}>

      are you tired of listening whole albums?
      <br/>

      <div className="not-italic" style={{fontFamily: 'HelveticaNowTextBold'}}>
        <br/>
        <span className="underline">Thanks to our solution you could find by these parameter</span>:
        <ul className="text-sm flex flex-wrap m-auto">
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-3">energy</li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-3">acousticness</li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-3">danceability</li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-2">instrumentalness</li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-2">liveness</li>
          <li className="border-2 w-52 text-center mr-6 p-0.5 my-2">speechiness</li>
        </ul>

      </div>
    </div>
  )
}
