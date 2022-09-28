import Head from "next/head";
import PostPreview from "../components/PostPreview";
import useSWR from "swr";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR("/api/staticdata", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

  console.log("these are my Home() props", data);
  //🚩🚩🚩 SWR data response must be parsed (using "JSON.parse()") 🚩🚩🚩
  const { posts } = JSON.parse(data);
  console.log("these are my posts", posts[0].title);
  return (
    <div className="container">
      <Head>
        <title>THE CITY & THE CITY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside>
        <a href="https://www.buymeacoffee.com/jackcorso" className="card">
          <h3>Support the publication &rarr;</h3>
          <p>Help offset the cost of ink and paper.</p>
        </a>
        <div className="prevIssuesContainer">
          <h3>Previous Issues</h3>
          {posts.slice(0, 3).map((post, index) => (
            <PostPreview key={index} title={post.title} body={post.text} />
          ))}
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
