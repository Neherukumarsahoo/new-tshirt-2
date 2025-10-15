import { createContext, useContext, useMemo, useState } from 'react'

export type PartKey = 'body' | 'neck' | 'neckBorder' | 'cuff' | 'buttons' | 'ribbedHem'

export type PartColorState = Record<PartKey, string>

const defaultColors: PartColorState = {
  body: '#ffffff',
  neck: '#ffffff',
  neckBorder: '#000000',
  cuff: '#ffffff',
  buttons: '#000000',
  ribbedHem: '#ffffff',
}

interface Ctx {
  colors: PartColorState
  setColor: (part: PartKey, hex: string) => void
  reset: () => void
}

const Ctx = createContext<Ctx | null>(null)

export function DesignerProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<PartColorState>(defaultColors)

  const setColor = (part: PartKey, hex: string) => {
    setColors((c) => ({ ...c, [part]: hex }))
  }

  const reset = () => setColors(defaultColors)

  const value = useMemo(() => ({ colors, setColor, reset }), [colors])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useDesigner = () => {
  const v = useContext(Ctx)
  if (!v) throw new Error('useDesigner must be used within DesignerProvider')
  return v
}
