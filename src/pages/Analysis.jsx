import { useEffect, useState } from "react"
import ResumeAnalysisCard from "../components/ResumeAnalysisCard"
import SkillBar from "../components/SkillBar"
import QuestionList from "../components/QuestionList"
import { AlertTriangle } from "lucide-react"

export default function Analysis({
  jobDescription,
  resumeFile,
  analysis,
  questions,
  onAnalyze,
  isAnalyzing,
  stage,
  onStartInterview,
}) {

  const [loadingStep, setLoadingStep] = useState(0)

  const loadingSteps = [
    "Parsing resume…",
    "Extracting skills…",
    "Matching with job description…",
    "Generating interview questions…",
  ]

  useEffect(() => {
    if (!isAnalyzing) {
      setLoadingStep(0)
      return
    }
    setLoadingStep(0)
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingSteps.length - 1) return prev
        return prev + 1
      })
    }, 600)
    return () => clearInterval(interval)
  }, [isAnalyzing])

  const showEmptyState = !resumeFile

  if (showEmptyState) {
    return (

    <div className="px-10 py-16 flex flex-col items-center text-center gap-4">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 border border-slate-700 text-amber-300">
        <AlertTriangle className="h-5 w-5" />
      </div>
      <h2 className="text-lg font-semibold text-slate-50">
        Upload a resume from the dashboard
      </h2>
      <p className="max-w-md text-sm text-slate-400">
        Paste a job description and upload a candidate resume on the main dashboard.
        We&apos;ll bring you back here to simulate how InterviewAI parses and understands it.
      </p>
    </div>

    )
  }

  const isReady = stage === "ready"

  return (

  <div className="px-10 py-8 grid grid-cols-1 xl:grid-cols-[minmax(0,2.1fr)_minmax(0,1.1fr)] gap-8 items-start">

    <div className="space-y-6">

      <div className="flex flex-col gap-4 md:flex-row md:items-start">

        {!isAnalyzing && (
          <div className="flex-1 min-w-0">
            <ResumeAnalysisCard analysis={analysis}/>
          </div>
        )}

        <div className="w-full max-w-xs space-y-3">
          <button
            type="button"
            disabled={isAnalyzing || !jobDescription || !resumeFile}
            onClick={onAnalyze}
            className="w-full rounded-xl bg-teal-500 text-slate-950 text-xs font-semibold py-3 shadow-lg shadow-teal-500/40 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {isAnalyzing ? "Running AI analysis…" : analysis ? "Re-run AI analysis" : "Run AI resume analysis"}
          </button>
          <button
            type="button"
            disabled={!isReady}
            onClick={onStartInterview}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 text-xs font-semibold py-3 text-slate-100 hover:border-teal-400/60 hover:text-teal-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            Start AI interview
          </button>
          <p className="text-[11px] text-slate-500">
            We simulate how the model parses the resume, matches it to the JD, and then generates a targeted interview plan.
          </p>
        </div>

      </div>

      {isAnalyzing && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)] text-xs text-slate-300 space-y-3">
          <p className="text-[11px] uppercase tracking-wide text-slate-400">
            AI pipeline
          </p>
          <ul className="space-y-1.5">
            {loadingSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${
                  index <= loadingStep ? "bg-teal-400" : "bg-slate-600"
                }`} />
                <span className={index === loadingStep ? "text-slate-100" : "text-slate-500"}>
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isAnalyzing && <QuestionList questions={questions}/>}

    </div>

    <aside className="space-y-6">

      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">

        <div className="flex items-center justify-between mb-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Skill breakdown
          </p>
          <span className="text-[11px] text-slate-500">
            Derived from resume + JD
          </span>
        </div>

        <div className="space-y-1">
          <SkillBar label="Technical depth" value={88}/>
          <SkillBar label="Communication" value={76}/>
          <SkillBar label="Problem solving" value={82}/>
          <SkillBar label="Culture add" value={80}/>
          <SkillBar label="Experience match" value={84}/>
        </div>

      </div>

      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)] space-y-3 text-xs text-slate-300">
        <p className="text-[11px] uppercase tracking-wide text-slate-400">
          Job description context
        </p>
        <p className="text-slate-400">
          We align resume signals with the responsibilities and requirements specified in the JD.
          For the demo, we keep everything on-device and deterministic.
        </p>
        {jobDescription && (
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-3 max-h-40 overflow-y-auto text-[11px] text-slate-400">
            {jobDescription}
          </div>
        )}
      </div>

    </aside>

  </div>

  )

}

