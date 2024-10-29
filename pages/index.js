// pages/index.js
import { getExampleData } from "../lib/api"
import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getExampleData()
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Next.js와 Render API 연동 예제</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </div>
  )
}
