import { MessageSquare } from "lucide-react"

export default function QuestionList({ questions }) {

  if (!questions?.length) return null

  return (

  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)] space-y-3">

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-800 text-slate-100 border border-slate-700">
          <MessageSquare className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            AI generated interview questions
          </p>
          <p className="text-sm text-slate-100">
            Tailored to this candidate and role
          </p>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-3 pt-1">
      {questions.map((q) => (
        <div
          key={q.id}
          className="rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-3 text-xs text-slate-200 hover:border-teal-400/40 hover:bg-slate-950/90 transition-colors"
        >
          <p className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">
            {q.label}
          </p>
          <p className="leading-relaxed">
            {q.question}
          </p>
        </div>
      ))}
    </div>

  </div>

  )

}

