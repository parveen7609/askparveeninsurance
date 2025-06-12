import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ASKPARVEENINSURANCE - All-in-One Insurance Solutions</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <iframe
          src="/fl-project.html"
          title="ASKPARVEENINSURANCE"
          className="w-full h-screen border-0"
        ></iframe>
      </main>
    </>
  );
}
