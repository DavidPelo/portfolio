import { type NextPage } from 'next'
import ComingSoon from '../components/ComingSoon'

function App() {
  const underConstruction = true

  return (
    <>
      {underConstruction && <ComingSoon />}
    </>
  )
}

export default App
