import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yasin Eker</title>
      </Head>

      <main>
        <Header title="The construction phase" />
        <p className="description">
          <code>Hello, the website is currently under construction. You can check again later.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
