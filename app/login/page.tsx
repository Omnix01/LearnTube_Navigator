"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PlaySquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/auth"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      await login(email, password)
      router.push("/")
      router.refresh()
    } catch (err) {
      setError("Invalid email or password")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-red-600">
            <PlaySquare className="h-8 w-8 fill-red-600" />
            <span>LearnTube Navigator</span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold">Sign in to your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Or{" "}
            <Link href="/signup" className="font-medium text-red-600 hover:text-red-500">
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{error}</div>}

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-muted-foreground hover:text-foreground">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  )
}

