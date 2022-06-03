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
        <Header title="Yapım Aşaması" />
        <p className="description">
          <code>Merhaba, web sitesi şu anda yapım aşamasında. Daha sonra tekrar kontrol edebilirsin.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
