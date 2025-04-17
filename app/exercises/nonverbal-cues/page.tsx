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
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NonverbalCuesExercise() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(6).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const exercises = [
    {
      image: "/images/nonverbal-1.jpg",
      question: "What emotion is this person most likely expressing?",
      options: ["Happiness", "Surprise", "Confusion", "Contempt"],
      correct: "Confusion",
      explanation:
        "The furrowed brow, slightly tilted head, and pursed lips are classic indicators of confusion or uncertainty. The person appears to be processing information that doesn't quite make sense to them.",
    },
    {
      image: "/images/nonverbal-2.jpg",
      question: "What does this person's body language suggest?",
      options: ["Confidence", "Defensiveness", "Openness", "Boredom"],
      correct: "Defensiveness",
      explanation:
        "The crossed arms create a physical barrier, which is a classic defensive posture. This often indicates discomfort, disagreement, or self-protection. The slightly turned away posture reinforces this closed-off impression.",
    },
    {
      image: "/images/nonverbal-3.jpg",
      question: "What emotion is being conveyed through this facial expression?",
      options: ["Mild irritation", "Intense anger", "Disappointment", "Disgust"],
      correct: "Disgust",
      explanation:
        "The wrinkled nose, raised upper lip, and slightly narrowed eyes are the facial markers of disgust. This expression evolved to help humans avoid contamination or things we find morally repulsive.",
    },
    {
      image: "/images/nonverbal-4.jpg",
      question: "What does this handshake likely communicate?",
      options: ["Dominance", "Submission", "Equal partnership", "Reluctance"],
      correct: "Dominance",
      explanation:
        "The handshake shows one person's hand on top with palm facing downward, which typically communicates dominance. The firm grip and direct eye contact (not shown but implied) would reinforce this power dynamic.",
    },
    {
      image: "/images/nonverbal-5.jpg",
      question: "What is this person's posture suggesting?",
      options: ["Attentiveness", "Boredom", "Anxiety", "Confidence"],
      correct: "Confidence",
      explanation:
        "The upright posture, squared shoulders, and open stance suggest confidence and comfort. The person is taking up appropriate space and appears relaxed yet engaged with their environment.",
    },
    {
      image: "/images/nonverbal-6.jpg",
      question: "What might this eye contact pattern indicate?",
      options: ["Romantic interest", "Deception", "Deep concentration", "Submission"],
      correct: "Deception",
      explanation:
        "The avoidance of direct eye contact, with eyes looking down and away, can indicate deception or discomfort with the topic being discussed. While this isn't always reliable on its own, it's a potential signal that someone is being dishonest.",
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
          <h1 className="text-2xl font-bold">Nonverbal Communication Exercise</h1>
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
              Study the image carefully and select the option that best describes the nonverbal cues.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Image
                src={currentExercise.image || "/placeholder.svg"}
                alt="Nonverbal communication example"
                width={400}
                height={300}
                className="rounded-lg border object-cover"
              />
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
                  ? "Great job identifying these nonverbal cues!"
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
