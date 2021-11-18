import { useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Context, { useCullyContext } from '../lib/context'
import Controls from '../components/controls'
const Canvas = dynamic(() => import("../components/canvas"), { ssr: false })

import { PRIMARY_COLOR } from '../lib/constants'

const Index: NextPage = () => {
  const context = useCullyContext(process.env.NEXT_PUBLIC_API_URL!)
  const main = useRef()

  useEffect(() => {
    if (!main.current) return

    main.current.focus()
  }, [main])

  return (
    <Context.Provider value={context}>
      <main
        ref={main}
        style={{ borderColor: PRIMARY_COLOR }} className="cully__main"
        tabIndex="0"
        onKeyDown={({ which }: MouseEvent) => {
          switch(which) {
            case 37: context.hasPrev && context.prev(); break
            case 39: context.hasNext && context.next(); break
          }
        }}
      >
        <Canvas />
        <Controls />
      </main>
    </Context.Provider>
  )
}

export default Index
