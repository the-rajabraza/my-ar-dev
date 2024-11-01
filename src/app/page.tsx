import type { Metadata } from 'next'
import ARDevelopersLanding from './components/ARDevelopersLanding'

export const metadata: Metadata = {
  title: 'AR Developers',
  description: 'AR Developers Landing Page',
}


export default function Home() {
  return <ARDevelopersLanding />
}
