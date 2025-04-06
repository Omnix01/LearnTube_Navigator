"use server"

import type { VideoType } from "./types"

// Mock video data - in a real app, this would come from a database or API
const VIDEOS: VideoType[] = [
  {
    id: "1",
    youtubeId: "dQw4w9WgXcQ",
    title: "JEE Physics: Understanding Kinematics and Motion",
    description:
      "This comprehensive lecture covers the fundamentals of kinematics, including displacement, velocity, and acceleration. Perfect for JEE preparation.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "12:34",
    views: "245K",
    likes: "15K",
    uploadedAt: "2 weeks ago",
    channel: "JEE Physics Master",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "500K",
    examType: "JEE",
    subject: "Physics",
    commentCount: 324,
    comments: [
      {
        userName: "Physics Enthusiast",
        userAvatar: "/placeholder.svg?height=32&width=32",
        text: "This explanation of kinematics really helped me understand the concepts better. Thanks!",
        time: "3 days ago",
      },
      {
        userName: "JEE Aspirant 2023",
        userAvatar: "/placeholder.svg?height=32&width=32",
        text: "Could you please explain the difference between average velocity and instantaneous velocity?",
        time: "1 week ago",
      },
    ],
  },
  {
    id: "2",
    youtubeId: "dQw4w9WgXcQ",
    title: "JEE Chemistry: Organic Chemistry Fundamentals",
    description:
      "Learn the basics of organic chemistry including nomenclature, reactions, and mechanisms. Essential for JEE Main and Advanced.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "18:22",
    views: "189K",
    likes: "12K",
    uploadedAt: "1 month ago",
    channel: "Chemistry Simplified",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "420K",
    examType: "JEE",
    subject: "Chemistry",
    commentCount: 256,
    comments: [
      {
        userName: "Chemistry Lover",
        userAvatar: "/placeholder.svg?height=32&width=32",
        text: "Your explanation of reaction mechanisms is so clear! Thank you!",
        time: "2 weeks ago",
      },
    ],
  },
  {
    id: "3",
    youtubeId: "dQw4w9WgXcQ",
    title: "JEE Mathematics: Calculus Techniques",
    description:
      "Master calculus techniques for JEE with this detailed lecture covering differentiation, integration, and their applications.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "22:15",
    views: "320K",
    likes: "28K",
    uploadedAt: "3 weeks ago",
    channel: "Math Excellence",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "650K",
    examType: "JEE",
    subject: "Mathematics",
    commentCount: 412,
    comments: [],
  },
  {
    id: "4",
    youtubeId: "dQw4w9WgXcQ",
    title: "CAT Quantitative Aptitude: Number Systems",
    description:
      "Comprehensive coverage of number systems for CAT preparation, including properties, divisibility rules, and shortcuts.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "15:48",
    views: "178K",
    likes: "14K",
    uploadedAt: "1 month ago",
    channel: "CAT Prep Pro",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "380K",
    examType: "CAT",
    subject: "Quantitative Aptitude",
    commentCount: 198,
    comments: [],
  },
  {
    id: "5",
    youtubeId: "dQw4w9WgXcQ",
    title: "CAT Verbal Ability: Reading Comprehension Strategies",
    description:
      "Learn effective strategies for tackling reading comprehension passages in the CAT exam with practice examples.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "19:37",
    views: "145K",
    likes: "11K",
    uploadedAt: "2 months ago",
    channel: "Verbal Masters",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "290K",
    examType: "CAT",
    subject: "Verbal Ability",
    commentCount: 167,
    comments: [],
  },
  {
    id: "6",
    youtubeId: "dQw4w9WgXcQ",
    title: "CUET English: Literature Analysis Techniques",
    description:
      "Detailed analysis of literature passages for CUET English preparation with tips on answering questions effectively.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "14:22",
    views: "98K",
    likes: "8.5K",
    uploadedAt: "3 weeks ago",
    channel: "CUET English Expert",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "210K",
    examType: "CUET",
    subject: "English",
    commentCount: 124,
    comments: [],
  },
  {
    id: "7",
    youtubeId: "dQw4w9WgXcQ",
    title: "CUET General Knowledge: Current Affairs",
    description:
      "Stay updated with the latest current affairs for CUET General Knowledge section with this comprehensive lecture.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "16:55",
    views: "112K",
    likes: "9.2K",
    uploadedAt: "1 week ago",
    channel: "GK Master",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "240K",
    examType: "CUET",
    subject: "General Knowledge",
    commentCount: 145,
    comments: [],
  },
  {
    id: "8",
    youtubeId: "dQw4w9WgXcQ",
    title: "JEE Physics: Electromagnetism Complete Guide",
    description:
      "Complete guide to electromagnetism for JEE Physics, covering electric fields, magnetic fields, and electromagnetic induction.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "25:18",
    views: "275K",
    likes: "22K",
    uploadedAt: "1 month ago",
    channel: "JEE Physics Master",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "500K",
    examType: "JEE",
    subject: "Physics",
    commentCount: 287,
    comments: [],
  },
  // Additional CAT videos
  {
    id: "9",
    youtubeId: "dQw4w9WgXcQ",
    title: "CAT Data Interpretation: Tables and Graphs",
    description:
      "Learn how to quickly analyze and interpret data from tables and graphs for the CAT exam. Includes practice problems and shortcuts.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "23:45",
    views: "156K",
    likes: "13.2K",
    uploadedAt: "3 weeks ago",
    channel: "CAT Prep Pro",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "380K",
    examType: "CAT",
    subject: "Data Interpretation",
    commentCount: 178,
    comments: [],
  },
  {
    id: "10",
    youtubeId: "dQw4w9WgXcQ",
    title: "CAT Logical Reasoning: Syllogisms Masterclass",
    description:
      "Master syllogisms for the CAT exam with this comprehensive guide. Learn to solve complex logical reasoning problems efficiently.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "19:12",
    views: "132K",
    likes: "11.5K",
    uploadedAt: "1 month ago",
    channel: "Logic Masters",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "310K",
    examType: "CAT",
    subject: "Logical Reasoning",
    commentCount: 165,
    comments: [],
  },
  {
    id: "11",
    youtubeId: "dQw4w9WgXcQ",
    title: "CAT Verbal Ability: Para Jumbles Solved",
    description:
      "Detailed strategies for solving para jumbles in the CAT exam. Learn to identify connecting sentences and logical flow.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "17:38",
    views: "118K",
    likes: "9.8K",
    uploadedAt: "2 weeks ago",
    channel: "Verbal Masters",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "290K",
    examType: "CAT",
    subject: "Verbal Ability",
    commentCount: 142,
    comments: [],
  },
  // Additional CUET videos
  {
    id: "12",
    youtubeId: "dQw4w9WgXcQ",
    title: "CUET Mathematics: Algebra and Functions",
    description:
      "Comprehensive coverage of algebra and functions for CUET Mathematics. Includes solved examples and practice questions.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "21:34",
    views: "87K",
    likes: "7.6K",
    uploadedAt: "3 weeks ago",
    channel: "CUET Math Pro",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "180K",
    examType: "CUET",
    subject: "Mathematics",
    commentCount: 112,
    comments: [],
  },
  {
    id: "13",
    youtubeId: "dQw4w9WgXcQ",
    title: "CUET Science: Biology Fundamentals",
    description:
      "Essential biology concepts for CUET Science preparation. Covers cell biology, genetics, and human physiology.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "24:17",
    views: "92K",
    likes: "8.1K",
    uploadedAt: "1 month ago",
    channel: "Science Simplified",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "195K",
    examType: "CUET",
    subject: "Science",
    commentCount: 128,
    comments: [],
  },
  {
    id: "14",
    youtubeId: "dQw4w9WgXcQ",
    title: "CUET History: Modern India Complete Guide",
    description:
      "Comprehensive coverage of Modern Indian history for CUET preparation. Includes important events, movements, and personalities.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "28:52",
    views: "104K",
    likes: "9.3K",
    uploadedAt: "2 weeks ago",
    channel: "History Hub",
    channelThumbnail: "/placeholder.svg?height=40&width=40",
    subscribers: "220K",
    examType: "CUET",
    subject: "History",
    commentCount: 156,
    comments: [],
  },
]

