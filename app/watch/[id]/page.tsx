import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ThumbsUp, MessageSquare, Save, Flag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getVideoById, getRelatedVideos } from "@/lib/videos"
import VideoPlayer from "@/components/video-player"
import Sidebar from "@/components/sidebar"
import AccountButton from "@/components/account-button"
import { getSession } from "@/lib/auth"

interface WatchPageProps {
  params: {
    id: string
  }
}

export default async function WatchPage({ params }: WatchPageProps) {
  const session = await getSession()

  if (!session) {
    notFound()
  }

  const video = await getVideoById(params.id)

  if (!video) {
    notFound()
  }

  const relatedVideos = await getRelatedVideos(video.examType, video.subject, params.id)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activePage="" />

      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-6">
          <div className="mb-4 flex items-center justify-end">
            <AccountButton user={session.user} />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <VideoPlayer videoId={video.youtubeId} />

              <div className="mt-4 space-y-4">
                <h1 className="text-xl font-bold">{video.title}</h1>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={video.channelThumbnail || "/placeholder.svg?height=40&width=40"}
                        alt={video.channel}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">{video.channel}</p>
                        <p className="text-xs text-muted-foreground">{video.subscribers} subscribers</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Subscribe
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{video.likes}</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Save className="h-4 w-4" />
                      <span>Save</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span>{video.views} views</span>
                      <span className="mx-1">•</span>
                      <span>{video.uploadedAt}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">{video.examType}</span>
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">{video.subject}</span>
                    </div>
                  </div>

                  <div className="mt-4 text-sm">
                    <p>{video.description}</p>
                  </div>
                </div>

                <Separator />

                <Tabs defaultValue="comments">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="comments">Comments ({video.commentCount})</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                  </TabsList>
                  <TabsContent value="comments" className="mt-4 space-y-4">
                    {video.comments?.map((comment, index) => (
                      <div key={index} className="flex gap-3">
                        <Image
                          src={comment.userAvatar || "/placeholder.svg?height=32&width=32"}
                          alt={comment.userName}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{comment.userName}</span>
                            <span className="text-xs text-muted-foreground">{comment.time}</span>
                          </div>
                          <p className="text-sm">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="notes" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Take notes while watching this video. Your notes are private and saved to your account.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-semibold">Related Videos</h2>
              <div className="space-y-4">
                {relatedVideos.map((relatedVideo) => (
                  <Link key={relatedVideo.id} href={`/watch/${relatedVideo.id}`} className="flex gap-2">
                    <div className="relative h-24 w-40 flex-shrink-0">
                      <Image
                        src={relatedVideo.thumbnail || "/placeholder.svg"}
                        alt={relatedVideo.title}
                        fill
                        className="rounded-md object-cover"
                      />
                      <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-xs text-white">
                        {relatedVideo.duration}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="line-clamp-2 text-sm font-medium">{relatedVideo.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{relatedVideo.channel}</p>
                      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <span>{relatedVideo.views} views</span>
                        <span>•</span>
                        <span>{relatedVideo.uploadedAt}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

