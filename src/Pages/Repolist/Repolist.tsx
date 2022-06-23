import React from 'react'
import StatCard from '../../Components/StartCard/StatCard'
import Title from '../../Components/Title/Title'

interface totalData {
  issueCounter: string,
  folkCounter:string,
  reposCounter:string,
  sizeCounter:string,
  watchCounter:string,
  isMainCounter:string
}

// export default function Title({issueCounter,folkCounter,reposCounter,sizeCounter,watchCounter,isMainCounter}:propsstuff) {

  export default function Repolist() {

// export default function Repolist({issueCounter,folkCounter,reposCounter,sizeCounter,watchCounter,isMainCounter}:totalData) {
  return (
    <>
    <Title name="Repos"/>;
    <StatCard />
    {/* // <h1>{sizeCounter}</h1> */}
    </>
  )
}
