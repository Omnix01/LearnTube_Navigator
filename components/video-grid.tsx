import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import type { VideoType } from "@/lib/types"

interface VideoGridProps {
  videos: VideoType[]
}

export default function VideoGrid({ videos }: VideoGridProps) {
  if (!videos.length) {
    return (
      <div className="mt-8 text-center">
        <p className="text-muted-foreground">No videos found for the selected filters.</p>
      </div>
    )
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.map((video) => (
        <Link key={video.id} href={`/watch/${video.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video relative">
              <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
              <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1 py-0.5 text-xs text-white">
                {video.duration}
              </div>
            </div>
            <CardContent className="p-3">
              <h3 className="line-clamp-2 font-medium">{video.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{video.channel}</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{video.views} views</span>
                <span>•</span>
                <span>{video.uploadedAt}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

