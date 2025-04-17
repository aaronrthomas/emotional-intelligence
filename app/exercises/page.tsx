import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Filter, Clock, BarChart } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ExercisesPage() {
  const exerciseCategories = [
    {
      id: "all",
      name: "All Exercises",
    },
    {
      id: "emotion-recognition",
      name: "Emotion Recognition",
    },
    {
      id: "active-listening",
      name: "Active Listening",
    },
    {
      id: "empathy",
      name: "Empathy Building",
    },
    {
      id: "self-awareness",
      name: "Self-Awareness",
    },
  ]

  const exercises = [
    {
      id: "emotion-recognition",
      title: "Emotion Recognition",
      description: "Learn to identify emotions from facial expressions and body language.",
      category: "emotion-recognition",
      level: "Beginner",
      time: "10 min",
      progress: 0,
      image: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?auto=format&fit=crop&w=800&q=80&blur=3",
    },
    {
      id: "active-listening",
      title: "Active Listening",
      description: "Practice the art of truly hearing what others are communicating.",
      category: "active-listening",
      level: "Intermediate",
      time: "15 min",
      progress: 30,
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8",
    },
    {
      id: "empathy-building",
      title: "Empathy Building",
      description: "Develop your ability to understand others' perspectives and feelings.",
      category: "empathy",
      level: "Advanced",
      time: "20 min",
      progress: 60,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    },
    {
      id: "self-awareness",
      title: "Self-Awareness Check",
      description: "Identify your own emotions and understand how they affect your behavior.",
      category: "self-awareness",
      level: "Beginner",
      time: "12 min",
      progress: 45,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
    },
    {
      id: "emotion-regulation",
      title: "Emotion Regulation",
      description: "Learn techniques to manage strong emotions effectively.",
      category: "self-awareness",
      level: "Intermediate",
      time: "18 min",
      progress: 0,
      image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6",
    },
    {
      id: "nonverbal-cues",
      title: "Nonverbal Communication",
      description: "Understand body language and other nonverbal cues in communication.",
      category: "emotion-recognition",
      level: "Advanced",
      time: "25 min",
      progress: 15,
      image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Exercises</h1>
            <Link href="/journey">
              <Button>Start Your Journey</Button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {exerciseCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`#${category.id}`}
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <span>{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    Skill Levels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                      <div
                        key={level}
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <span>{level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Under 15 min", "15-20 min", "Over 20 min"].map((duration) => (
                      <div
                        key={duration}
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <span>{duration}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-3/4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {exercises.map((exercise) => (
                  <Card key={exercise.id}>
                    <CardHeader className="p-0">
                      <div className="relative h-48 w-full">
                        <Image
                          src={exercise.image}
                          alt={exercise.title}
                          fill
                          className="object-cover rounded-t-lg"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHh4eIR4hHh4mIiAmIR4eHiUmLDI2JR4eKjU9MTU+QUJBIzpMUFVLVFJfTUH/2wBDAR"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle>{exercise.title}</CardTitle>
                      <CardDescription className="mt-2">{exercise.description}</CardDescription>
                      <div className="flex justify-between text-sm mt-4 mb-2">
                        <span className="text-gray-500">Level: {exercise.level}</span>
                        <span className="text-gray-500">{exercise.time}</span>
                      </div>
                      <Progress value={exercise.progress} className="h-2" />
                    </CardContent>
                    <CardFooter>
                      <Link href={`/exercises/${exercise.id}`} className="w-full">
                        <Button className="w-full">{exercise.progress > 0 ? "Continue" : "Start"} Exercise</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
