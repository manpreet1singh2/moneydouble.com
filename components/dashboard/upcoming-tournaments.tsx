import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const tournaments = [
  {
    id: 1,
    title: "Weekend Poker Championship",
    game: "Poker",
    entryFee: "₹100",
    prizePool: "₹10,000",
    players: "64/128",
    dateTime: "Apr 22, 2023, 2:00 PM",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Rummy Masters Tournament",
    game: "Rummy",
    entryFee: "₹50",
    prizePool: "₹5,000",
    players: "45/100",
    dateTime: "Apr 23, 2023, 7:00 PM",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Ludo King Championship",
    game: "Ludo",
    entryFee: "₹30",
    prizePool: "₹3,000",
    players: "98/100",
    dateTime: "Today, 8:00 PM",
    status: "Live",
  },
  {
    id: 4,
    title: "IPL Fantasy League",
    game: "Fantasy Cricket",
    entryFee: "₹200",
    prizePool: "₹20,000",
    players: "1250/2000",
    dateTime: "Apr 20, 2023, 7:30 PM",
    status: "Upcoming",
  },
]

export function UpcomingTournaments() {
  return (
    <div className="grid gap-4">
      {tournaments.map((tournament) => (
        <Card key={tournament.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{tournament.title}</CardTitle>
                <CardDescription>{tournament.game}</CardDescription>
              </div>
              <Badge variant={tournament.status === "Live" ? "default" : "secondary"}>{tournament.status}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div>
                <p className="text-sm text-muted-foreground">Entry Fee</p>
                <p className="font-medium">{tournament.entryFee}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Prize Pool</p>
                <p className="font-medium">{tournament.prizePool}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Players</p>
                <p className="font-medium">{tournament.players}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-medium">{tournament.dateTime}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              {tournament.status === "Upcoming" && <Button>Register Now</Button>}
              {tournament.status === "Live" && <Button>Join Now</Button>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
