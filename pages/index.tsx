import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Gallery = dynamic(() => import("./gallery"), { ssr: false })

const Home: NextPage = () => {
  return <Gallery />
}

export default Home
