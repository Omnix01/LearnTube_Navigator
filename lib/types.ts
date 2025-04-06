export interface VideoType {
  id: string
  youtubeId: string
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
  likes: string
  uploadedAt: string
  channel: string
  channelThumbnail?: string
  subscribers: string
  examType: string
  subject: string
  commentCount: number
  comments?: {
    userName: string
    userAvatar?: string
    text: string
    time: string
  }[]
}

