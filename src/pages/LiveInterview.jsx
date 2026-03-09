import { useEffect, useState } from "react"

const transcript = [
  {
    speaker: "AI",
    time: "00:00",
    text: "Welcome, Arjun. Let's start with a quick overview of your recent work at ScaleByte.",
  },
  {
    speaker: "Candidate",
    time: "00:18",
    text: "Sure. I lead a small frontend pod focusing on our design system and performance.",
  },
  {
    speaker: "AI",
    time: "01:02",
    text: "How do you typically approach debugging a production issue impacting users?",
  },
  {
    speaker: "Candidate",
    time: "01:25",
    text: "First I try to reproduce locally with realistic data, then add minimal logging and guards.",
  },
]

const questions = [
  {
    label: "Q1 · Technical",
    question: "Explain a challenging backend problem you solved recently.",
  },
  {
    label: "Q2 · Communication",
    question: "How do you collaborate with frontend teams during critical launches?",
  },
  {
    label: "Q3 · Problem solving",
    question: "Describe a debugging process you followed for a production incident.",
  },
  {
    label: "Q4 · Culture fit",
    question: "How do you handle disagreements during code reviews?",
  },
  {
    label: "Q5 · Experience",
    question: "Walk me through a project you built using Java or Spring Boot.",
  },
]

const steps = questions.map((q) => q.label)

