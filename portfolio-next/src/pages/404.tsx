import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function CatchAll() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/').catch(() => console.log('oops'))
  })

  return null
}
