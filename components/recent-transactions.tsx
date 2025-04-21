import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const transactions = [
  {
    id: 1,
    type: "deposit",
    amount: "₹500",
    status: "completed",
    date: "Today, 10:30 AM",
    description: "Wallet deposit",
  },
  {
    id: 2,
    type: "withdrawal",
    amount: "₹200",
    status: "completed",
    date: "Yesterday, 3:45 PM",
    description: "Withdrawal to bank account",
  },
  {
    id: 3,
    type: "entry",
    amount: "₹50",
    status: "completed",
    date: "Yesterday, 2:30 PM",
    description: "Quiz Master tournament entry",
  },
  {
    id: 4,
    type: "winning",
    amount: "₹250",
    status: "completed",
    date: "Apr 15, 2023, 6:15 PM",
    description: "Word Puzzle tournament winning",
  },
  {
    id: 5,
    type: "deposit",
    amount: "₹1,000",
    status: "completed",
    date: "Apr 10, 2023, 11:20 AM",
    description: "Wallet deposit",
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your recent financial activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    transaction.type === "deposit" || transaction.type === "winning"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "deposit" || transaction.type === "winning" ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div
                className={`font-medium ${
                  transaction.type === "deposit" || transaction.type === "winning" ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.type === "deposit" || transaction.type === "winning" ? "+" : "-"}
                {transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
