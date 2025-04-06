import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import { getVideosByExam } from "@/lib/videos"
import VideoGrid from "@/components/video-grid"
import SubjectFilter from "@/components/subject-filter"
import Sidebar from "@/components/sidebar"
import AccountButton from "@/components/account-button"

export default async function HomePage() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  const { examPreference = "JEE" } = session.user || {}
  const videos = await getVideosByExam(examPreference)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activePage="home" />

      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">{examPreference} Preparation Videos</h1>
            <AccountButton user={session.user} />
          </div>

          <SubjectFilter examType={examPreference} />

          <VideoGrid videos={videos} />
        </div>
      </main>
    </div>
  )
}

