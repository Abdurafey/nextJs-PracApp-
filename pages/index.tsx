import Link from 'next/link' 
import { Header } from '@/components'


const Home = () => {
  return (
    <>
      <Header/>
      <h1>Hello from next</h1>
      <Link href='/blog'>Go to Blog</Link>
      <Link href='./counter'>Go to Counter page</Link>
    </>
  )
}

export default Home