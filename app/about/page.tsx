import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BookOpen, Users, BarChart, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function About() {
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
            <Link href="/simulations" className="text-sm font-medium hover:underline underline-offset-4">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About EmotionIQ</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mission is to help people develop emotional intelligence skills through interactive learning and
                practice.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                width={550}
                height={550}
                alt="Team collaborating in modern office"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Emotional Intelligence Matters</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Emotional intelligence is the ability to understand, use, and manage your emotions in positive ways to
                  relieve stress, communicate effectively, empathize with others, overcome challenges, and defuse
                  conflict.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Research shows that people with high emotional intelligence have better relationships, perform better
                  at work, and are generally happier and more fulfilled.
                </p>
                <div className="pt-4">
                  <Link href="/auth/signup">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Start Developing Your EQ <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Our Approach</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                EmotionIQ uses a science-backed methodology to help you develop emotional intelligence skills.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Understand the core concepts of emotional intelligence through interactive lessons and resources.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {["Self-awareness", "Self-regulation", "Motivation", "Empathy", "Social skills"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Practice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Apply what you've learned through interactive exercises and realistic simulations.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Emotion recognition",
                      "Active listening",
                      "Empathy building",
                      "Conflict resolution",
                      "Stress management",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Improve</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Track your progress and receive personalized recommendations to continuously improve your skills.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Skill assessments",
                      "Progress tracking",
                      "Personalized feedback",
                      "Achievement system",
                      "Continuous learning",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of others who are developing their emotional intelligence with EmotionIQ.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Create Free Account
                </Button>
              </Link>
              <Link href="/exercises">
                <Button size="lg" variant="outline">
                  Explore Exercises
                </Button>
              </Link>
            </div>
          </div>
        </section>
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
