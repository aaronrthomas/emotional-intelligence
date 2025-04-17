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

export default function ConflictResolution() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedResponses, setSelectedResponses] = useState<string[]>(Array(5).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const simulation = {
    title: "Team Conflict Resolution",
    description:
      "You're a team leader who needs to mediate a conflict between two team members with different working styles.",
    steps: [
      {
        situation:
          "Two of your team members, Alex and Jordan, have been having ongoing conflicts about project approaches. Alex prefers detailed planning and careful execution, while Jordan favors rapid prototyping and iteration. Their disagreements are affecting team morale and project timelines.",
        character: {
          name: "Alex",
          avatar: "/images/avatar-alex.jpg",
          message:
            "I've asked for a meeting because I can't work like this anymore. Jordan rushes into everything without proper planning, and then I have to fix the problems that come up. It's inefficient and frustrating.",
        },
        options: [
          {
            text: "I understand you're frustrated, Alex. Jordan, what's your perspective on this?",
            quality: "excellent",
            feedback:
              "This response acknowledges Alex's feelings while immediately bringing Jordan into the conversation to ensure both perspectives are heard, which is essential for conflict resolution.",
          },
          {
            text: "Alex, you need to be more flexible. Not everything requires extensive planning.",
            quality: "poor",
            feedback:
              "This response dismisses Alex's concerns and takes a side in the conflict, which will likely make Alex feel unheard and escalate tensions.",
          },
          {
            text: "Let's focus on finding a middle ground between planning and rapid development.",
            quality: "average",
            feedback:
              "While this response aims for compromise, it jumps to solutions before fully understanding both perspectives, which may lead to superficial resolutions.",
          },
          {
            text: "These kinds of disagreements are normal in any team. Let's move on to discussing the current project.",
            quality: "below_average",
            feedback:
              "This response minimizes the conflict and avoids addressing it, which will allow tensions to continue affecting the team.",
          },
        ],
      },
      {
        situation: "After you ask for Jordan's perspective, they respond defensively.",
        character: {
          name: "Jordan",
          avatar: "/images/avatar-jordan.jpg",
          message:
            "Alex is too rigid and gets stuck in analysis paralysis. We'd never ship anything if it were up to them. Sometimes you need to just start building to see what works. I'm trying to keep us moving forward.",
        },
        options: [
          {
            text: "I hear that you're both passionate about doing good work, just with different approaches. Can you each explain what you value most in your preferred working style?",
            quality: "excellent",
            feedback:
              "This response identifies common ground (both want to do good work) and shifts the conversation from personal criticism to understanding values and working styles.",
          },
          {
            text: "Jordan, Alex isn't saying planning is everything, just that more planning would help. Can you see their point?",
            quality: "below_average",
            feedback:
              "This response appears to take Alex's side and tries to convince Jordan to change, which will likely make Jordan defensive.",
          },
          {
            text: "Let's establish some ground rules for how decisions are made on the team to avoid these conflicts.",
            quality: "average",
            feedback:
              "While establishing process is helpful, this response moves to solutions before fully exploring the underlying issues and ensuring both parties feel heard.",
          },
          {
            text: "You both need to be more professional and put aside your differences for the good of the team.",
            quality: "poor",
            feedback:
              "This response criticizes both parties and frames the conflict as unprofessional, which doesn't address the legitimate differences in working styles.",
          },
        ],
      },
      {
        situation:
          "After some discussion about their values and approaches, you've identified that Alex values thoroughness and preventing errors, while Jordan values speed and adaptation.",
        character: {
          name: "Alex",
          avatar: "/images/avatar-alex.jpg",
          message:
            "I just want to make sure we're not creating problems for ourselves down the line. When we rush, we often miss important details that come back to haunt us.",
        },
        options: [
          {
            text: "Alex, can you share a specific example of when rushing led to problems? And Jordan, can you share when detailed planning slowed down important progress?",
            quality: "excellent",
            feedback:
              "This response asks for specific examples, which moves the conversation from abstract disagreement to concrete situations that can be analyzed and addressed.",
          },
          {
            text: "Alex, your attention to detail is valuable, but sometimes perfect is the enemy of good. We need to find a balance.",
            quality: "below_average",
            feedback:
              "This response appears to side with Jordan's perspective and frames Alex's thoroughness as perfectionism, which doesn't validate their legitimate concern.",
          },
          {
            text: "Let's divide the project into phases where we can incorporate both approaches - planning for critical components and rapid prototyping for others.",
            quality: "average",
            feedback:
              "While this is a reasonable solution, it's being proposed before fully exploring the specific situations where each approach is most valuable.",
          },
          {
            text: "We need to focus on what's best for the client, not on our preferred working styles.",
            quality: "poor",
            feedback:
              "This response dismisses the importance of working styles and implies the conflict is self-centered rather than about legitimate approaches to quality work.",
          },
        ],
      },
      {
        situation:
          "Both team members have shared examples of when their approach was valuable and when it created challenges.",
        character: {
          name: "Jordan",
          avatar: "/images/avatar-jordan.jpg",
          message:
            "I see your point about the security issue we missed in the last release. That was costly. But remember when we spent three weeks planning the user dashboard and then the client completely changed direction?",
        },
        options: [
          {
            text: "It sounds like both approaches have their place depending on the situation. What if we created a decision framework to determine when to plan thoroughly versus when to prototype quickly?",
            quality: "excellent",
            feedback:
              "This response acknowledges the validity of both approaches in different contexts and proposes a solution that incorporates situational decision-making rather than a one-size-fits-all approach.",
          },
          {
            text: "Jordan makes a good point. We need to be more adaptive to client needs.",
            quality: "poor",
            feedback:
              "This response takes Jordan's side in the conflict rather than finding a balanced solution that respects both perspectives.",
          },
          {
            text: "Let's implement more frequent check-ins with clients to reduce wasted planning effort.",
            quality: "average",
            feedback:
              "While this addresses one aspect of the problem (client changes), it doesn't fully address the broader conflict about when to plan versus when to prototype.",
          },
          {
            text: "We should focus on improving our communication so these disagreements don't affect the project.",
            quality: "below_average",
            feedback:
              "This response frames the conflict as a communication issue rather than a legitimate difference in working styles that requires a thoughtful approach.",
          },
        ],
      },
      {
        situation:
          "You've helped the team develop a framework for when to use more planning versus more rapid prototyping based on project risk, client certainty, and other factors.",
        character: {
          name: "Alex",
          avatar: "/images/avatar-alex.jpg",
          message:
            "This framework makes sense to me. I'm willing to be more flexible on lower-risk features if Jordan can support more thorough planning for the critical components.",
        },
        options: [
          {
            text: "I appreciate both of your willingness to adapt. Let's document this framework and review how it's working in two weeks. What else would help you work together more effectively?",
            quality: "excellent",
            feedback:
              "This response acknowledges progress, establishes a follow-up to ensure the solution is working, and opens the door for additional needs to be addressed.",
          },
          {
            text: "Great, I'm glad that's resolved. Let's get back to work on the current project.",
            quality: "below_average",
            feedback:
              "This response rushes to closure without ensuring the solution will be implemented effectively or addressing any remaining concerns.",
          },
          {
            text: "Alex, I'm glad you're willing to be more flexible. That will help the team a lot.",
            quality: "poor",
            feedback:
              "This response praises only Alex's flexibility, implying that they were the primary problem, which undermines the balanced solution and could reignite the conflict.",
          },
          {
            text: "Let's implement this framework and see if it reduces conflicts between you two.",
            quality: "average",
            feedback:
              "While this establishes next steps, it frames the solution as conflict reduction rather than improved collaboration and doesn't include a specific follow-up plan.",
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
              {currentStep === 0 ? simulation.description : "Continue the conflict resolution process."}
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
