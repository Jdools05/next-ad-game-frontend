

export default function Leaderboard({data}) {
    for (let i = 0; i < data.length; i++) {
        data[i].score = Number(data[i].score);
        data[i].name = data[i].name || 'Anonymous';
    }
    data = data.sort((a, b) => b.score - a.score);
    return (
        <table className="table table-striped">
            <thead>
            <tr key="thread">
                <th scope="col" key="Rank">Rank</th>
                <th scope="col" key="Name">Name</th>
                <th scope="col" key="Score">Score</th>
            </tr>
            </thead>
            <tbody key="Body">
            {data.map((item, index) => (
                item.rank = index + 1,
                <tr key={"id" + index}>
                    <th scope="row" key={"id" + index + "rank" + item.rank}>{item.rank}</th>
                    <td key={"id" + index + "name" + item.name}>{item.name}</td>
                    <td key={"id" + index + "score" + item.score}>{item.score}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}