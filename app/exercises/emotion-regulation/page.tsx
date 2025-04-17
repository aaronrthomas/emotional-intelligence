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

export default function EmotionRegulationExercise() {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<string[]>(Array(5).fill(""))
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState<string[]>(Array(5).fill(""))
  const [showFeedback, setShowFeedback] = useState(false)

  const exercises = [
    {
      title: "Identifying Emotional Triggers",
      description: "Recognize what situations trigger strong emotional responses.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Before we can regulate our emotions, we need to understand what triggers them. Think about a recent
            situation where you experienced a strong emotional reaction.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">Describe the situation briefly:</h3>
            <Textarea
              placeholder="What happened? Where were you? Who was involved?"
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
            <h3 className="font-medium">What emotion(s) did you feel?</h3>
            <Textarea
              placeholder="Be specific about the emotions you experienced..."
              value={responses[1]}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[1] = e.target.value
                setResponses(newResponses)
              }}
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">On a scale of 1-10, how intense was this emotion?</h3>
            <RadioGroup
              value={multipleChoiceAnswers[0]}
              onValueChange={(value) => {
                const newAnswers = [...multipleChoiceAnswers]
                newAnswers[0] = value
                setMultipleChoiceAnswers(newAnswers)
              }}
              className="flex space-x-2"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="flex flex-col items-center">
                  <RadioGroupItem value={num.toString()} id={`intensity-${num}`} className="sr-only" />
                  <Label
                    htmlFor={`intensity-${num}`}
                    className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer ${
                      multipleChoiceAnswers[0] === num.toString()
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    }`}
                  >
                    {num}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex justify-between text-sm text-gray-500 pt-1">
              <span>Mild</span>
              <span>Moderate</span>
              <span>Intense</span>
            </div>
          </div>
        </div>
      ),
      feedback: (
        <div className="space-y-4">
          <p>
            Recognizing your emotional triggers is the first step toward emotional regulation. By identifying situations
            that consistently provoke strong emotional responses, you can prepare for them and develop strategies to
            manage your reactions.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Common Emotional Triggers:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Feeling criticized or judged</li>
              <li>• Being excluded or ignored</li>
              <li>• Experiencing a loss of control</li>
              <li>• Facing rejection or disappointment</li>
              <li>• Encountering conflict or confrontation</li>
              <li>• Feeling overwhelmed by demands or expectations</li>
            </ul>
          </div>
          <p>
            Understanding the intensity of your emotional reactions helps you gauge when you might need to apply
            regulation strategies. The higher the intensity, the more important it is to have effective techniques
            ready.
          </p>
        </div>
      ),
    },
    {
      title: "Physical Responses to Emotions",
      description: "Recognize how emotions manifest in your body.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Our emotions often manifest as physical sensations in our bodies. Being aware of these physical cues can
            help us catch emotions earlier and regulate them more effectively.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">
              When you feel the emotion you described earlier, where do you feel it in your body?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Select all that apply.</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Chest (tightness, racing heart)",
                "Stomach (butterflies, nausea)",
                "Throat (lump, tightness)",
                "Head (headache, pressure)",
                "Shoulders/Neck (tension)",
                "Hands (sweating, shaking)",
                "Face (flushing, heat)",
                "Legs (weakness, restlessness)",
                "Breathing (shallow, rapid)",
                "Overall body (temperature changes)",
              ].map((location, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`location-${index}`}
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
                  <label htmlFor={`location-${index}`} className="text-sm">
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">What early physical signs might alert you that this emotion is building?</h3>
            <Textarea
              placeholder="Describe the subtle physical sensations that appear first..."
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
            Being aware of how emotions manifest physically in your body gives you an early warning system. These
            physical sensations often appear before you're fully aware of the emotion, giving you a chance to implement
            regulation strategies sooner.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">The Body-Emotion Connection:</h4>
            <p className="text-sm mb-2">
              Research shows that different emotions tend to activate different patterns in the body. For example:
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                • <span className="font-medium">Anger</span>: Often felt in the chest, face, and hands with increased
                heat
              </li>
              <li>
                • <span className="font-medium">Anxiety</span>: Typically manifests in the chest and stomach with
                tension
              </li>
              <li>
                • <span className="font-medium">Sadness</span>: May be felt as heaviness in the chest and limbs
              </li>
              <li>
                • <span className="font-medium">Joy</span>: Often experienced as lightness throughout the body
              </li>
            </ul>
          </div>
          <p>
            By tuning into these physical sensations, you can develop what psychologists call "interoceptive awareness"
            - the ability to notice internal bodily sensations. This awareness is a key component of emotional
            regulation.
          </p>
        </div>
      ),
    },
    {
      title: "Thought Patterns and Emotions",
      description: "Identify how your thoughts influence your emotional responses.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Our thoughts and interpretations of situations strongly influence our emotional responses. Identifying
            unhelpful thought patterns can help us regulate our emotions more effectively.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">What thoughts went through your mind during the situation you described?</h3>
            <Textarea
              placeholder="What were you telling yourself? What assumptions were you making?"
              value={responses[3]}
              onChange={(e) => {
                const newResponses = [...responses]
                newResponses[3] = e.target.value
                setResponses(newResponses)
              }}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Do you recognize any of these thought patterns in your response?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Select all that apply.</p>
            <div className="space-y-2">
              {[
                {
                  pattern: "All-or-nothing thinking",
                  description: "Seeing things in black and white categories with no middle ground",
                },
                {
                  pattern: "Catastrophizing",
                  description: "Expecting the worst possible outcome",
                },
                {
                  pattern: "Personalization",
                  description: "Believing that everything others do or say is a reaction to you",
                },
                {
                  pattern: "Mind reading",
                  description: "Assuming you know what others are thinking without evidence",
                },
                {
                  pattern: "Emotional reasoning",
                  description: "Believing something must be true because it 'feels' true",
                },
                {
                  pattern: "Should statements",
                  description: "Having rigid rules about how you or others 'should' behave",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id={`pattern-${index}`}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600 mt-1"
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
                  <div>
                    <label htmlFor={`pattern-${index}`} className="font-medium text-sm">
                      {item.pattern}
                    </label>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      feedback: (
        <div className="space-y-4">
          <p>
            Our thoughts and interpretations play a crucial role in how we feel. The same situation can trigger
            different emotions in different people based on how they interpret it. Recognizing unhelpful thought
            patterns is a key step in emotional regulation.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Challenging Unhelpful Thoughts:</h4>
            <p className="text-sm mb-2">When you notice these thought patterns, try asking yourself:</p>
            <ul className="space-y-1 text-sm">
              <li>• What evidence supports or contradicts this thought?</li>
              <li>• Is there another way to look at this situation?</li>
              <li>• What would I tell a friend who had this thought?</li>
              <li>• Will this matter in a week? A month? A year?</li>
              <li>• What's the most helpful way to think about this?</li>
            </ul>
          </div>
          <p>
            By challenging unhelpful thought patterns, you can change your emotional response to situations. This
            cognitive approach to emotional regulation is at the heart of cognitive-behavioral therapy, one of the most
            evidence-based approaches to emotional well-being.
          </p>
        </div>
      ),
    },
    {
      title: "Regulation Strategies",
      description: "Learn and practice techniques to regulate your emotions effectively.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Now that you've identified your triggers, physical responses, and thought patterns, let's explore strategies
            to regulate your emotions effectively.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">Which of these regulation strategies have you tried before?</h3>
            <div className="space-y-2">
              {[
                "Deep breathing or other breathing exercises",
                "Physical activity (walking, running, etc.)",
                "Mindfulness meditation",
                "Journaling or writing about emotions",
                "Talking to a supportive person",
                "Cognitive reframing (challenging negative thoughts)",
                "Distraction or time-out",
                "Progressive muscle relaxation",
                "Visualization or guided imagery",
                "Creative expression (art, music, etc.)",
              ].map((strategy, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`strategy-${index}`}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                    checked={multipleChoiceAnswers[3]?.includes(index.toString())}
                    onChange={(e) => {
                      const newAnswers = [...multipleChoiceAnswers]
                      const selectedIndexes = newAnswers[3] ? newAnswers[3].split(",") : []

                      if (e.target.checked) {
                        selectedIndexes.push(index.toString())
                      } else {
                        const indexPosition = selectedIndexes.indexOf(index.toString())
                        if (indexPosition !== -1) {
                          selectedIndexes.splice(indexPosition, 1)
                        }
                      }

                      newAnswers[3] = selectedIndexes.join(",")
                      setMultipleChoiceAnswers(newAnswers)
                    }}
                  />
                  <label htmlFor={`strategy-${index}`} className="text-sm">
                    {strategy}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">
              For the emotion you described earlier, which regulation strategy would you like to try next time?
            </h3>
            <Textarea
              placeholder="Describe the strategy and how you plan to implement it..."
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
            Having a toolkit of emotion regulation strategies is essential for emotional intelligence. Different
            strategies work better for different emotions and situations, so it's valuable to experiment with various
            approaches.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Types of Regulation Strategies:</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Physiological strategies</span> (deep breathing, exercise) work by
                directly affecting your body's stress response system
              </li>
              <li>
                <span className="font-medium">Attentional strategies</span> (mindfulness, distraction) work by shifting
                your focus
              </li>
              <li>
                <span className="font-medium">Cognitive strategies</span> (reframing, perspective-taking) work by
                changing how you think about the situation
              </li>
              <li>
                <span className="font-medium">Social strategies</span> (talking to others, seeking support) work by
                leveraging connection with others
              </li>
            </ul>
          </div>
          <p>
            Research suggests that the most effective approach is to have multiple strategies and to match the strategy
            to the specific situation. For high-intensity emotions, physiological strategies often need to come first,
            before cognitive approaches can be effective.
          </p>
        </div>
      ),
    },
    {
      title: "Creating Your Regulation Plan",
      description: "Develop a personalized plan for managing difficult emotions.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Let's put everything together into a personalized emotion regulation plan that you can use when facing
            challenging emotions.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium">For the emotion you've been focusing on, complete this regulation plan:</h3>
            <div className="space-y-4 border rounded-lg p-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">1. Early warning signs (physical sensations, thoughts):</h4>
                <Textarea
                  placeholder="What signals will alert you that this emotion is building?"
                  value={responses[5]}
                  onChange={(e) => {
                    const newResponses = [...responses]
                    newResponses[5] = e.target.value
                    setResponses(newResponses)
                  }}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">2. Immediate strategies (when emotion is intense):</h4>
                <Textarea
                  placeholder="What can you do in the moment to manage the intensity?"
                  value={responses[6]}
                  onChange={(e) => {
                    const newResponses = [...responses]
                    newResponses[6] = e.target.value
                    setResponses(newResponses)
                  }}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">3. Reflective strategies (after the situation):</h4>
                <Textarea
                  placeholder="How will you process and learn from the experience?"
                  value={responses[7]}
                  onChange={(e) => {
                    const newResponses = [...responses]
                    newResponses[7] = e.target.value
                    setResponses(newResponses)
                  }}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">4. Preventative practices (ongoing habits):</h4>
                <Textarea
                  placeholder="What regular practices will help build your emotional resilience?"
                  value={responses[8]}
                  onChange={(e) => {
                    const newResponses = [...responses]
                    newResponses[8] = e.target.value
                    setResponses(newResponses)
                  }}
                  rows={2}
                />
              </div>
            </div>
          </div>
        </div>
      ),
      feedback: (
        <div className="space-y-4">
          <p>
            Congratulations on creating your personalized emotion regulation plan! Having a structured approach like
            this makes it much more likely that you'll be able to manage difficult emotions effectively when they arise.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Keys to Successful Emotion Regulation:</h4>
            <ul className="space-y-1 text-sm">
              <li>
                • <span className="font-medium">Practice regularly</span> - Don't wait for intense emotions to try these
                strategies
              </li>
              <li>
                • <span className="font-medium">Start early</span> - The sooner you catch an emotion building, the
                easier it is to regulate
              </li>
              <li>
                • <span className="font-medium">Be flexible</span> - Different situations may require different
                approaches
              </li>
              <li>
                • <span className="font-medium">Be patient</span> - Emotional regulation is a skill that develops with
                practice
              </li>
              <li>
                • <span className="font-medium">Show self-compassion</span> - Treat yourself with kindness when you
                struggle
              </li>
            </ul>
          </div>
          <p>
            Remember that the goal of emotion regulation isn't to eliminate negative emotions—all emotions provide
            valuable information and serve important functions. Rather, the goal is to manage emotions effectively so
            they don't overwhelm you or lead to unhelpful behaviors.
          </p>
          <p>
            With practice, you'll develop greater emotional resilience and flexibility, allowing you to navigate life's
            challenges with greater ease and wisdom.
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
      return !responses[0] || !responses[1] || !multipleChoiceAnswers[0]
    } else if (currentStep === 1) {
      return !multipleChoiceAnswers[1] || multipleChoiceAnswers[1].split(",").length === 0 || !responses[2]
    } else if (currentStep === 2) {
      return !responses[3] || !multipleChoiceAnswers[2] || multipleChoiceAnswers[2].split(",").length === 0
    } else if (currentStep === 3) {
      return !multipleChoiceAnswers[3] || multipleChoiceAnswers[3].split(",").length === 0 || !responses[4]
    } else if (currentStep === 4) {
      return !responses[5] || !responses[6] || !responses[7] || !responses[8]
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
          <h1 className="text-2xl font-bold">Emotion Regulation Exercise</h1>
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
