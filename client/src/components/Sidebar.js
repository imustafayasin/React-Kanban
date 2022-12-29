import React, { useEffect, useState } from "react"

export default function Sidebar() {
    const [board, setBoard] = useState(["2"]);

    useEffect(() => {
        alert("sd");
    }, [board])
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <div class="boards">
                {board.map(t =>
                    <h2 data-attr={t}>{t}</h2>
                )}
            </div>
            <button onClick={() => setBoard([...board, "3"])}>Add board</button>
        </div>
    )
}