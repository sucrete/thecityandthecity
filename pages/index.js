import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>THE CITY & THE CITY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside>
        <a href="https://www.buymeacoffee.com/jackcorso" className="card">
          <h3>Support the Paper &rarr;</h3>
          <p>Help pay for ink and paper. Thank you!</p>
        </a>
        <div class="prevIssuesContainer">
          <h3>Previous Issues</h3>
        </div>
      </aside>
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid"></div>
      </main>
    </div>
  );
}
