import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const games = [
  {
    id: 1,
    title: "Poker",
    description: "Test your strategy and bluffing skills",
    players: "50,000+",
    entryFee: "₹50",
    prize: "₹1 Lakh Daily",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Strategy", "Cards"],
    status: "Live",
  },
  {
    id: 2,
    title: "Rummy",
    description: "India's favorite card game of skill",
    players: "100,000+",
    entryFee: "₹25",
    prize: "₹2 Lakh Daily",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Cards", "Skill"],
    status: "Live",
  },
  {
    id: 3,
    title: "Ludo",
    description: "Classic board game with strategic moves",
    players: "200,000+",
    entryFee: "₹30",
    prize: "₹50,000 Daily",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Board", "Strategy"],
    status: "Live",
  },
  {
    id: 4,
    title: "Fantasy Cricket",
    description: "Create your dream team and win big",
    players: "500,000+",
    entryFee: "₹100",
    prize: "₹5 Lakh Per Match",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Sports", "Fantasy"],
    status: "Live",
  },
]

export function GamesList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {games.map((game) => (
        <Card key={game.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
            <div className="absolute right-2 top-2">
              <Badge variant={game.status === "Live" ? "default" : "secondary"}>{game.status}</Badge>
            </div>
          </div>
          <CardHeader className="p-4 pb-0">
            <CardTitle>{game.title}</CardTitle>
            <CardDescription>{game.description}</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {game.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Entry Fee</p>
                <p className="font-medium">{game.entryFee}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Prize Pool</p>
                <p className="font-medium">{game.prize}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full">
              <Link href={`/dashboard/games/${game.id}`}>Play Now</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
