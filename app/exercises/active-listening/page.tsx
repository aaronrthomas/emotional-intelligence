"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Home, Volume2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ActiveListening() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(5).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const exercises = [
    {
      audio: "/audio/conversation-1.mp3", // This would be a real audio file in a production app
      question: "What was the main concern expressed by the speaker?",
      options: [
        "They were worried about meeting the project deadline",
        "They felt their ideas weren't being valued by the team",
        "They were concerned about the quality of the work",
        "They were frustrated with the lack of resources",
      ],
      correct: "They felt their ideas weren't being valued by the team",
      explanation:
        "The speaker mentioned feeling dismissed when sharing ideas in meetings and noticing that their suggestions were often overlooked.",
    },
    {
      audio: "/audio/conversation-2.mp3",
      question: "What emotion was the speaker primarily expressing?",
      options: ["Anger", "Disappointment", "Anxiety", "Enthusiasm"],
      correct: "Disappointment",
      explanation:
        "The speaker's tone and word choice indicated disappointment about the situation rather than anger, anxiety, or enthusiasm.",
    },
    {
      audio: "/audio/conversation-3.mp3",
      question: "What was NOT mentioned as a solution by the speaker?",
      options: [
        "Having a one-on-one meeting with the manager",
        "Creating an anonymous feedback system",
        "Organizing a team-building retreat",
        "Implementing a structured meeting format",
      ],
      correct: "Organizing a team-building retreat",
      explanation:
        "The speaker suggested a one-on-one meeting, an anonymous feedback system, and a structured meeting format, but did not mention a team-building retreat.",
    },
    {
      audio: "/audio/conversation-4.mp3",
      question: "What non-verbal cue indicated the speaker's frustration?",
      options: [
        "They were speaking very loudly",
        "They sighed frequently between sentences",
        "They were speaking very quickly",
        "They laughed nervously throughout",
      ],
      correct: "They sighed frequently between sentences",
      explanation:
        "The frequent sighs between sentences were a non-verbal indicator of the speaker's frustration with the situation.",
    },
    {
      audio: "/audio/conversation-5.mp3",
      question: "What would be the most appropriate response to show active listening?",
      options: [
        "I understand completely. Let me tell you about a similar experience I had.",
        "That sounds challenging. What specific ideas do you feel have been overlooked?",
        "You should be more assertive in meetings so people pay attention to your ideas.",
        "Maybe your ideas aren't being communicated clearly enough.",
      ],
      correct: "That sounds challenging. What specific ideas do you feel have been overlooked?",
      explanation:
        "This response acknowledges the speaker's feelings and asks an open-ended question that encourages them to elaborate, demonstrating active listening.",
    },
  ]

  const currentExercise = exercises[currentStep]

  const handleNext = () => {
    if (currentStep < exercises.length - 1) {
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

  const handleAnswer = (value: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentStep] = value
    setSelectedAnswers(newAnswers)
  }

  const handleCheck = () => {
    setShowFeedback(true)
  }

  const isCorrect = selectedAnswers[currentStep] === currentExercise.correct
  const progress = ((currentStep + 1) / exercises.length) * 100

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
          <h1 className="text-2xl font-bold">Active Listening Exercise</h1>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>
              {currentStep + 1} of {exercises.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{currentExercise.question}</CardTitle>
            <CardDescription>Listen carefully to the audio clip and select the best answer.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Play Audio Clip
              </Button>
            </div>

            <RadioGroup value={selectedAnswers[currentStep]} onValueChange={handleAnswer} className="space-y-3">
              {currentExercise.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  <RadioGroupItem value={option} id={`option-${index}`} className="mt-1" />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            {!showFeedback ? (
              <Button onClick={handleCheck} disabled={!selectedAnswers[currentStep]}>
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={currentStep === exercises.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>

        {showFeedback && (
          <Card className={isCorrect ? "bg-green-50 dark:bg-green-950/20" : "bg-red-50 dark:bg-red-950/20"}>
            <CardHeader>
              <CardTitle
                className={isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}
              >
                {isCorrect ? "Correct!" : "Not quite right"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                {isCorrect
                  ? "Great job identifying the key elements in this conversation!"
                  : `The correct answer is "${currentExercise.correct}".`}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{currentExercise.explanation}</p>
            </CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  )
}
