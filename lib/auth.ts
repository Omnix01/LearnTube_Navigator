"use server"

import { cookies } from "next/headers"

// In a real application, you would use a proper authentication library
// and database for user management. This is a simplified version for demonstration.

type User = {
  id: string
  name: string
  email: string
  examPreference?: string
}

type Session = {
  user: User
}

// Mock user database
const USERS: Record<string, User> = {
  user1: {
    id: "user1",
    name: "John Doe",
    email: "john@example.com",
    examPreference: "JEE",
  },
  user2: {
    id: "user2",
    name: "Jane Smith",
    email: "jane@example.com",
    examPreference: "CAT",
  },
}

export async function signup(name: string, email: string, password: string) {
  // In a real app, you would hash the password and store in a database
  const userId = `user${Object.keys(USERS).length + 1}`

  USERS[userId] = {
    id: userId,
    name,
    email,
    examPreference: "JEE", // Default preference
  }

  // Create session
  const session = { user: USERS[userId] }
  const sessionStr = JSON.stringify(session)

  // Set cookie
  cookies().set("session", sessionStr, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return session
}

export async function login(email: string, password: string) {
  // In a real app, you would verify credentials against a database
  const user = Object.values(USERS).find((user) => user.email === email)

  if (!user) {
    throw new Error("Invalid credentials")
  }

  // Create session
  const session = { user }
  const sessionStr = JSON.stringify(session)

  // Set cookie
  cookies().set("session", sessionStr, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return session
}

export async function logout() {
  cookies().delete("session")
}

export async function getSession(): Promise<Session | null> {
  const sessionCookie = cookies().get("session")

  if (!sessionCookie) {
    return null
  }

  try {
    return JSON.parse(sessionCookie.value) as Session
  } catch {
    return null
  }
}

export async function updateProfile(data: { examPreference: string }) {
  const session = await getSession()

  if (!session) {
    throw new Error("Not authenticated")
  }

  // Update user in "database"
  const user = USERS[session.user.id]

  if (user) {
    user.examPreference = data.examPreference

    // Update session
    const updatedSession = { user }
    const sessionStr = JSON.stringify(updatedSession)

    // Update cookie
    cookies().set("session", sessionStr, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })
  }

  return { success: true }
}