// Get trending videos across all exam types
export async function getTrendingVideos(): Promise<VideoType[]> {
  // In a real app, this would be based on view counts, likes, or other metrics
  // For this demo, we'll just return a mix of videos from different exams
  return VIDEOS.sort(() => 0.5 - Math.random()).slice(0, 8)
}

// Get saved/library videos for a user
export async function getLibraryVideos(): Promise<VideoType[]> {
  // In a real app, this would fetch videos saved by the user from a database
  // For this demo, we'll just return a subset of videos
  return VIDEOS.filter((_, index) => index % 3 === 0)
}

export async function getVideosByExam(examType: string, subject?: string): Promise<VideoType[]> {
  // In a real app, this would query a database
  let filteredVideos = VIDEOS.filter((video) => video.examType === examType)

  if (subject && subject !== "all") {
    filteredVideos = filteredVideos.filter((video) => video.subject === subject)
  }

  return filteredVideos
}

export async function getSubjectsByExam(examType: string): Promise<string[]> {
  // In a real app, this would query a database
  const subjects = new Set<string>()

  VIDEOS.filter((video) => video.examType === examType).forEach((video) => subjects.add(video.subject))

  return Array.from(subjects)
}

export async function getVideoById(id: string): Promise<VideoType | null> {
  // In a real app, this would query a database
  return VIDEOS.find((video) => video.id === id) || null
}

export async function getRelatedVideos(
  examType: string,
  subject: string,
  currentVideoId: string,
): Promise<VideoType[]> {
  // In a real app, this would query a database with more sophisticated recommendation logic
  return VIDEOS.filter(
    (video) => video.id !== currentVideoId && (video.examType === examType || video.subject === subject),
  ).slice(0, 5)
}

