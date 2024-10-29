// frontend/pages/index.js
import { useState } from "react"
import { createGroup, matchManitto } from "../lib/api"

export default function Home() {
  const [groupName, setGroupName] = useState("")
  const [groupId, setGroupId] = useState("")

  const handleCreateGroup = async () => {
    try {
      const response = await createGroup(groupName)
      setGroupId(response.data._id)
      alert("그룹이 생성되었습니다.")
    } catch (error) {
      console.error(error)
    }
  }

  const handleMatchManitto = async () => {
    try {
      await matchManitto(groupId)
      alert("매칭이 완료되었습니다.")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>마니또 서비스</h1>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="그룹 이름"
      />
      <button onClick={handleCreateGroup}>그룹 생성</button>

      {groupId && (
        <div>
          <button onClick={handleMatchManitto}>마니또 매칭</button>
        </div>
      )}
    </div>
  )
}
