import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, BarChart, Users } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Develop Your Emotional Intelligence
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Interactive exercises and realistic simulations to help you understand emotions, build empathy, and
                    improve your social skills.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/journey">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                      Start Your Journey
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                width={550}
                height={550}
                alt="Emotional Intelligence Concept"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHh4eIR4hHh4mIiAmIR4eHiUmLDI2JR4eKjU9MTU+QUJBIzpMUFVLVFJfTUH/2wBDAR"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-800">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How EmotionIQ Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our science-backed approach helps you develop emotional intelligence through practice and feedback.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 h-24 w-24 text-teal-600/20">
                  <BookOpen className="h-full w-full" />
                </div>
                <CardHeader>
                  <CardTitle>Interactive Exercises</CardTitle>
                  <CardDescription>
                    Practice recognizing emotions and responding appropriately through guided exercises.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our exercises are designed by psychologists to target specific emotional intelligence skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/exercises" className="w-full">
                    <Button variant="ghost" className="w-full">
                      Try an Exercise
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 h-24 w-24 text-teal-600/20">
                  <Users className="h-full w-full" />
                </div>
                <CardHeader>
                  <CardTitle>Realistic Simulations</CardTitle>
                  <CardDescription>
                    Experience real-world scenarios that challenge your emotional intelligence in a safe environment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our simulations mimic real-life situations at work, home, and social settings.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/simulations" className="w-full">
                    <Button variant="ghost" className="w-full">
                      Start a Simulation
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute right-2 top-2 h-24 w-24 text-teal-600/20">
                  <BarChart className="h-full w-full" />
                </div>
                <CardHeader>
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>
                    Monitor your growth with detailed analytics and personalized insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    See how your emotional intelligence improves over time with our comprehensive tracking system.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/progress" className="w-full">
                    <Button variant="ghost" className="w-full">
                      View Your Progress
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Content</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our most popular exercises and simulations.
                </p>
              </div>
            </div>
            <Tabs defaultValue="exercises" className="mt-8 w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="exercises">Exercises</TabsTrigger>
                <TabsTrigger value="simulations">Simulations</TabsTrigger>
              </TabsList>
              <TabsContent value="exercises" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Emotion Recognition",
                      description: "Learn to identify emotions from facial expressions and body language.",
                      level: "Beginner",
                      time: "10 min",
                      progress: 0,
                      image: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?auto=format&fit=crop&w=800&q=80",
                      link: "/exercises/emotion-recognition",
                    },
                    {
                      title: "Active Listening",
                      description: "Practice the art of truly hearing what others are communicating.",
                      level: "Intermediate",
                      time: "15 min",
                      progress: 30,
                      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80",
                      link: "/exercises/active-listening",
                    },
                    {
                      title: "Self-Awareness",
                      description: "Develop your ability to understand your own emotions and reactions.",
                      level: "Beginner",
                      time: "12 min",
                      progress: 0,
                      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
                      link: "/exercises/self-awareness",
                    },
                  ].map((exercise, index) => (
                    <Card key={index}>
                      <CardHeader className="p-0">
                        <div className="relative h-48 w-full">
                          <Image
                            src={exercise.image || "/placeholder.svg"}
                            alt={exercise.title}
                            fill
                            className="object-cover rounded-t-lg"
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
                        <Link href={exercise.link} className="w-full">
                          <Button className="w-full">{exercise.progress > 0 ? "Continue" : "Start"} Exercise</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="simulations" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Difficult Conversation",
                      description: "Navigate a challenging workplace discussion with empathy and clarity.",
                      level: "Intermediate",
                      time: "25 min",
                      progress: 0,
                      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
                      link: "/simulations/difficult-conversation",
                    },
                    {
                      title: "Conflict Resolution",
                      description: "Mediate a dispute between team members with different perspectives.",
                      level: "Advanced",
                      time: "30 min",
                      progress: 15,
                      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
                      link: "/simulations/conflict-resolution",
                    },
                    {
                      title: "Emotional Support",
                      description: "Provide comfort to someone experiencing a personal challenge.",
                      level: "Intermediate",
                      time: "20 min",
                      progress: 45,
                      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
                      link: "/simulations/emotional-support",
                    },
                  ].map((simulation, index) => (
                    <Card key={index}>
                      <CardHeader className="p-0">
                        <div className="relative h-48 w-full">
                          <Image
                            src={simulation.image || "/placeholder.svg"}
                            alt={simulation.title}
                            fill
                            className="object-cover rounded-t-lg"
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
                        <Link href={simulation.link} className="w-full">
                          <Button className="w-full">
                            {simulation.progress > 0 ? "Continue" : "Start"} Simulation
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  See How EmotionIQ Has Helped Others
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our users have experienced significant improvements in their personal and professional relationships.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-semibold">John Doe</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</div>
                        <div className="text-sm mt-2">
                          "EmotionIQ has transformed how I interact with my team. I'm now able to recognize when someone
                          is struggling and provide appropriate support."
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" alt="User" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-semibold">Sarah Johnson</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Healthcare Professional</div>
                        <div className="text-sm mt-2">
                          "The simulations helped me practice difficult conversations before having them in real life.
                          My patients have noticed the difference in my communication style."
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
