"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function KYCPage() {
  const [kycStatus, setKycStatus] = useState("pending")

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">KYC Verification</h1>

      {kycStatus === "pending" && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Verification Required</AlertTitle>
          <AlertDescription>
            Complete your KYC verification to enable withdrawals and participate in tournaments with higher stakes.
          </AlertDescription>
        </Alert>
      )}

      {kycStatus === "verified" && (
        <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-50">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Verification Complete</AlertTitle>
          <AlertDescription>
            Your KYC verification has been approved. You can now participate in all tournaments and withdraw funds.
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="personal">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Details</TabsTrigger>
          <TabsTrigger value="address">Address</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Provide your personal details for verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pan">PAN Number</Label>
                <Input id="pan" placeholder="Enter your PAN number" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save & Continue</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="address" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Address Information</CardTitle>
              <CardDescription>Provide your current residential address</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address-line1">Address Line 1</Label>
                <Input id="address-line1" placeholder="Enter your address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address-line2">Address Line 2 (Optional)</Label>
                <Input id="address-line2" placeholder="Apartment, suite, etc." />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter your city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Enter your state" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pincode">PIN Code</Label>
                  <Input id="pincode" placeholder="Enter your PIN code" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Enter your country" defaultValue="India" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save & Continue</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Verification</CardTitle>
              <CardDescription>Upload the required documents for verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Aadhaar Card (Front)</Label>
                <div className="flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-300 p-4 hover:bg-gray-50">
                  <div className="flex flex-col items-center space-y-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                    <span className="text-xs text-gray-400">PNG, JPG or PDF (max. 5MB)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Aadhaar Card (Back)</Label>
                <div className="flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-300 p-4 hover:bg-gray-50">
                  <div className="flex flex-col items-center space-y-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                    <span className="text-xs text-gray-400">PNG, JPG or PDF (max. 5MB)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>PAN Card</Label>
                <div className="flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-300 p-4 hover:bg-gray-50">
                  <div className="flex flex-col items-center space-y-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                    <span className="text-xs text-gray-400">PNG, JPG or PDF (max. 5MB)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Selfie with ID Proof</Label>
                <div className="flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-300 p-4 hover:bg-gray-50">
                  <div className="flex flex-col items-center space-y-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-500">Click to upload or drag and drop</span>
                    <span className="text-xs text-gray-400">PNG, JPG (max. 5MB)</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setKycStatus("verified")}>Submit for Verification</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
