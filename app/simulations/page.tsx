import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Home, Filter, Clock, BarChart } from "lucide-react"
import Image from "next/image"

export default function SimulationsPage() {
  const simulationCategories = [
    {
      id: "all",
      name: "All Simulations",
    },
    {
      id: "workplace",
      name: "Workplace",
    },
    {
      id: "personal",
      name: "Personal Relationships",
    },
    {
      id: "conflict",
      name: "Conflict Resolution",
    },
    {
      id: "leadership",
      name: "Leadership",
    },
  ]

  const simulations = [
    {
      id: "difficult-conversation",
      title: "Difficult Conversation",
      description: "Navigate a challenging workplace discussion with empathy and clarity.",
      category: "workplace",
      level: "Intermediate",
      time: "25 min",
      progress: 0,
      image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "conflict-resolution",
      title: "Conflict Resolution",
      description: "Mediate a dispute between team members with different perspectives.",
      category: "conflict",
      level: "Advanced",
      time: "30 min",
      progress: 15,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "emotional-support",
      title: "Emotional Support",
      description: "Provide comfort to someone experiencing a personal challenge.",
      category: "personal",
      level: "Intermediate",
      time: "20 min",
      progress: 45,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "leadership-feedback",
      title: "Leadership Feedback",
      description: "Deliver constructive feedback as a leader to help team members grow.",
      category: "leadership",
      level: "Advanced",
      time: "35 min",
      progress: 0,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "negotiation",
      title: "Negotiation",
      description: "Practice finding win-win solutions in challenging negotiations.",
      category: "workplace",
      level: "Advanced",
      time: "40 min",
      progress: 10,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "personal-boundaries",
      title: "Setting Boundaries",
      description: "Learn to establish healthy boundaries in personal relationships.",
      category: "personal",
      level: "Intermediate",
      time: "25 min",
      progress: 0,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6 text-teal-600" />
            <span>EmotionIQ</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/exercises" className="text-sm font-medium hover:underline underline-offset-4">
              Exercises
            </Link>
            <Link href="/simulations" className="text-sm font-medium text-teal-600 underline underline-offset-4">
              Simulations
            </Link>
            <Link href="/progress" className="text-sm font-medium hover:underline underline-offset-4">
              Progress
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:underline underline-offset-4">
              Resources
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-2">
            <Link href="/auth/signin">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-12">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button variant="outline" size="icon">
                <Home className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Simulations</h1>
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
                    {simulationCategories.map((category) => (
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
                    Difficulty Levels
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
                    {["Under 25 min", "25-35 min", "Over 35 min"].map((duration) => (
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
                {simulations.map((simulation) => (
                  <Card key={simulation.id}>
                    <CardHeader className="p-0">
                      <div className="relative h-48 w-full">
                        <Image
                          src={simulation.image}
                          alt={simulation.title}
                          fill
                          className="object-cover rounded-t-lg"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHh4eIR4hHh4mIiAmIR4eHiUmLDI2JR4eKjU9MTU+QUJBIzpMUFVLVFJfTUH/2wBDAR"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle>{simulation.title}</CardTitle>
                      <CardDescription className="mt-2">{simulation.description}</CardDescription>
                      <div className="flex justify-between text-sm mt-4 mb-2">
                        <span className="text-gray-500">Level: {simulation.level}</span>
                        <span className="text-gray-500">{simulation.time}</span>
                      </div>
                      <Progress value={simulation.progress} className="h-2" />
                    </CardContent>
                    <CardFooter>
                      <Link href={`/simulations/${simulation.id}`} className="w-full">
                        <Button className="w-full">{simulation.progress > 0 ? "Continue" : "Start"} Simulation</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-teal-600" />
            <p className="text-sm leading-loose text-center md:text-left">© 2023 EmotionIQ. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
