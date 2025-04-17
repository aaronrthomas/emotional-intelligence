"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Brain, Home, LineChart, PieChart, Trophy } from "lucide-react"

export default function ProgressPage() {
  const [period, setPeriod] = useState("month")

  const skills = [
    { name: "Emotion Recognition", score: 72, improvement: 15 },
    { name: "Active Listening", score: 65, improvement: 8 },
    { name: "Empathy", score: 58, improvement: 12 },
    { name: "Conflict Resolution", score: 45, improvement: 5 },
    { name: "Self-Awareness", score: 80, improvement: 10 },
  ]

  const activities = [
    { name: "Emotion Recognition Exercise", date: "2 days ago", type: "exercise", score: 4, outOf: 5 },
    { name: "Difficult Conversation Simulation", date: "1 week ago", type: "simulation", score: 3, outOf: 5 },
    { name: "Active Listening Exercise", date: "2 weeks ago", type: "exercise", score: 8, outOf: 10 },
    { name: "Conflict Resolution Simulation", date: "3 weeks ago", type: "simulation", score: 7, outOf: 10 },
    { name: "Empathy Building Exercise", date: "1 month ago", type: "exercise", score: 9, outOf: 10 },
  ]

  const achievements = [
    { name: "First Steps", description: "Complete your first exercise", earned: true },
    { name: "Consistent Learner", description: "Complete activities for 5 consecutive days", earned: true },
    { name: "Emotion Expert", description: "Score 90% or higher on an emotion recognition exercise", earned: false },
    { name: "Empathy Master", description: "Complete all empathy building exercises", earned: false },
    {
      name: "Conflict Resolver",
      description: "Successfully complete 3 conflict resolution simulations",
      earned: false,
    },
  ]

  return (
    <div className="container max-w-5xl py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/">
          <Button variant="outline" size="icon">
            <Home className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Your Progress</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-gray-500 mt-1">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">76%</div>
            <p className="text-xs text-green-500 mt-1">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2/10</div>
            <p className="text-xs text-gray-500 mt-1">2 new achievements available</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Skill Progress</CardTitle>
              <BarChart className="h-4 w-4 text-gray-500" />
            </div>
            <CardDescription>Your progress across different emotional intelligence skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-sm text-gray-500">{skill.score}/100</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={skill.score} className="h-2 flex-1" />
                    <div className="text-xs text-green-500">+{skill.improvement}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Activity Timeline</CardTitle>
              <LineChart className="h-4 w-4 text-gray-500" />
            </div>
            <CardDescription>Your recent activities and scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center ${
                      activity.type === "exercise" ? "bg-teal-100 text-teal-700" : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {activity.type === "exercise" ? <Brain className="h-4 w-4" /> : <PieChart className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{activity.name}</div>
                      <div className="text-sm text-gray-500">{activity.date}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Score: {activity.score}/{activity.outOf} ({Math.round((activity.score / activity.outOf) * 100)}%)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-gray-500" />
          </div>
          <CardDescription>Milestones you've reached and goals to aim for</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={
                  achievement.earned ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20" : ""
                }
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-base font-medium flex items-center gap-2">
                    {achievement.earned && <Trophy className="h-4 w-4 text-green-500" />}
                    {achievement.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                  <div className="mt-2 text-xs font-medium">
                    {achievement.earned ? (
                      <span className="text-green-500">Earned</span>
                    ) : (
                      <span className="text-gray-500">In progress</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
