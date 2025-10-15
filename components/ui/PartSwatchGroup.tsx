'use client'

import { useDesigner } from '../state/DesignerProvider'

const PALETTE = ['#ffffff','#000000','#f87171','#60a5fa','#34d399','#fbbf24','#9ca3af','#1f2937','#a855f7','#f59e0b']

export default function PartSwatchGroup({
  label,
  part,
}: {
  label: string
  part: 'body'|'neck'|'neckBorder'|'cuff'|'buttons'|'ribbedHem'
}) {
  const { colors, setColor } = useDesigner()

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input
          type="text"
          value={colors[part]}
          onChange={(e)=>{
            const v = e.target.value.trim()
            if(/^#([0-9a-fA-F]{3}){1,2}$/.test(v)) setColor(part,v)
          }}
          className="w-24 h-9 px-2 text-sm border rounded"
        />
      </div>
      <div className="grid grid-cols-10 gap-2">
        {PALETTE.map((hex)=> (
          <button
            key={hex}
            onClick={()=>setColor(part,hex)}
            className={`h-8 rounded border ${colors[part]===hex?'ring-2 ring-blue-500':''}`}
            style={{ background: hex }}
            aria-label={`${label} color ${hex}`}
          />
        ))}
      </div>
    </div>
  )
}
