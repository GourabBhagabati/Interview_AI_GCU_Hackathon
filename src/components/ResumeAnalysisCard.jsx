import { BadgeCheck, Sparkles } from "lucide-react"

export default function ResumeAnalysisCard({ analysis }) {

  if (!analysis) return null

  return (

  <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-[0_22px_55px_rgba(15,23,42,0.9)] space-y-4">

    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-slate-950 text-sm font-semibold shadow-lg shadow-teal-500/40">
          {analysis.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-50">
            {analysis.name}
          </p>
          <p className="text-xs text-slate-400">
            {analysis.experience}
          </p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-[11px] font-medium text-teal-200">
        <BadgeCheck className="h-3 w-3" />
        JD match {analysis.matchScore}%
      </span>
    </div>

    <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
      <div>
        <p className="text-slate-400 mb-1">
          Role
        </p>
        <p>{analysis.role}</p>
      </div>
      <div>
        <p className="text-slate-400 mb-1">
          Education
        </p>
        <p>{analysis.education}</p>
      </div>
      <div className="col-span-2">
        <p className="text-slate-400 mb-1">
          Skills detected
        </p>
        <div className="flex flex-wrap gap-1.5">
          {analysis.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-800/80 border border-slate-700 px-2 py-0.5 text-[11px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-3 text-[11px] text-slate-300 flex gap-2">
      <span className="mt-0.5 text-slate-400">
        <Sparkles className="h-3 w-3" />
      </span>
      <p>
        {analysis.summary}
      </p>
    </div>

  </div>

  )

}

