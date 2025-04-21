"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Info, Users, Clock, Trophy } from "lucide-react"

export default function PokerPage() {
  const [selectedTable, setSelectedTable] = useState(null)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Poker</h1>
        <Button>How to Play</Button>
      </div>

      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <Image src="/placeholder.svg?height=300&width=1200" alt="Poker Banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-2">Texas Hold'em Poker</h2>
          <p className="text-white/80 max-w-md mb-4">
            Test your skills in the most popular poker variant. Bluff, bet, and win big!
          </p>
          <div className="flex gap-4">
            <Button>Play Now</Button>
            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Learn Rules
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="cash-tables">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="cash-tables">Cash Tables</TabsTrigger>
          <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
          <TabsTrigger value="sit-n-go">Sit & Go</TabsTrigger>
        </TabsList>

        <TabsContent value="cash-tables" className="pt-4">
          <div className="grid gap-4">
            {cashTables.map((table) => (
              <Card key={table.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{table.name}</CardTitle>
                      <CardDescription>{table.description}</CardDescription>
                    </div>
                    <Badge variant={table.status === "Running" ? "default" : "secondary"}>{table.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Players</p>
                        <p className="font-medium">{table.players}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Blinds</p>
                        <p className="font-medium">{table.blinds}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Min Buy-in</p>
                        <p className="font-medium">{table.minBuyin}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Max Buy-in</p>
                        <p className="font-medium">{table.maxBuyin}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i}`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    {table.totalPlayers > 3 && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                        +{table.totalPlayers - 3}
                      </div>
                    )}
                  </div>
                  <Button>Join Table</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tournaments" className="pt-4">
          <div className="grid gap-4">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{tournament.name}</CardTitle>
                      <CardDescription>{tournament.description}</CardDescription>
                    </div>
                    <Badge variant={tournament.status === "Registering" ? "default" : "secondary"}>
                      {tournament.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Prize Pool</p>
                        <p className="font-medium">{tournament.prizePool}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Buy-in</p>
                        <p className="font-medium">{tournament.buyin}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Players</p>
                        <p className="font-medium">{tournament.players}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Starts In</p>
                        <p className="font-medium">{tournament.startsIn}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {tournament.status === "Registering" ? "Register Now" : "View Details"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sit-n-go" className="pt-4">
          <div className="grid gap-4">
            {sitAndGo.map((game) => (
              <Card key={game.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{game.name}</CardTitle>
                      <CardDescription>{game.description}</CardDescription>
                    </div>
                    <Badge variant={game.status === "Filling" ? "default" : "secondary"}>{game.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Prize Pool</p>
                        <p className="font-medium">{game.prizePool}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Buy-in</p>
                        <p className="font-medium">{game.buyin}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Players</p>
                        <p className="font-medium">{game.players}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Format</p>
                        <p className="font-medium">{game.format}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{game.status === "Filling" ? "Join Now" : "View Details"}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const cashTables = [
  {
    id: 1,
    name: "Beginner's Table",
    description: "Perfect for new players",
    status: "Running",
    players: "4/6",
    blinds: "₹5/₹10",
    minBuyin: "₹200",
    maxBuyin: "₹500",
    totalPlayers: 4,
  },
  {
    id: 2,
    name: "Medium Stakes",
    description: "For intermediate players",
    status: "Running",
    players: "5/6",
    blinds: "₹10/₹20",
    minBuyin: "₹500",
    maxBuyin: "₹1,000",
    totalPlayers: 5,
  },
  {
    id: 3,
    name: "High Rollers",
    description: "For experienced players",
    status: "Running",
    players: "3/6",
    blinds: "₹25/₹50",
    minBuyin: "₹1,000",
    maxBuyin: "₹5,000",
    totalPlayers: 3,
  },
]

const tournaments = [
  {
    id: 1,
    name: "Daily Poker Tournament",
    description: "Daily tournament with guaranteed prize pool",
    status: "Registering",
    prizePool: "₹10,000",
    buyin: "₹100",
    players: "45/100",
    startsIn: "2 hours",
  },
  {
    id: 2,
    name: "Weekend Special",
    description: "Weekend tournament with bigger prize pool",
    status: "Registering",
    prizePool: "₹25,000",
    buyin: "₹250",
    players: "78/200",
    startsIn: "1 day",
  },
  {
    id: 3,
    name: "Monthly Championship",
    description: "Monthly tournament with huge prize pool",
    status: "Upcoming",
    prizePool: "₹1,00,000",
    buyin: "₹500",
    players: "120/500",
    startsIn: "5 days",
  },
]

const sitAndGo = [
  {
    id: 1,
    name: "6-Player Turbo",
    description: "Fast-paced 6-player tournament",
    status: "Filling",
    prizePool: "₹600",
    buyin: "₹100",
    players: "3/6",
    format: "Turbo",
  },
  {
    id: 2,
    name: "9-Player Standard",
    description: "Standard 9-player tournament",
    status: "Filling",
    prizePool: "₹900",
    buyin: "₹100",
    players: "5/9",
    format: "Standard",
  },
  {
    id: 3,
    name: "Heads-Up Challenge",
    description: "1v1 poker challenge",
    status: "Waiting",
    prizePool: "₹200",
    buyin: "₹100",
    players: "0/2",
    format: "Heads-Up",
  },
]
