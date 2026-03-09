import { UploadCloud } from "lucide-react"

export default function ResumeUploader({ file, onFileChange }) {

  const handleFile = (event) => {
    const next = event.target.files?.[0]
    if (next && onFileChange) onFileChange(next)
  }

  const labelText = file ? file.name : "Drop a resume PDF/DOC here or click to browse"

  return (

  <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.85)] space-y-3">

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-slate-800 text-slate-100 border border-slate-700">
          <UploadCloud className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Resume
          </p>
          <p className="text-sm text-slate-100">
            Upload a candidate CV for analysis
          </p>
        </div>
      </div>
    </div>

    <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 px-4 py-6 text-center text-xs text-slate-400 transition hover:border-teal-400/60 hover:text-teal-200 hover:bg-slate-950/90">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFile}
      />
      <p className="mb-1 font-medium text-slate-200">
        {labelText}
      </p>
      <p className="text-[11px] text-slate-500">
        We’ll simulate parsing · files never leave this demo
      </p>
    </label>

  </div>

  )

}