export default function LiveInterview({ onFinishInterview }){

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [secondsElapsed, setSecondsElapsed] = useState(0)
  const [metrics, setMetrics] = useState({
    clarity: 72,
    technical: 75,
    culture: 78,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((s) => s + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const total = questions.length
    if (currentQuestion >= total) return

    const timeout = setTimeout(() => {
      if (currentQuestion === total - 1) {
        onFinishInterview && onFinishInterview()
      } else {
        setCurrentQuestion((prev) => prev + 1)
        setMetrics((prev) => ({
          clarity: Math.min(prev.clarity + 4, 95),
          technical: Math.min(prev.technical + 3, 94),
          culture: Math.min(prev.culture + 2, 92),
        }))
      }
    }, 10000)

    return () => clearTimeout(timeout)
  }, [currentQuestion, onFinishInterview])

  const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, "0")
  const seconds = String(secondsElapsed % 60).padStart(2, "0")
  const elapsedLabel = `${minutes}:${seconds}`

return(

<div className="px-10 py-8 grid grid-cols-1 xl:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] gap-8 items-start">

  <div className="space-y-6">

    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex items-center justify-between shadow-[0_22px_55px_rgba(15,23,42,0.9)]">

      <div className="flex items-center gap-4">

        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-slate-950 font-semibold shadow-lg shadow-teal-500/40">
          AI
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            AI Interviewer
          </p>
          <p className="text-base font-semibold">
            Aurora · Senior Frontend Role
          </p>
        </div>

      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2 text-xs text-rose-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-70 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
          </span>
          <span className="uppercase tracking-wide">
            Recording
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="h-6 rounded-full border border-slate-700 px-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Latency · 82ms</span>
          </span>
            <span className="h-6 rounded-full border border-slate-700 px-3 inline-flex items-center">
            {elapsedLabel} elapsed
            </span>
        </div>

      </div>

    </div>

    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          AI is speaking
        </p>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-sm text-slate-300">
            &ldquo;{questions[currentQuestion].question}&rdquo;
          </p>
        </div>
      </div>

      <div className="relative h-24 rounded-xl bg-slate-950/70 px-4 flex items-end gap-1 overflow-hidden ring-1 ring-slate-800/60">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-slate-700 via-teal-500/70 to-emerald-300/90 animate-pulse"
            style={{
              animationDelay: `${i * 40}ms`,
              height: `${35 + (i % 6) * 10}%`,
            }}
          />
        ))}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent opacity-60 mix-blend-screen animate-scan" />
      </div>

    </div>

    <div className="grid lg:grid-cols-2 gap-6 items-start">

      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Current question
          </p>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <h2 className="text-base font-semibold leading-relaxed">
          {questions[currentQuestion].question}
        </h2>
        <p className="text-xs text-slate-400">
          Focus on your mental model, observability, and the trade‑offs you would consider.
        </p>
      </div>

      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col h-64 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">

        <div className="flex items-center justify-between mb-3">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Live transcript
          </p>
          <span className="text-[10px] text-slate-500">
            Synced · 2 seconds behind
          </span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scroll">
          {transcript.map((entry, idx) => (
            <div key={idx} className="text-xs leading-relaxed">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`px-2 py-0.5 rounded-full border text-[10px] uppercase tracking-wide ${
                  entry.speaker === "AI"
                    ? "bg-slate-800/80 border-slate-600 text-slate-200"
                    : "bg-teal-500/15 border-teal-400/40 text-teal-200"
                }`}>
                  {entry.speaker}
                </span>
                <span className="text-[10px] text-slate-500">
                  {entry.time}
                </span>
              </div>
              <p className="text-slate-300">
                {entry.text}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>

    <div className="flex justify-end">
      <button
        type="button"
        onClick={onFinishInterview}
        className="rounded-xl bg-rose-500 text-slate-50 text-xs font-semibold px-4 py-2 shadow-lg shadow-rose-500/40 hover:bg-rose-400 transition-colors"
      >
        End interview & view scorecard
      </button>
    </div>

  </div>

  <aside className="space-y-6">

    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-4">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Interview progress
        </p>
        <span className="text-xs text-slate-300">
          38% complete
        </span>
      </div>

      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-5">
        <div className="h-full" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} className="rounded-full bg-gradient-to-r from-teal-400 to-emerald-400" />
      </div>

      <ol className="space-y-3 text-xs">
        {steps.map((step, index) => {
          const active = index === currentQuestion
          const done = index < currentQuestion
          return (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5">
                <span className={`flex h-4 w-4 items-center justify-center rounded-full border text-[10px] ${
                  done
                    ? "border-emerald-400 bg-emerald-500/20 text-emerald-200"
                    : active
                    ? "border-teal-400 bg-teal-500/10 text-teal-200"
                    : "border-slate-600 bg-slate-900 text-slate-400"
                }`}>
                  {index + 1}
                </span>
              </span>
              <div>
                <p className={`font-medium ${
                  active ? "text-slate-50" : "text-slate-200"
                }`}>
                  {step}
                </p>
                <p className="text-[11px] text-slate-500">
                  {active
                    ? "Deep dive on fundamentals and debugging approach."
                    : done
                    ? "Completed · captured baseline and career context."
                    : "Queued · tailored follow‑ups based on previous answers."}
                </p>
              </div>
            </li>
          )
        })}
      </ol>

    </div>

    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4">

      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Live AI analysis
        </p>
        <span className="text-[10px] text-slate-500">
          Updating in real‑time
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 text-xs">
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          <p className="text-slate-400 mb-1">Signal</p>
          <p className="text-sm text-emerald-300 font-semibold">High</p>
          <p className="text-[11px] text-slate-500 mt-1">
            Clear structure and strong mental models.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          <p className="text-slate-400 mb-1">Risk</p>
          <p className="text-sm text-amber-300 font-semibold">Moderate</p>
          <p className="text-[11px] text-slate-500 mt-1">
            Limited exposure to very large teams.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          <p className="text-slate-400 mb-1">Match</p>
          <p className="text-sm text-teal-300 font-semibold">Strong</p>
          <p className="text-[11px] text-slate-500 mt-1">
            Experience aligns with current hiring lane.
          </p>
        </div>
      </div>

      <div className="space-y-3 text-xs">

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-300">Communication clarity</span>
            <span className="text-slate-400">{metrics.clarity}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-teal-400" style={{ width: `${metrics.clarity}%` }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-300">Technical depth</span>
            <span className="text-slate-400">{metrics.technical}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400" style={{ width: `${metrics.technical}%` }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-300">Culture add</span>
            <span className="text-slate-400">{metrics.culture}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-300" style={{ width: `${metrics.culture}%` }} />
          </div>
        </div>

      </div>

      <p className="text-[11px] text-slate-500 pt-1">
        This analysis is AI‑generated and should be reviewed alongside human feedback.
      </p>

    </div>

  </aside>

</div>

)

}

