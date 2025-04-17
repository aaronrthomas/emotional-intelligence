"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SelfAwarenessExercise() {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<string[]>(Array(5).fill(""))
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState<string[]>(Array(5).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const exercises = [
    {
      title: "Identifying Your Emotions",
      description: "Practice recognizing and naming your emotions with precision.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Think about a situation that happened in the past week that triggered a strong emotional response. It could
            be something that made you feel happy, sad, angry, frustrated, or any other emotion.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">Describe the situation briefly:</h3>
            <Textarea
              placeholder="What happened? Who was involved? Where were you?"
              value={responses[0]}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[0] = e.target.value
                setResponses(newResponses)
              }}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">What emotions did you feel?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Try to be specific. Instead of just "angry," were you irritated, enraged, or resentful? Instead of just
              "sad," were you disappointed, heartbroken, or melancholic?
            </p>
            <Textarea
              placeholder="List the specific emotions you experienced..."
              value={responses[1]}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[1] = e.target.value
                setResponses(newResponses)
              }}
              rows={3}
            />
          </div>
        </div>
      ),
      feedback: (
        <div className="space-y-4">
          <p>
            Being able to precisely identify your emotions is the foundation of emotional intelligence. By naming your
            emotions with specificity, you gain greater insight into your emotional patterns and triggers.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Emotion Vocabulary to Consider:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Joyful",
                "Excited",
                "Proud",
                "Content",
                "Grateful",
                "Hopeful",
                "Anxious",
                "Overwhelmed",
                "Insecure",
                "Embarrassed",
                "Disappointed",
                "Hurt",
                "Frustrated",
                "Irritated",
                "Resentful",
                "Jealous",
                "Guilty",
                "Ashamed",
              ].map((emotion, index) => (
                <div key={index} className="text-sm">
                  {emotion}
                </div>
              ))}
            </div>
          </div>
          <p>
            As you continue to practice identifying your emotions, you'll develop a richer emotional vocabulary and
            greater self-awareness.
          </p>
        </div>
      ),
    },
    {
      title: "Recognizing Physical Sensations",
      description: "Connect your emotions to physical sensations in your body.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Our emotions often manifest as physical sensations in our bodies. Recognizing these physical cues can help
            us identify our emotions earlier.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">When you feel anxious, where do you feel it in your body?</h3>
            <RadioGroup
              value={multipleChoiceAnswers[0]}
              onValueChange={(value) => {
                const newAnswers = [...multipleChoiceAnswers]
                newAnswers[0] = value
                setMultipleChoiceAnswers(newAnswers)
              }}
            >
              {[
                "Chest tightness or rapid heartbeat",
                "Stomach discomfort or 'butterflies'",
                "Tension in shoulders or neck",
                "Sweaty palms or shaking hands",
                "Shallow breathing",
                "I don't notice physical sensations when anxious",
              ].map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`anxiety-${index}`} />
                  <Label htmlFor={`anxiety-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">When you feel angry, what physical sensations do you experience?</h3>
            <Textarea
              placeholder="Describe the physical sensations you notice when angry..."
              value={responses[2]}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[2] = e.target.value
                setResponses(newResponses)
              }}
              rows={3}
            />
          </div>
        </div>
      ),
      feedback: (
        <div className="space-y-4">
          <p>
            Connecting emotions to physical sensations is a powerful self-awareness practice. Your body often knows
            you're experiencing an emotion before your conscious mind does.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Common Physical Manifestations of Emotions:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Anxiety:</span> Chest tightness, rapid heartbeat, shallow breathing,
                stomach butterflies
              </li>
              <li>
                <span className="font-medium">Anger:</span> Increased body temperature, clenched jaw or fists, tension
                in shoulders, faster breathing
              </li>
              <li>
                <span className="font-medium">Sadness:</span> Heaviness in the chest or limbs, fatigue, slower
                movements, tearfulness
              </li>
              <li>
                <span className="font-medium">Joy:</span> Lightness, energy in limbs, relaxed facial muscles, warmth in
                chest
              </li>
            </ul>
          </div>
          <p>
            By tuning into these physical sensations, you can catch emotions earlier and respond more thoughtfully
            rather than reacting automatically.
          </p>
        </div>
      ),
    },
    {
      title: "Identifying Emotional Triggers",
      description: "Recognize the situations and thoughts that trigger strong emotional responses.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Emotional triggers are situations, comments, or events that consistently provoke a strong emotional
            reaction. Identifying your triggers helps you prepare for and manage your responses.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">What situations consistently trigger strong emotions for you?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Examples might include: criticism from authority figures, feeling ignored in conversations, tight
              deadlines, conflicts about money, etc.
            </p>
            <Textarea
              placeholder="List 3-5 situations that reliably trigger strong emotions for you..."
              value={responses[3]}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[3] = e.target.value
                setResponses(newResponses)
              }}
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">For one of these triggers, what thoughts typically go through your mind?</h3>
            <Textarea
              placeholder="What do you tell yourself when this trigger occurs? What assumptions do you make?"
              value={responses[4]}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[4] = e.target.value
                setResponses(newResponses)
              }}
              rows={3}
            />
          </div>
        </div>
      ),
      feedback: (
        <div className="space-y-4">
          <p>
            Understanding your emotional triggers is a key aspect of self-awareness. When you know what situations
            consistently provoke strong reactions, you can prepare for them and respond more intentionally.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Common Categories of Emotional Triggers:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Criticism or rejection</span> - Being judged negatively or excluded
              </li>
              <li>
                <span className="font-medium">Loss of control</span> - Situations where you feel powerless or unable to
                influence outcomes
              </li>
              <li>
                <span className="font-medium">Injustice or unfairness</span> - Witnessing or experiencing situations
                that violate your sense of fairness
              </li>
              <li>
                <span className="font-medium">Unmet expectations</span> - When reality doesn't match what you
                anticipated or hoped for
              </li>
              <li>
                <span className="font-medium">Threats to core values</span> - Situations that challenge or contradict
                your deeply held beliefs
              </li>
            </ul>
          </div>
          <p>
            The thoughts that accompany your triggers often contain assumptions or interpretations that intensify your
            emotional response. By examining these thoughts, you can challenge unhelpful patterns and develop more
            balanced perspectives.
          </p>
        </div>
      ),
    },
    {
      title: "Emotional Patterns and Themes",
      description: "Identify recurring emotional patterns in your life.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            We all have emotional patterns - recurring ways we tend to feel and respond in certain types of situations.
            Recognizing these patterns helps us understand ourselves better.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">Which of these emotional patterns do you recognize in yourself?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Select all that apply to you.</p>
            <div className="space-y-2">
              {[
                "I tend to avoid conflict, even when standing up for myself would be appropriate",
                "I often feel responsible for other people's feelings or problems",
                "I have high expectations of myself and feel disappointed when I don't meet them",
                "I worry about what others think of me and seek approval",
                "I have difficulty saying no to requests or setting boundaries",
                "I tend to see the worst-case scenario in uncertain situations",
                "I often feel like an impostor or that I don't deserve my achievements",
                "I have a strong need to be in control of situations",
                "I tend to suppress or ignore negative emotions until they become overwhelming",
              ].map((pattern, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`pattern-${index}`}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                    checked={multipleChoiceAnswers[1]?.includes(index.toString())}
                    onChange={(e) => {
                      const newAnswers = [...multipleChoiceAnswers]
                      const selectedIndexes = newAnswers[1] ? newAnswers[1].split(",") : []

                      if (e.target.checked) {
                        selectedIndexes.push(index.toString())
                      } else {
                        const indexPosition = selectedIndexes.indexOf(index.toString())
                        if (indexPosition !== -1) {
                          selectedIndexes.splice(indexPosition, 1)
                        }
                      }

                      newAnswers[1] = selectedIndexes.join(",")
                      setMultipleChoiceAnswers(newAnswers)
                    }}
                  />
                  <label htmlFor={`pattern-${index}`} className="text-sm">
                    {pattern}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      feedback: (
        <div className="space-y-4">
          <p>
            Recognizing your emotional patterns is a significant step in developing self-awareness. These patterns often
            develop early in life as ways to cope with our environments, but they may not serve us well in our adult
            lives.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Understanding Your Patterns:</h4>
            <p className="text-sm">
              The patterns you identified can provide valuable insights into your emotional tendencies. Consider:
            </p>
            <ul className="space-y-2 text-sm mt-2">
              <li>What needs might these patterns be trying to meet? (e.g., security, connection, control)</li>
              <li>How did these patterns develop? Were they adaptive in past situations?</li>
              <li>Which patterns are helpful in your current life, and which might be limiting you?</li>
            </ul>
          </div>
          <p>
            Awareness is the first step toward change. By recognizing these patterns, you can begin to make more
            conscious choices about how you respond to situations rather than reacting automatically based on old
            patterns.
          </p>
        </div>
      ),
    },
    {
      title: "Values and Emotions",
      description: "Explore how your core values connect to your emotional responses.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Our strongest emotional reactions often occur when our core values are either honored or violated.
            Understanding this connection can provide deeper insight into your emotional life.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">Which of these values are most important to you?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Select the 3-5 values that matter most to you.</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Honesty",
                "Compassion",
                "Achievement",
                "Security",
                "Freedom",
                "Fairness",
                "Loyalty",
                "Respect",
                "Growth",
                "Creativity",
                "Connection",
                "Independence",
                "Harmony",
                "Recognition",
                "Responsibility",
                "Adventure",
              ].map((value, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`value-${index}`}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                    checked={multipleChoiceAnswers[2]?.includes(index.toString())}
                    onChange={(e) => {
                      const newAnswers = [...multipleChoiceAnswers]
                      const selectedIndexes = newAnswers[2] ? newAnswers[2].split(",") : []

                      if (e.target.checked) {
                        selectedIndexes.push(index.toString())
                      } else {
                        const indexPosition = selectedIndexes.indexOf(index.toString())
                        if (indexPosition !== -1) {
                          selectedIndexes.splice(indexPosition, 1)
                        }
                      }

                      newAnswers[2] = selectedIndexes.join(",")
                      setMultipleChoiceAnswers(newAnswers)
                    }}
                  />
                  <label htmlFor={`value-${index}`} className="text-sm">
                    {value}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2 pt-2">
            <h3 className="font-medium">
              Think of a recent situation where you had a strong emotional reaction. Which of your core values was being
              honored or violated?
            </h3>
            <Textarea
              placeholder="Describe the situation and the value connection..."
              value={responses[5]}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[5] = e.target.value
                setResponses(newResponses)
              }}
              rows={4}
            />
          </div>
        </div>
      ),
      feedback: (
        <div className="space-y-4">
          <p>
            The connection between your values and emotions is powerful. When your core values are honored, you
            typically experience positive emotions like satisfaction, pride, and joy. When your values are violated,
            you're likely to feel anger, disappointment, or resentment.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Value-Emotion Connections:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">If you value honesty</span> - You might feel betrayed when someone lies to
                you or proud when you speak your truth even when it's difficult
              </li>
              <li>
                <span className="font-medium">If you value achievement</span> - You might feel frustrated when your
                progress is blocked or elated when you accomplish a goal
              </li>
              <li>
                <span className="font-medium">If you value connection</span> - You might feel hurt when excluded from
                social activities or fulfilled when having deep conversations
              </li>
              <li>
                <span className="font-medium">If you value fairness</span> - You might feel outraged when witnessing
                injustice or satisfied when everyone is treated equitably
              </li>
            </ul>
          </div>
          <p>
            Understanding your value-emotion connections helps you make sense of your strongest reactions and make
            choices that align with what matters most to you. This alignment is a key component of emotional well-being.
          </p>
        </div>
      ),
    },
  ]

  const currentExercise = exercises[currentStep]

  const handleNext = () => {
    if (currentStep < exercises.length - 1) {
      setCurrentStep(currentStep + 1)
      setShowFeedback(false)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setShowFeedback(false)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    setShowFeedback(true)
    window.scrollTo(0, 0)
  }

  const progress = ((currentStep + 1) / exercises.length) * 100

  const isSubmitDisabled = () => {
    // Check if the current step has required inputs that are empty
    if (currentStep === 0) {
      return !responses[0] || !responses[1]
    } else if (currentStep === 1) {
      return !multipleChoiceAnswers[0] || !responses[2]
    } else if (currentStep === 2) {
      return !responses[3] || !responses[4]
    } else if (currentStep === 3) {
      return !multipleChoiceAnswers[1] || multipleChoiceAnswers[1].split(",").length === 0
    } else if (currentStep === 4) {
      return !multipleChoiceAnswers[2] || multipleChoiceAnswers[2].split(",").length === 0 || !responses[5]
    }
    return false
  }

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
          <h1 className="text-2xl font-bold">Self-Awareness Exercise</h1>
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
            <CardTitle>{currentExercise.title}</CardTitle>
            <CardDescription>{currentExercise.description}</CardDescription>
          </CardHeader>
          <CardContent>{currentExercise.content}</CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            {!showFeedback ? (
              <Button onClick={handleSubmit} disabled={isSubmitDisabled()}>
                Submit
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={currentStep === exercises.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>

        {showFeedback && (
          <Card className="bg-teal-50 dark:bg-teal-950/20">
            <CardHeader>
              <CardTitle className="text-teal-600 dark:text-teal-400">Reflection</CardTitle>
            </CardHeader>
            <CardContent>{currentExercise.feedback}</CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  )
}
