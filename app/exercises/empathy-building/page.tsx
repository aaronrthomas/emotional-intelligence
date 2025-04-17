"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EmpathyBuilding() {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<string[]>(Array(5).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const scenarios = [
    {
      image: "/images/empathy-scenario-1.jpg",
      scenario: "A colleague just found out their project proposal was rejected after weeks of hard work.",
      question: "How might they be feeling, and how would you respond to show empathy?",
      exampleResponse:
        "They're likely feeling disappointed, frustrated, and perhaps questioning their abilities. I would acknowledge their hard work and disappointment: 'I'm really sorry about your proposal. I know how much time and effort you put into it, and it's completely understandable to feel disappointed. Would it help to talk through what happened or would you prefer some space right now?'",
    },
    {
      image: "/images/empathy-scenario-2.jpg",
      scenario: "A friend just shared that they're going through a divorce after 10 years of marriage.",
      question: "What emotions might they be experiencing, and how would you respond empathetically?",
      exampleResponse:
        "They might be feeling grief, failure, fear about the future, and possibly relief mixed with guilt. I would validate their complex emotions: 'I'm so sorry you're going through this. Ending a long marriage involves so many emotions, and whatever you're feeling is valid. I'm here for you whether you need to talk, need practical help, or just want company.'",
    },
    {
      image: "/images/empathy-scenario-3.jpg",
      scenario: "A team member made a mistake that caused the team to miss an important deadline.",
      question: "How might they be feeling, and how would you respond as their team leader?",
      exampleResponse:
        "They're likely feeling guilty, embarrassed, anxious about consequences, and worried about how the team perceives them. I would approach them privately: 'I wanted to check in with you about what happened. I know you're usually very thorough, so I understand this was an unusual situation. Let's talk about what went wrong and how we can prevent it in the future, but know that we all make mistakes and this doesn't define your value to the team.'",
    },
    {
      image: "/images/empathy-scenario-4.jpg",
      scenario: "A customer is visibly upset because their order was processed incorrectly for the second time.",
      question: "What emotions might they be experiencing, and how would you respond with empathy?",
      exampleResponse:
        "They're likely feeling frustrated, disrespected, and that their time has been wasted. They may feel like the company doesn't value them. I would validate their frustration: 'I completely understand why you're upset. Having this happen twice is unacceptable, and I'd be frustrated too. I sincerely apologize for the inconvenience and time this has cost you. Let me fix this right away and make sure it doesn't happen again.'",
    },
    {
      image: "/images/empathy-scenario-5.jpg",
      scenario: "A new employee seems withdrawn and hesitant to participate in team discussions.",
      question: "What might they be feeling, and how would you approach them empathetically?",
      exampleResponse:
        "They might be feeling insecure, intimidated, worried about making a bad impression, or unsure of team dynamics and expectations. I would approach them one-on-one in a casual setting: 'I noticed you've been quiet in our meetings, which is completely fine. When I first joined, it took me some time to feel comfortable speaking up too. Is there anything I can do to make it easier for you to share your thoughts? Your perspective would be really valuable to the team.'",
    },
  ]

  const currentScenario = scenarios[currentStep]

  const handleNext = () => {
    if (currentStep < scenarios.length - 1) {
      setCurrentStep(currentStep + 1)
      setShowFeedback(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setShowFeedback(false)
    }
  }

  const handleResponseChange = (value: string) => {
    const newResponses = [...responses]
    newResponses[currentStep] = value
    setResponses(newResponses)
  }

  const handleSubmit = () => {
    setShowFeedback(true)
  }

  const progress = ((currentStep + 1) / scenarios.length) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container max-w-4xl py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/exercises">
            <Button variant="outline" size="icon">
              <Home className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Empathy Building Exercise</h1>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>
              {currentStep + 1} of {scenarios.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Scenario {currentStep + 1}</CardTitle>
            <CardDescription>Consider the scenario and respond with empathy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Image
                src={currentScenario.image || "/placeholder.svg"}
                alt="Scenario illustration"
                width={500}
                height={300}
                className="rounded-lg border object-cover"
              />
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">{currentScenario.scenario}</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">{currentScenario.question}</h3>
              <Textarea
                placeholder="Type your response here..."
                value={responses[currentStep]}
                onChange={(e) => handleResponseChange(e.target.value)}
                rows={6}
                className="w-full"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            {!showFeedback ? (
              <Button onClick={handleSubmit} disabled={!responses[currentStep].trim()}>
                Submit Response
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={currentStep === scenarios.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>

        {showFeedback && (
          <Card className="bg-teal-50 dark:bg-teal-950/20">
            <CardHeader>
              <CardTitle className="text-teal-600 dark:text-teal-400">Example of an Empathetic Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Here's an example of how you might respond with empathy in this situation:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                <p>{currentScenario.exampleResponse}</p>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Remember, empathy involves recognizing emotions, validating them, and responding in a way that shows
                understanding and support.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  )
}
