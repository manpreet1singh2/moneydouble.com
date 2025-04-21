"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"

export default function WalletPage() {
  const [amount, setAmount] = useState("")

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Wallet</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
            <CardDescription>Your current balance and wallet details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-4xl font-bold">₹2,500</h3>
              <p className="text-sm text-muted-foreground">Available Balance</p>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Total Deposited</p>
                  <p>₹5,000</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Total Withdrawn</p>
                  <p>₹1,500</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Total Winnings</p>
                  <p>₹1,250</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Total Spent</p>
                  <p>₹2,250</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Funds</CardTitle>
            <CardDescription>Add or withdraw money from your wallet</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="deposit">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="deposit">Add Money</TabsTrigger>
                <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
              </TabsList>

              <TabsContent value="deposit" className="pt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="deposit-amount">Amount</Label>
                    <Input
                      id="deposit-amount"
                      type="number"
                      min="100"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[500, 1000, 2000, 5000].map((value) => (
                      <Button key={value} variant="outline" size="sm" onClick={() => setAmount(value.toString())}>
                        ₹{value}
                      </Button>
                    ))}
                  </div>

                  <div className="grid gap-2">
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="justify-start">
                        <img src="/placeholder.svg?height=20&width=20" alt="UPI" className="mr-2 h-5 w-5" />
                        UPI
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <img src="/placeholder.svg?height=20&width=20" alt="Card" className="mr-2 h-5 w-5" />
                        Card
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <img src="/placeholder.svg?height=20&width=20" alt="Net Banking" className="mr-2 h-5 w-5" />
                        Net Banking
                      </Button>
                    </div>
                  </div>

                  <Button className="mt-2">Add Money</Button>
                </div>
              </TabsContent>

              <TabsContent value="withdraw" className="pt-4">
                <div className="grid gap-4">
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
                    {[500, 1000, 1500, 2000].map((value) => (
                      <Button key={value} variant="outline" size="sm" onClick={() => setAmount(value.toString())}>
                        ₹{value}
                      </Button>
                    ))}
                  </div>

                  <div className="grid gap-2">
                    <Label>Bank Account</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select bank account</option>
                      <option value="account1">HDFC Bank - XXXX1234</option>
                      <option value="account2">SBI - XXXX5678</option>
                      <option value="add-new">+ Add new account</option>
                    </select>
                  </div>

                  <Button className="mt-2">Withdraw</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <RecentTransactions />
    </div>
  )
}
