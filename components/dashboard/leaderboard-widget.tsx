import { Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const leaderboardData = [
  {
    id: 1,
    name: "Rahul Sharma",
    points: 2450,
    avatar: "/placeholder.svg?height=40&width=40",
    rank: 1,
    game: "Poker",
  },
  {
    id: 2,
    name: "Priya Patel",
    points: 2320,
    avatar: "/placeholder.svg?height=40&width=40",
    rank: 2,
    game: "Rummy",
  },
  {
    id: 3,
    name: "Amit Kumar",
    points: 2180,
    avatar: "/placeholder.svg?height=40&width=40",
    rank: 3,
    game: "Poker",
  },
  {
    id: 4,
    name: "Neha Singh",
    points: 2050,
    avatar: "/placeholder.svg?height=40&width=40",
    rank: 4,
    game: "Fantasy Cricket",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    points: 1980,
    avatar: "/placeholder.svg?height=40&width=40",
    rank: 5,
    game: "Ludo",
  },
]

export function LeaderboardWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>Top players this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((player) => (
            <div key={player.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  {player.rank}
                </div>
                <Avatar>
                  <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                  <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{player.name}</p>
                  <p className="text-xs text-muted-foreground">{player.game}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="font-medium">{player.points}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
