"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { getSubjectsByExam } from "@/lib/videos"

interface SubjectFilterProps {
  examType: string
}

export default function SubjectFilter({ examType }: SubjectFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [subjects, setSubjects] = useState<string[]>([])
  const currentSubject = searchParams.get("subject") || "all"

  useEffect(() => {
    async function loadSubjects() {
      const subjectList = await getSubjectsByExam(examType)
      setSubjects(subjectList)
    }

    loadSubjects()
  }, [examType])

  function handleSubjectChange(subject: string) {
    const params = new URLSearchParams(searchParams)
    if (subject === "all") {
      params.delete("subject")
    } else {
      params.set("subject", subject)
    }
    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="mb-6 overflow-x-auto pb-2">
      <div className="flex gap-2">
        <Button
          variant={currentSubject === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => handleSubjectChange("all")}
          className={currentSubject === "all" ? "bg-red-600 hover:bg-red-700" : ""}
        >
          All
        </Button>

        {subjects.map((subject) => (
          <Button
            key={subject}
            variant={currentSubject === subject ? "default" : "outline"}
            size="sm"
            onClick={() => handleSubjectChange(subject)}
            className={currentSubject === subject ? "bg-red-600 hover:bg-red-700" : ""}
          >
            {subject}
          </Button>
        ))}
      </div>
    </div>
  )
}

