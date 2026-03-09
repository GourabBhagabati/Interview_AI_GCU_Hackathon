import StatCard from "../components/StatCard"
import CandidateTable from "../components/CandidateTable"
import CandidatePanel from "../components/CandidatePanel"
import JDInput from "../components/JDInput"
import ResumeUploader from "../components/ResumeUploader"

export default function Dashboard({
  jobDescription,
  onJobDescriptionChange,
  resumeFile,
  onResumeChange,
}){

return(

<div className="px-10 py-8 space-y-8">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    <StatCard title="Total Applications" value="248" sub="+24 today"/>
    <StatCard title="Interviews Done" value="61" sub="This week"/>
    <StatCard title="Avg Fit Score" value="74%" sub="+3% vs last week"/>
    <StatCard title="Time Saved" value="142h" sub="vs manual review"/>

  </div>

  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">

    <div className="xl:col-span-2 space-y-6">
      <CandidateTable/>
      <div className="grid lg:grid-cols-2 gap-6">
        <JDInput value={jobDescription} onChange={onJobDescriptionChange}/>
        <ResumeUploader file={resumeFile} onFileChange={onResumeChange}/>
      </div>
    </div>

    <div className="xl:pl-2">
      <CandidatePanel/>
    </div>

  </div>

</div>

)

}