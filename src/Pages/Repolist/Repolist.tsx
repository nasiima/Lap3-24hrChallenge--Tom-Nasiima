import React from 'react'
import StatCard from '../../Components/StartCard/StatCard'
import Title from '../../Components/Title/Title'
import './Repolist.css'

// interface myTotalData {
  // totalData:Array<
  // totalData: string =
  // {
    // issueCounter:any;
    // folkCounter:string,
    // reposCounter:string,
    // sizeCounter:string,
    // watchCounter:string,
    // isMainCounter:string
    // >{}
  // issueCounter,
  // folkCounter,
  // reposCounter,
  // sizeCounter,
  // watchCounter,
  // isMainCounter
  // }
// }





// export default function Title({issueCounter,folkCounter,reposCounter,sizeCounter,watchCounter,isMainCounter}:propsstuff) {

  // export default function Repolist({issueCounter}:myTotalData) {
  export default function Repolist() {


// export default function Repolist({issueCounter,folkCounter,reposCounter,sizeCounter,watchCounter,isMainCounter}:totalData) {
  return (
    <>
    <Title name="Repos"/>;
    
    <div className="containerStats">
    <StatCard />
    <StatCard />
    </div>

    {/* <h1>{totalData.watchCounter}</h1> */}
    {/* // <h1>{sizeCounter}</h1> */}
    </>
  )
}
