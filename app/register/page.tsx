"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="container flex h-screen max-w-screen-xl items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center">
            {currentStep > 1 && (
              <Button variant="ghost" size="icon" onClick={handlePrevStep} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <div>
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Step {currentStep} of 3:{" "}
                {currentStep === 1
                  ? "Basic Information"
                  : currentStep === 2
                    ? "Contact Details"
                    : "Identity Verification"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentStep === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Create a password" />
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary underline">
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary underline">
                    privacy policy
                  </Link>
                </label>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="State" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pincode">PIN Code</Label>
                  <Input id="pincode" placeholder="PIN Code" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Country" defaultValue="India" />
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="pan">PAN Card Number</Label>
                <Input id="pan" placeholder="Enter your PAN number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                <Input id="aadhaar" placeholder="Enter your Aadhaar number" />
              </div>
              <div className="space-y-2">
                <Label>Upload PAN Card</Label>
                <div className="flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-300 p-4 hover:bg-gray-50">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                    <span className="text-xs text-gray-400">PNG, JPG or PDF (max. 5MB)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Upload Aadhaar Card</Label>
                <div className="flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-300 p-4 hover:bg-gray-50">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                    <span className="text-xs text-gray-400">PNG, JPG or PDF (max. 5MB)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="verify" />
                <label
                  htmlFor="verify"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I confirm that all the information provided is accurate and belongs to me.
                </label>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          {currentStep < 3 ? (
            <Button className="w-full" onClick={handleNextStep}>
              Continue
            </Button>
          ) : (
            <Button className="w-full">Complete Registration</Button>
          )}
        </CardFooter>
        <div className="px-8 pb-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary underline">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  )
}
