import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const games = [
  {
    id: 1,
    title: "Quiz Master",
    description: "Test your knowledge across various categories",
    players: "2,345",
    entryFee: "₹50",
    prize: "₹5,000",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Quiz", "Knowledge"],
    status: "Live",
  },
  {
    id: 2,
    title: "Word Puzzle",
    description: "Form words from given letters to score points",
    players: "1,890",
    entryFee: "₹25",
    prize: "₹2,500",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Word", "Puzzle"],
    status: "Live",
  },
  {
    id: 3,
    title: "Chess Tournament",
    description: "Strategic board game of skill and planning",
    players: "956",
    entryFee: "₹100",
    prize: "₹10,000",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Chess", "Strategy"],
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Ludo Tournament",
    description: "Classic board game with strategic dice rolls",
    players: "3,210",
    entryFee: "₹30",
    prize: "₹3,000",
    image: "/placeholder.svg?height=100&width=200",
    tags: ["Ludo", "Board Game"],
    status: "Live",
  },
]

export function GamesList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
