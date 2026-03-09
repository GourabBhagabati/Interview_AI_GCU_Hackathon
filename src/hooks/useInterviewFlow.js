import { useState } from "react"

export function useInterviewFlow() {

  const [jobDescription, setJobDescription] = useState("")
  const [resumeFile, setResumeFile] = useState(null)
  const [analysis, setAnalysis] = useState(null)
  const [questions, setQuestions] = useState([])
  const [stage, setStage] = useState("idle") // idle | analyzing | ready | interviewing | scored

  const reset = () => {
    setJobDescription("")
    setResumeFile(null)
    setAnalysis(null)
    setQuestions([])
    setStage("idle")
  }

  return {
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
    reset,
  }

}

