"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string, remember: boolean) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage on initial load
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("emotioniq-user")
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (e) {
          console.error("Failed to parse stored user:", e)
          localStorage.removeItem("emotioniq-user")
        }
      }
      setIsLoading(false)
    }
  }, [])

  const signIn = async (email: string, password: string, remember: boolean) => {
    // In a real app, this would make an API call to authenticate
    // For demo purposes, we'll simulate a successful login
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser = {
      id: "user-1",
      name: email.split("@")[0], // Extract name from email
      email,
    }

    setUser(newUser)

    // Store user in localStorage if remember is checked or always for demo purposes
    localStorage.setItem("emotioniq-user", JSON.stringify(newUser))

    setIsLoading(false)
  }

  const signUp = async (name: string, email: string, password: string) => {
    // In a real app, this would make an API call to register
    // For demo purposes, we'll simulate a successful registration
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser = {
      id: "user-1",
      name,
      email,
    }

    setUser(newUser)
    localStorage.setItem("emotioniq-user", JSON.stringify(newUser))

    setIsLoading(false)
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("emotioniq-user")
  }

  return <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
