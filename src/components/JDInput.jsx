import { FileText } from "lucide-react"

export default function JDInput({ value, onChange }) {

  return (

  <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)] space-y-3">

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-800 text-slate-100 border border-slate-700">
          <FileText className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Job description
          </p>
          <p className="text-sm text-slate-100">
            Paste the role you’re hiring for
          </p>
        </div>
      </div>
    </div>

    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      rows={5}
      placeholder="Senior Backend Engineer · Own critical services, collaborate with product and design, work with Java / Spring Boot / PostgreSQL and modern cloud infrastructure..."
      className="mt-2 w-full resize-none rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400/60 focus:border-teal-400/60"
    />

  </div>

  )

}

