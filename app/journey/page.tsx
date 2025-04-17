"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Brain, CheckCircle, Home, Info, Lightbulb, Target } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

export default function JourneyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const steps = [
    {
      title: "Welcome to Your Emotional Intelligence Journey",
      description:
        "Emotional intelligence is the ability to understand and manage your emotions, and to recognize and influence the emotions of others. This journey will help you develop these crucial skills.",
      image: "/images/journey-welcome.jpg",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to EmotionIQ! We're excited to guide you on your journey to developing stronger emotional
            intelligence skills. This personalized path will help you:
          </p>
          <ul className="space-y-2">
            {[
              "Recognize and understand emotions in yourself and others",
              "Develop stronger empathy and interpersonal skills",
              "Manage difficult emotions effectively",
              "Improve your communication in personal and professional relationships",
              "Build resilience and emotional well-being",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 dark:text-gray-400">
            Your journey is personalized based on your goals and current skills. Let's get started!
          </p>
        </div>
      ),
    },
    {
      title: "Assess Your Current Skills",
      description:
        "Before we begin, let's understand your current emotional intelligence strengths and areas for growth.",
      image: "/images/journey-assessment.jpg",
      content: (
        <div className="space-y-4">
          <p>
            To create your personalized learning path, we'll start with a brief assessment of your current emotional
            intelligence skills across five key dimensions:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Self-Awareness",
                description: "Understanding your own emotions and how they affect your thoughts and behavior",
                icon: <Info className="h-5 w-5 text-teal-600" />,
              },
              {
                title: "Self-Regulation",
                description: "Managing disruptive emotions and adapting to changing circumstances",
                icon: <Brain className="h-5 w-5 text-teal-600" />,
              },
              {
                title: "Motivation",
                description: "Being driven to achieve for the sake of achievement",
                icon: <Target className="h-5 w-5 text-teal-600" />,
              },
              {
                title: "Empathy",
                description: "Recognizing and understanding the emotions of others",
                icon: <Lightbulb className="h-5 w-5 text-teal-600" />,
              },
              {
                title: "Social Skills",
                description: "Managing relationships and building networks",
                icon: <Users className="h-5 w-5 text-teal-600" />,
              },
            ].map((dimension, index) => (
              <Card key={index} className="border-teal-100 dark:border-teal-900">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    {dimension.icon}
                    {dimension.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{dimension.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            The assessment takes about 10 minutes to complete and will help us customize your learning experience.
          </p>
        </div>
      ),
    },
    {
      title: "Your Personalized Learning Path",
      description:
        "Based on your assessment, we've created a customized journey to help you develop your emotional intelligence.",
      image: "/images/journey-path.jpg",
      content: (
        <div className="space-y-4">
          <p>
            Your personalized learning path includes a mix of exercises, simulations, and resources designed to help you
            develop your emotional intelligence skills effectively.
          </p>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Recommended Starting Points:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Emotion Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Learn to identify emotions from facial expressions and body language.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/exercises/emotion-recognition" className="w-full">
                    <Button variant="outline" className="w-full">
                      Start Exercise
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Active Listening</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Practice the art of truly hearing what others are communicating.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/exercises/active-listening" className="w-full">
                    <Button variant="outline" className="w-full">
                      Start Exercise
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="pt-2">
            <h3 className="text-lg font-medium mb-2">Your 4-Week Plan:</h3>
            <div className="space-y-3">
              {[
                {
                  week: "Week 1",
                  focus: "Self-Awareness",
                  activities: "Emotion Recognition, Self-Reflection Exercises",
                  progress: 0,
                },
                {
                  week: "Week 2",
                  focus: "Empathy",
                  activities: "Active Listening, Empathy Building Exercises",
                  progress: 0,
                },
                {
                  week: "Week 3",
                  focus: "Communication",
                  activities: "Difficult Conversation Simulation, Feedback Exercises",
                  progress: 0,
                },
                {
                  week: "Week 4",
                  focus: "Emotional Regulation",
                  activities: "Stress Management, Conflict Resolution Simulation",
                  progress: 0,
                },
              ].map((week, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">
                      {week.week}: {week.focus}
                    </div>
                    <div className="text-sm text-gray-500">{week.progress}% complete</div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{week.activities}</p>
                  <Progress value={week.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Track Your Progress",
      description: "Monitor your growth and celebrate your achievements along the way.",
      image: "/images/journey-progress.jpg",
      content: (
        <div className="space-y-4">
          <p>
            As you progress through your emotional intelligence journey, you'll be able to track your growth and see how
            far you've come.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { skill: "Self-Awareness", level: 65 },
                    { skill: "Empathy", level: 48 },
                    { skill: "Emotional Regulation", level: 52 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.skill}</span>
                        <span>{item.level}/100</span>
                      </div>
                      <Progress value={item.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "Journey Starter", earned: true },
                    { name: "Emotion Expert", earned: false },
                    { name: "Active Listener", earned: false },
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className={`h-4 w-4 rounded-full ${
                          achievement.earned ? "bg-teal-600" : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      >
                        {achievement.earned && <CheckCircle className="h-4 w-4 text-white" />}
                      </div>
                      <span className="text-sm">{achievement.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Activity Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0 days</div>
                <p className="text-xs text-gray-500 mt-1">Start your streak by completing an activity today!</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Regular practice is key to developing emotional intelligence. We recommend spending at least 15 minutes per
            day on exercises and activities.
          </p>
        </div>
      ),
    },
    {
      title: "Ready to Begin Your Journey?",
      description: "You're all set to start developing your emotional intelligence skills.",
      image: "/images/journey-begin.jpg",
      content: (
        <div className="space-y-4">
          <p>
            Congratulations on taking this important step toward developing your emotional intelligence! Here's what you
            can do next:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Start with an Exercise</CardTitle>
                <CardDescription>Begin with a guided exercise to practice specific skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our exercises are designed to help you practice specific emotional intelligence skills in a structured
                  environment.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/exercises" className="w-full">
                  <Button className="w-full">Browse Exercises</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Try a Simulation</CardTitle>
                <CardDescription>Practice your skills in realistic scenarios</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our simulations put you in realistic scenarios where you can practice applying emotional intelligence
                  skills.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/simulations" className="w-full">
                  <Button className="w-full">Browse Simulations</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="pt-4 text-center">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Remember, developing emotional intelligence is a journey, not a destination. Be patient with yourself and
              celebrate your progress along the way.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else {
      // If we're on the last step, redirect to exercises page
      router.push("/exercises")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container max-w-5xl py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="icon">
              <Home className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Your Emotional Intelligence Journey</h1>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span>
              Step {currentStep + 1} of {steps.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={steps[currentStep].image || "/placeholder.svg"}
                  alt={steps[currentStep].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold">{steps[currentStep].title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{steps[currentStep].description}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="pt-6">{steps[currentStep].content}</CardContent>
              <CardFooter className="flex justify-between pt-6">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
                  Previous Step
                </Button>
                <Button onClick={handleNext}>
                  {currentStep === steps.length - 1 ? "Start Exercises" : "Next Step"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import { Users } from "lucide-react"
