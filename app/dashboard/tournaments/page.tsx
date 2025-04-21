import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TournamentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Tournaments</h1>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="pt-4">
          <div className="grid gap-4">
            {upcomingTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live" className="pt-4">
          <div className="grid gap-4">
            {liveTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="pt-4">
          <div className="grid gap-4">
            {completedTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TournamentCard({ tournament }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{tournament.title}</CardTitle>
            <CardDescription>{tournament.game}</CardDescription>
          </div>
          <Badge variant={getBadgeVariant(tournament.status)}>{tournament.status}</Badge>
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
          {tournament.status === "Completed" && <Button variant="outline">View Results</Button>}
        </div>
      </CardContent>
    </Card>
  )
}

function getBadgeVariant(status) {
  switch (status) {
    case "Live":
      return "default"
    case "Upcoming":
      return "secondary"
    case "Completed":
      return "outline"
    default:
      return "default"
  }
}

const upcomingTournaments = [
  {
    id: 1,
    title: "Weekend Chess Championship",
    game: "Chess",
    entryFee: "₹100",
    prizePool: "₹10,000",
    players: "64/128",
    dateTime: "Apr 22, 2023, 2:00 PM",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Word Masters Challenge",
    game: "Word Puzzle",
    entryFee: "₹50",
    prizePool: "₹5,000",
    players: "45/100",
    dateTime: "Apr 23, 2023, 7:00 PM",
    status: "Upcoming",
  },
]

const liveTournaments = [
  {
    id: 3,
    title: "Quiz Mania",
    game: "Quiz Master",
    entryFee: "₹75",
    prizePool: "₹7,500",
    players: "120/120",
    dateTime: "Now",
    status: "Live",
  },
  {
    id: 4,
    title: "Ludo King Tournament",
    game: "Ludo",
    entryFee: "₹30",
    prizePool: "₹3,000",
    players: "98/100",
    dateTime: "Now",
    status: "Live",
  },
]

const completedTournaments = [
  {
    id: 5,
    title: "Chess Masters League",
    game: "Chess",
    entryFee: "₹200",
    prizePool: "₹20,000",
    players: "128/128",
    dateTime: "Apr 15, 2023",
    status: "Completed",
  },
  {
    id: 6,
    title: "Word Wizards",
    game: "Word Puzzle",
    entryFee: "₹40",
    prizePool: "₹4,000",
    players: "75/100",
    dateTime: "Apr 10, 2023",
    status: "Completed",
  },
]
