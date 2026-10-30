import { useState } from "react";
import "./App.css";

const CANDIDATES = [
  { id: 1, name: "candidate 01", color: "#3b0764" },
  { id: 2, name: "candidate 02", color: "#172554" },
  { id: 3, name: "candidate 03", color: "#4c0519" },
];

export default function App() {
  // useState: har candidate ke votes yaha store hain
  const [votes, setVotes] = useState({ 1: 0, 2: 0, 3: 0 });

  const vote = (id) => setVotes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  const reset = () => setVotes({ 1: 0, 2: 0, 3: 0 });

  return (
    <div className="page">
      <h1>Voting App</h1>

      <div className="panel">
        {CANDIDATES.map((c) => (
          <button key={c.id} style={{ background: c.color }} onClick={() => vote(c.id)}>
            Vote for {c.name}
          </button>
        ))}
      </div>

      {CANDIDATES.map((c) => (
        <div key={c.id} className="count" style={{ color: c.color, borderColor: c.color }}>
          Total votes for {c.name}: {votes[c.id]}
        </div>
      ))}

      <button className="reset" onClick={reset}>Reset Votes</button>
    </div>
  );
}
