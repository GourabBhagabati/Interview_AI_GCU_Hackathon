import { useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import LiveInterview from "./pages/LiveInterview"
import Scorecard from "./pages/Scorecard"
import Analysis from "./pages/Analysis"
import { useInterviewFlow } from "./hooks/useInterviewFlow"
import { simulateResumeAnalysis, simulateQuestionGeneration } from "./services/aiService"

function AppShell() {

  const navigate = useNavigate()
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const {
    jobDescription,
    setJobDescription,
    resumeFile,
    setResumeFile,
    analysis,
    setAnalysis,
    questions,
    setQuestions,
    stage,
    setStage,
  } = useInterviewFlow()

  const handleAnalyze = async () => {
    if (!jobDescription || !resumeFile) return
    setIsAnalyzing(true)
    setStage("analyzing")
    const nextAnalysis = await simulateResumeAnalysis({ jobDescription, resumeFile })
    setAnalysis(nextAnalysis)
    const qs = await simulateQuestionGeneration({ analysis: nextAnalysis })
    setQuestions(qs)
    setStage("ready")
    setIsAnalyzing(false)
  }

  const handleResumeSelected = (file) => {
    setResumeFile(file)
    if (file) {
      navigate("/analysis")
    }
  }

  const handleStartInterview = () => {
    if (!analysis || !questions.length) return
    setStage("interviewing")
    navigate("/interview")
  }

  const handleFinishInterview = () => {
    setStage("scored")
    navigate("/scorecard")
  }

  return (

  <div className="min-h-screen bg-slate-950 text-slate-100">

    <Navbar/>

    <main className="pb-10">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace/>} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              jobDescription={jobDescription}
              onJobDescriptionChange={setJobDescription}
              resumeFile={resumeFile}
              onResumeChange={handleResumeSelected}
            />
          }
        />
        <Route
          path="/analysis"
          element={
            <Analysis
              jobDescription={jobDescription}
              resumeFile={resumeFile}
              analysis={analysis}
              questions={questions}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
              stage={stage}
              onStartInterview={handleStartInterview}
            />
          }
        />
        <Route
          path="/interview"
          element={
            <LiveInterview
              onFinishInterview={handleFinishInterview}
            />
          }
        />
        <Route
          path="/scorecard"
          element={
            <Scorecard
              analysis={analysis}
            />
          }
        />
      </Routes>
    </main>

  </div>

  )

}

function App() {
  return (
  <BrowserRouter>
    <AppShell/>
  </BrowserRouter>
  )
}

export default App


