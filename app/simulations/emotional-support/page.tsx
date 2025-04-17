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
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EmotionalSupport() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedResponses, setSelectedResponses] = useState<string[]>(Array(5).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const simulation = {
    title: "Providing Emotional Support",
    description:
      "Your friend is going through a difficult time and needs emotional support. Practice responding with empathy and compassion.",
    steps: [
      {
        situation:
          "Your friend Jamie has been going through a tough time at work. They've been working long hours on a project that was just canceled, and they're feeling demoralized. They've reached out to talk.",
        character: {
          name: "Jamie",
          avatar: "/images/avatar-jamie.jpg",
          message:
            "I can't believe they canceled the project after all the work we put in. I've been staying late for weeks, missing time with my family, and now it feels like it was all for nothing. I'm just so tired and frustrated.",
        },
        options: [
          {
            text: "That sounds incredibly frustrating. You put so much of yourself into this project, and having it canceled must feel like a huge loss. It makes sense that you're feeling this way.",
            quality: "excellent",
            feedback:
              "This response validates Jamie's feelings and acknowledges the specific reasons for their frustration, showing that you're truly listening and understand why they're upset.",
          },
          {
            text: "At least you still have your job. A lot of companies are doing layoffs right now.",
            quality: "poor",
            feedback:
              "This response minimizes Jamie's feelings by suggesting they should be grateful instead of upset. It invalidates their legitimate frustration and doesn't provide emotional support.",
          },
          {
            text: "That's really tough. I'm sure things will get better soon though.",
            quality: "below_average",
            feedback:
              "While this shows some sympathy, it's generic and rushes to reassurance without acknowledging the depth of Jamie's feelings or the specific situation.",
          },
          {
            text: "I'm sorry to hear that. Work can be really frustrating sometimes. What project was it?",
            quality: "average",
            feedback:
              "This response shows some empathy but quickly shifts to questions about details rather than focusing on Jamie's emotional experience.",
          },
        ],
      },
      {
        situation: "Jamie continues to express their frustration and disappointment.",
        character: {
          name: "Jamie",
          avatar: "/images/avatar-jamie.jpg",
          message:
            "I just feel like I can't win at this job. No matter how hard I work, something always goes wrong. I'm starting to wonder if I should just look for something else, but the thought of job hunting is overwhelming right now.",
        },
        options: [
          {
            text: "It sounds like you're feeling really stuck between a job that's not working for you and the stress of making a change. That's a really difficult place to be. What aspects of your job are most frustrating for you?",
            quality: "excellent",
            feedback:
              "This response acknowledges the difficult position Jamie is in without jumping to solutions. It validates their feelings while gently exploring the situation more deeply.",
          },
          {
            text: "You should definitely look for a new job. You deserve better than this.",
            quality: "below_average",
            feedback:
              "While supportive in intent, this response jumps to a solution without fully exploring Jamie's feelings or situation. It doesn't acknowledge how overwhelming job hunting feels to them right now.",
          },
          {
            text: "Everyone feels that way about their job sometimes. It's normal to get frustrated.",
            quality: "poor",
            feedback:
              "This response generalizes and normalizes Jamie's experience in a way that minimizes their specific situation and feelings. It can make them feel unheard.",
          },
          {
            text: "That's a tough position to be in. Have you talked to your manager about how you're feeling?",
            quality: "average",
            feedback:
              "This acknowledges Jamie's feelings but quickly moves to problem-solving before fully exploring their emotional experience.",
          },
        ],
      },
      {
        situation: "Jamie shares more about their frustrations at work, including feeling undervalued by management.",
        character: {
          name: "Jamie",
          avatar: "/images/avatar-jamie.jpg",
          message:
            "My manager barely acknowledged all the extra hours I put in. It's like they expect that level of sacrifice but don't appreciate it. I'm just feeling really undervalued right now.",
        },
        options: [
          {
            text: "It's really hurtful to put so much of yourself into your work and not have that effort recognized or appreciated. No wonder you're feeling undervalued.",
            quality: "excellent",
            feedback:
              "This response directly validates Jamie's feeling of being undervalued and connects it to the specific behavior from their manager, showing deep understanding and empathy.",
          },
          {
            text: "Maybe you should be more assertive about getting recognition for your work.",
            quality: "poor",
            feedback:
              "This response puts the responsibility on Jamie to fix the situation rather than providing emotional support. It implies they're partly at fault for not being assertive enough.",
          },
          {
            text: "That's frustrating. Most managers aren't very good at showing appreciation.",
            quality: "average",
            feedback:
              "While this acknowledges Jamie's frustration, it generalizes about managers in a way that doesn't fully validate their specific experience.",
          },
          {
            text: "I'm sorry you're dealing with that. Do you want to talk about something else to take your mind off work?",
            quality: "below_average",
            feedback:
              "This response shows some sympathy but suggests changing the subject rather than providing space for Jamie to process their feelings, which can feel dismissive.",
          },
        ],
      },
      {
        situation: "Jamie expresses some self-doubt about their abilities and career path.",
        character: {
          name: "Jamie",
          avatar: "/images/avatar-jamie.jpg",
          message:
            "Sometimes I wonder if I'm even good at my job. Maybe the project failed because of me. I used to be so excited about this career path, but now I'm not sure anymore.",
        },
        options: [
          {
            text: "It's really common to question yourself when projects don't work out, but from everything you've shared, it sounds like you went above and beyond. These doubts don't match up with how dedicated you've been. Would it help to talk about the specific things you're proud of accomplishing, even if the project was canceled?",
            quality: "excellent",
            feedback:
              "This response validates Jamie's feelings while gently challenging their negative self-assessment. It offers a constructive way to reconnect with their strengths and accomplishments.",
          },
          {
            text: "Don't be so hard on yourself. Everyone fails sometimes.",
            quality: "below_average",
            feedback:
              "While attempting to be supportive, this response dismisses Jamie's feelings rather than exploring them, and uses platitudes that don't address their specific concerns.",
          },
          {
            text: "Maybe this is a sign you should explore other career options.",
            quality: "poor",
            feedback:
              "This response reinforces Jamie's doubts rather than providing emotional support, and jumps to a major life change solution when they're in a vulnerable state.",
          },
          {
            text: "I'm sorry you're feeling this way. What aspects of your job do you still enjoy?",
            quality: "average",
            feedback:
              "This shows empathy but quickly shifts to focusing on positives before fully acknowledging Jamie's self-doubt and disappointment.",
          },
        ],
      },
      {
        situation:
          "After talking through their feelings, Jamie seems a bit calmer but still uncertain about next steps.",
        character: {
          name: "Jamie",
          avatar: "/images/avatar-jamie.jpg",
          message:
            "Thanks for listening. I still don't know what to do about my job situation, but it helps to talk about it. I've been keeping all this bottled up.",
        },
        options: [
          {
            text: "I'm really glad you reached out. These situations don't have easy answers, and it's okay to take time to figure out what's right for you. I'm here to listen anytime you want to talk more about it, or just to take your mind off things if that's what you need.",
            quality: "excellent",
            feedback:
              "This response affirms the value of sharing feelings, acknowledges the complexity of the situation without pushing for immediate solutions, and offers ongoing support in whatever form Jamie needs.",
          },
          {
            text: "No problem. I'm sure you'll figure it out. Let me know what you decide to do.",
            quality: "below_average",
            feedback:
              "This response is somewhat dismissive and puts pressure on Jamie to come up with a solution, rather than offering continued emotional support during a difficult time.",
          },
          {
            text: "You should definitely start looking for other jobs. I can help you update your resume.",
            quality: "poor",
            feedback:
              "This jumps straight to a solution when Jamie hasn't asked for that kind of help. It doesn't acknowledge the emotional support they're expressing gratitude for.",
          },
          {
            text: "Anytime. It's not good to keep things bottled up. Do you feel better now?",
            quality: "average",
            feedback:
              "While this acknowledges the importance of talking about feelings, it suggests Jamie should feel better now, which can create pressure and doesn't recognize that emotional processing takes time.",
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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container max-w-4xl py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/simulations">
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
              {currentStep === 0 ? simulation.description : "Continue providing emotional support to Jamie."}
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
      <Footer />
    </div>
  )
}
