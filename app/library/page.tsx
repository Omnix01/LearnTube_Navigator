import { redirect } from "next/navigation"

import { getSession } from "@/lib/auth"
import { getLibraryVideos } from "@/lib/videos"
import VideoGrid from "@/components/video-grid"
import Sidebar from "@/components/sidebar"
import AccountButton from "@/components/account-button"

export default async function LibraryPage() {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  const videos = await getLibraryVideos()

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activePage="library" />

      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Your Library</h1>
            <AccountButton user={session.user} />
          </div>

          <p className="mb-6 text-muted-foreground">Videos you've saved for later</p>

          <VideoGrid videos={videos} />
        </div>
      </main>
    </div>
  )
}

