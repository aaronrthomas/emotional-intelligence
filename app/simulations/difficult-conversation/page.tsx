"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Home, MessageSquare } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function DifficultConversation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedResponses, setSelectedResponses] = useState<string[]>(Array(5).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const simulation = {
    title: "Difficult Workplace Conversation",
    description: "You need to give feedback to a team member whose work has been declining in quality recently.",
    steps: [
      {
        situation:
          "You're a team leader and have noticed that Alex, a usually reliable team member, has missed several deadlines and submitted work with errors in the past two weeks. You've scheduled a meeting to discuss this.",
        character: {
          name: "Alex",
          avatar: "/placeholder.svg?height=40&width=40",
          message: "Hi, you wanted to see me? I'm really busy today, so I hope this won't take long.",
        },
        options: [
          {
            text: "Alex, your work has been sloppy lately. You need to get it together or there will be consequences.",
            quality: "poor",
            feedback:
              "This response is confrontational and threatening, which will likely make Alex defensive rather than receptive to feedback.",
          },
          {
            text: "Thanks for making time. I've noticed some changes in your work recently, and I wanted to check in to see how you're doing and discuss some concerns I have.",
            quality: "excellent",
            feedback:
              "This response shows empathy and opens the conversation in a non-threatening way, focusing on the behavior rather than attacking the person.",
          },
          {
            text: "I'll try to be quick. There have been some issues with your recent work that we need to address.",
            quality: "average",
            feedback:
              "While direct, this response lacks empathy and might come across as dismissive of Alex's time constraints.",
          },
          {
            text: "No problem, this won't take long. I just wanted to mention that your work hasn't been up to standard lately.",
            quality: "below_average",
            feedback:
              "This response acknowledges Alex's time concern but jumps straight to criticism without context or empathy.",
          },
        ],
      },
      {
        situation: "Alex looks uncomfortable and responds defensively.",
        character: {
          name: "Alex",
          avatar: "/placeholder.svg?height=40&width=40",
          message:
            "What do you mean? I've been working really hard. If there are problems, it's probably because I've been given too much work with impossible deadlines.",
        },
        options: [
          {
            text: "I understand you feel overwhelmed. Let's talk about your workload and how we can manage it better, but we also need to address the quality issues I've noticed.",
            quality: "excellent",
            feedback:
              "This response validates Alex's feelings while still maintaining focus on the issue that needs to be addressed.",
          },
          {
            text: "Everyone has the same deadlines, Alex. The rest of the team manages to meet them without making mistakes.",
            quality: "poor",
            feedback:
              "This response is dismissive of Alex's concerns and uses unhelpful comparisons that will increase defensiveness.",
          },
          {
            text: "Let's not make excuses. We need to focus on solutions to improve your performance.",
            quality: "below_average",
            feedback:
              "This response dismisses Alex's perspective as 'excuses,' which will likely increase tension and defensiveness.",
          },
          {
            text: "I hear that you're feeling overwhelmed. Before we discuss workload, can you help me understand the specific challenges you're facing?",
            quality: "average",
            feedback:
              "This response shows empathy but doesn't acknowledge the performance issues that need to be addressed.",
          },
        ],
      },
      {
        situation:
          "After some discussion, you learn that Alex has been dealing with some personal issues that have affected their focus at work.",
        character: {
          name: "Alex",
          avatar: "/placeholder.svg?height=40&width=40",
          message:
            "I'm sorry I haven't told anyone, but my mother has been ill, and I've been taking her to medical appointments. It's been really stressful trying to manage everything.",
        },
        options: [
          {
            text: "I'm sorry to hear that, Alex. That sounds really difficult. Let's figure out how we can support you during this time while ensuring the work gets done properly.",
            quality: "excellent",
            feedback:
              "This response shows compassion while still maintaining the importance of work quality, striking a good balance.",
          },
          {
            text: "You should have told me sooner. We could have made arrangements.",
            quality: "below_average",
            feedback:
              "While this acknowledges that accommodations could have been made, it focuses on what Alex 'should have' done rather than moving forward constructively.",
          },
          {
            text: "I understand, but we all have personal problems. You need to keep your work and personal life separate.",
            quality: "poor",
            feedback:
              "This response shows a lack of empathy and unrealistic expectations about separating personal and professional life during a family crisis.",
          },
          {
            text: "I'm sorry about your mother. Take whatever time you need, and don't worry about the deadlines for now.",
            quality: "average",
            feedback:
              "While compassionate, this response doesn't address the work quality issues or provide a balanced solution.",
          },
        ],
      },
      {
        situation: "You need to work with Alex to create a plan moving forward.",
        character: {
          name: "Alex",
          avatar: "/placeholder.svg?height=40&width=40",
          message: "I want to do good work, but I'm just not sure how to manage everything right now.",
        },
        options: [
          {
            text: "Let's look at your current projects and prioritize them. We might be able to reassign some tasks or adjust some deadlines. Would it also help to have a quick check-in meeting each morning?",
            quality: "excellent",
            feedback:
              "This response offers specific, practical solutions and involves Alex in the problem-solving process.",
          },
          {
            text: "Just focus on one task at a time and try to minimize distractions. You'll get through this.",
            quality: "below_average",
            feedback:
              "This advice is too vague to be helpful and doesn't offer any concrete support or accommodations.",
          },
          {
            text: "I'll need you to create a detailed plan showing how you'll catch up on all your work by the end of the week.",
            quality: "poor",
            feedback:
              "This response adds pressure rather than support and doesn't acknowledge the personal challenges Alex is facing.",
          },
          {
            text: "Why don't you take a few days off to handle your personal situation and then come back fresh?",
            quality: "average",
            feedback:
              "While well-intentioned, this doesn't address how to improve work quality or manage ongoing responsibilities.",
          },
        ],
      },
      {
        situation:
          "As you wrap up the conversation, you want to ensure Alex feels supported while also being clear about expectations.",
        character: {
          name: "Alex",
          avatar: "/placeholder.svg?height=40&width=40",
          message: "Thanks for understanding. I'll try to do better.",
        },
        options: [
          {
            text: "Don't just try, make sure you do. We'll review your progress next week.",
            quality: "poor",
            feedback:
              "This response undermines the supportive conversation by ending on a demanding, somewhat threatening note.",
          },
          {
            text: "I know you will. Don't worry about anything else for now.",
            quality: "average",
            feedback: "This is supportive but vague and doesn't set clear expectations for improvement.",
          },
          {
            text: "I appreciate your commitment to improving. Let's meet again next week to see how our plan is working and if we need to make any adjustments. And please let me know if there's anything else you need in the meantime.",
            quality: "excellent",
            feedback:
              "This response is supportive while setting clear next steps and leaving the door open for further communication.",
          },
          {
            text: "Let's schedule another meeting for next week to check on your progress. Make sure you've caught up by then.",
            quality: "below_average",
            feedback:
              "This sets a follow-up but focuses only on Alex's responsibility without acknowledging the support plan discussed.",
          },
        ],
      },
    ],
  }

  const currentScenario = simulation.steps[currentStep]

  const handleNext = () => {
    if (currentStep < simulation.steps.length - 1) {
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

  const handleResponse = (value: string) => {
    const newResponses = [...selectedResponses]
    newResponses[currentStep] = value
    setSelectedResponses(newResponses)
  }

  const handleCheck = () => {
    setShowFeedback(true)
  }

  const selectedOption = currentScenario.options.find((option) => option.text === selectedResponses[currentStep])

  const progress = ((currentStep + 1) / simulation.steps.length) * 100

  return (
    <div className="container max-w-4xl py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/">
          <Button variant="outline" size="icon">
            <Home className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{simulation.title}</h1>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>
            {currentStep + 1} of {simulation.steps.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Scenario</CardTitle>
          <CardDescription>
            {currentStep === 0 ? simulation.description : "Continue the conversation with Alex."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
            {currentScenario.situation}
          </p>

          <div className="flex items-start gap-4 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
            <Avatar className="mt-1">
              <AvatarImage
                src={currentScenario.character.avatar || "/placeholder.svg"}
                alt={currentScenario.character.name}
              />
              <AvatarFallback>{currentScenario.character.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium mb-1">{currentScenario.character.name}</p>
              <p>{currentScenario.character.message}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              How would you respond?
            </h3>

            <RadioGroup value={selectedResponses[currentStep]} onValueChange={handleResponse} className="space-y-4">
              {currentScenario.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  <RadioGroupItem value={option.text} id={`option-${index}`} className="mt-1" />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          {!showFeedback ? (
            <Button onClick={handleCheck} disabled={!selectedResponses[currentStep]}>
              Check Response
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={currentStep === simulation.steps.length - 1}>
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>

      {showFeedback && selectedOption && (
        <Card
          className={
            selectedOption.quality === "excellent"
              ? "bg-green-50 dark:bg-green-950/20"
              : selectedOption.quality === "average"
                ? "bg-yellow-50 dark:bg-yellow-950/20"
                : selectedOption.quality === "below_average"
                  ? "bg-orange-50 dark:bg-orange-950/20"
                  : "bg-red-50 dark:bg-red-950/20"
          }
        >
          <CardHeader>
            <CardTitle
              className={
                selectedOption.quality === "excellent"
                  ? "text-green-600 dark:text-green-400"
                  : selectedOption.quality === "average"
                    ? "text-yellow-600 dark:text-yellow-400"
                    : selectedOption.quality === "below_average"
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-red-600 dark:text-red-400"
              }
            >
              {selectedOption.quality === "excellent"
                ? "Excellent Response!"
                : selectedOption.quality === "average"
                  ? "Average Response"
                  : selectedOption.quality === "below_average"
                    ? "Below Average Response"
                    : "Poor Response"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{selectedOption.feedback}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
