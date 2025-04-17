"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Image from "next/image"

export default function EmotionRecognition() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(5).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const exercises = [
    {
      image: "/placeholder.svg?height=300&width=300",
      question: "What emotion is this person expressing?",
      options: ["Joy", "Surprise", "Fear", "Disgust"],
      correct: "Surprise",
      explanation:
        "Notice the raised eyebrows, widened eyes, and slightly open mouth - all classic indicators of surprise.",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      question: "What is the primary emotion being displayed?",
      options: ["Anger", "Sadness", "Contempt", "Disappointment"],
      correct: "Sadness",
      explanation:
        "The downturned mouth, slightly furrowed brow, and drooping eyelids are typical expressions of sadness.",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      question: "Identify the emotion in this facial expression.",
      options: ["Pride", "Happiness", "Embarrassment", "Contentment"],
      correct: "Happiness",
      explanation:
        "The genuine smile with raised cheeks and crinkled eyes (Duchenne smile) indicates authentic happiness.",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      question: "What complex emotion is being expressed?",
      options: ["Jealousy", "Shame", "Guilt", "Anxiety"],
      correct: "Shame",
      explanation: "The lowered gaze, slightly hunched posture, and self-conscious expression are indicators of shame.",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      question: "What emotion does this body language convey?",
      options: ["Confidence", "Nervousness", "Boredom", "Interest"],
      correct: "Nervousness",
      explanation: "The fidgeting hands, tense shoulders, and shifting posture are common signs of nervousness.",
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
    <div className="container max-w-4xl py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/">
          <Button variant="outline" size="icon">
            <Home className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Emotion Recognition Exercise</h1>
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
          <CardDescription>
            Study the image carefully and select the emotion you think is being expressed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <Image
              src={currentExercise.image || "/placeholder.svg"}
              alt="Person expressing emotion"
              width={300}
              height={300}
              className="rounded-lg border"
            />
          </div>

          <RadioGroup
            value={selectedAnswers[currentStep]}
            onValueChange={handleAnswer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {currentExercise.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="cursor-pointer text-base">
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
            <CardTitle className={isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              {isCorrect ? "Correct!" : "Not quite right"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              {isCorrect
                ? "Great job identifying this emotion!"
                : `The correct answer is "${currentExercise.correct}".`}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{currentExercise.explanation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
