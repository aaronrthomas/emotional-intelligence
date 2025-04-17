"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, ArrowLeft, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await signUp(name, email, password)
      router.push("/")
    } catch (error) {
      console.error("Sign up failed:", error)
      // In a real app, you would show an error message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost" className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center">
            <Brain className="h-8 w-8 text-teal-600" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Enter your details to create your EmotionIQ account
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeTerms}
                    onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-teal-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-teal-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={!agreeTerms || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-teal-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
