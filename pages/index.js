// pages/index.js
import { useState } from "react"
import axios from "axios"

export default function Home() {
  const [name, setName] = useState("")
  const [selectedName, setSelectedName] = useState("")
  const [matchedName, setMatchedName] = useState("")

  const addUser = async () => {
    await axios.post("https://my-backend-bjo3.onrender.com", { name })
    setName("")
  }

  const matchUser = async () => {
    const response = await axios.post("https://my-backend-bjo3.onrender.com", {
      selectedName,
    })
    setMatchedName(response.data.matched)
  }

  return (
    <div>
      <h1>마니또 웹 서비스</h1>
      <h2>사용자 추가</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <button onClick={addUser}>추가</button>

      <h2>사용자 매칭</h2>
      <input
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
        placeholder="선택한 이름"
      />
      <button onClick={matchUser}>매칭</button>

      {matchedName && <h3>매칭된 사용자: {matchedName}</h3>}
    </div>
  )
}
