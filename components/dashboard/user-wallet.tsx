"use client"

import { useState } from "react"
import { PlusCircle, MinusCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UserWallet() {
  const [openDeposit, setOpenDeposit] = useState(false)
  const [openWithdraw, setOpenWithdraw] = useState(false)
  const [amount, setAmount] = useState("")

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Wallet Balance</CardTitle>
        <CardDescription>Your current balance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">₹2,500</div>
        <p className="text-xs text-muted-foreground">Last updated: Today, 10:30 AM</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog open={openDeposit} onOpenChange={setOpenDeposit}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Money
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Money to Wallet</DialogTitle>
              <DialogDescription>Enter the amount you want to add to your wallet.</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="upi" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upi">UPI</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
              </TabsList>
              <TabsContent value="upi" className="space-y-4 pt-4">
                <div className="grid gap-2">
                  <Label htmlFor="upi-id">UPI ID</Label>
                  <Input id="upi-id" placeholder="username@upi" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    min="100"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[100, 500, 1000, 2000].map((value) => (
                    <Button key={value} variant="outline" size="sm" onClick={() => setAmount(value.toString())}>
                      ₹{value}
                    </Button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="cards" className="space-y-4 pt-4">
                <div className="grid gap-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="card-amount">Amount</Label>
                  <Input
                    id="card-amount"
                    type="number"
                    min="100"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[100, 500, 1000, 2000].map((value) => (
                    <Button key={value} variant="outline" size="sm" onClick={() => setAmount(value.toString())}>
                      ₹{value}
                    </Button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="netbanking" className="space-y-4 pt-4">
                <div className="grid gap-2">
                  <Label htmlFor="bank">Select Bank</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="nb-amount">Amount</Label>
                  <Input
                    id="nb-amount"
                    type="number"
                    min="100"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[100, 500, 1000, 2000].map((value) => (
                    <Button key={value} variant="outline" size="sm" onClick={() => setAmount(value.toString())}>
                      ₹{value}
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter>
              <Button onClick={() => setOpenDeposit(false)}>Add Money</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={openWithdraw} onOpenChange={setOpenWithdraw}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <MinusCircle className="mr-2 h-4 w-4" />
              Withdraw
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Withdraw Money</DialogTitle>
              <DialogDescription>Enter the amount you want to withdraw from your wallet.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="bank-account">Bank Account</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select bank account</option>
                  <option value="account1">HDFC Bank - XXXX1234</option>
                  <option value="account2">SBI - XXXX5678</option>
                  <option value="add-new">+ Add new account</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="withdraw-amount">Amount</Label>
                <Input
                  id="withdraw-amount"
                  type="number"
                  min="100"
                  max="2500"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {[100, 500, 1000, 2000].map((value) => (
                  <Button key={value} variant="outline" size="sm" onClick={() => setAmount(value.toString())}>
                    ₹{value}
                  </Button>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setOpenWithdraw(false)}>Withdraw</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
