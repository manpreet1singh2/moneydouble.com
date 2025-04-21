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

export function UserWallet() {
  const [openDeposit, setOpenDeposit] = useState(false)
  const [openWithdraw, setOpenWithdraw] = useState(false)

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
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" min="100" placeholder="Enter amount" />
              </div>
            </div>
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
                <Label htmlFor="withdraw-amount">Amount</Label>
                <Input id="withdraw-amount" type="number" min="100" max="2500" placeholder="Enter amount" />
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
