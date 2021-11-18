import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Context, { useCullyContext } from '../lib/context'
import Controls from '../components/controls'
const Canvas = dynamic(() => import("../components/canvas"), { ssr: false })

import { PRIMARY_COLOR } from '../lib/constants'

const Index: NextPage = () => {
  return (
    <Context.Provider value={useCullyContext(process.env.NEXT_PUBLIC_API_URL!)}>
      <main style={{ borderColor: PRIMARY_COLOR }} className="cully__main">
        <Canvas />
        <Controls />
      </main>
    </Context.Provider>
  )
}

export default Index
