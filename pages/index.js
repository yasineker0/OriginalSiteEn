import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kısa Bir Mola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Abov!" />
        <p className="description">
          <code>Deneyiminizi iyileştirmek adına kısacık bir mola veriyoruz.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
