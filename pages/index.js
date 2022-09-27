import Head from 'next/head'
import Leaderboard from "@components/Leaderboard";
import Navbar from "@components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <Head>
                    <title>Next.js Starter!</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <Leaderboard data={[{name: "HI", score: 10}, {name: "Frank", score: 11}, {name: "James", score: 1}, {
                    name: "Bob",
                    score: 10
                }]}/>
            </div>
        </div>
    );
}
