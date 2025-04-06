"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PlaySquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "@/lib/auth"

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      await signup(name, email, password)
      router.push("/profile")
      router.refresh()
    } catch (err) {
      setError("Failed to create account. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-red-600">
            <PlaySquare className="h-8 w-8 fill-red-600" />
            <span>EduTube</span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold">Create your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-red-600 hover:text-red-500">
              Sign in
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{error}</div>}

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Enter your full name"
              />
            </div>

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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Create a password"
                minLength={8}
              />
              <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-foreground">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

