"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { updateProfile, getSession, logout } from "@/lib/auth"

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string; examPreference?: string } | null>(null)
  const [examPreference, setExamPreference] = useState<string>("JEE")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchUserData() {
      const session = await getSession()
      if (!session) {
        router.push("/login")
        return
      }

      setUser(session.user)
      if (session.user.examPreference) {
        setExamPreference(session.user.examPreference)
      }
    }

    fetchUserData()
  }, [router])

  async function handleUpdateProfile() {
    setIsLoading(true)
    try {
      await updateProfile({ examPreference })
      router.refresh()
      router.push("/")
    } catch (error) {
      console.error("Failed to update profile", error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleLogout() {
    await logout()
    router.push("/login")
    router.refresh()
  }

  if (!user) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>
  }

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <User className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-center text-2xl">{user.name}</CardTitle>
          <CardDescription className="text-center">{user.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-lg font-medium">Exam Preference</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Select your exam to see relevant videos on the homepage
              </p>

              <RadioGroup value={examPreference} onValueChange={setExamPreference}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="JEE" id="jee" />
                  <Label htmlFor="jee">JEE (Joint Entrance Examination)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="CAT" id="cat" />
                  <Label htmlFor="cat">CAT (Common Admission Test)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="CUET" id="cuet" />
                  <Label htmlFor="cuet">CUET (Common University Entrance Test)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-red-600 hover:bg-red-700" onClick={handleUpdateProfile} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Preferences"}
          </Button>
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            Sign out
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

