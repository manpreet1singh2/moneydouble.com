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
    prize: "₹1 Lakh Daily",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Strategy", "Cards"],
    popular: true,
  },
  {
    id: 2,
    title: "Rummy",
    description: "India's favorite card game of skill",
    players: "100,000+",
    prize: "₹2 Lakh Daily",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Cards", "Skill"],
    popular: true,
  },
  {
    id: 3,
    title: "Ludo",
    description: "Classic board game with strategic moves",
    players: "200,000+",
    prize: "₹50,000 Daily",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Board", "Strategy"],
    popular: false,
  },
  {
    id: 4,
    title: "Fantasy Cricket",
    description: "Create your dream team and win big",
    players: "500,000+",
    prize: "₹5 Lakh Per Match",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Sports", "Fantasy"],
    popular: true,
  },
]

export function FeaturedGames() {
  return (
    <section id="games" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Games</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose from a variety of skill-based games and start winning real money today.
            </p>
          </div>
        </div>

        {/* Add a showcase image before the game cards */}
        <div className="mx-auto max-w-5xl my-8">
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d2gF2L2wfdtQP33SaHZ6pV941iSMJT.png"
              alt="Online Casino Gaming Experience"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <Card key={game.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                {game.popular && (
                  <div className="absolute right-2 top-2">
                    <Badge variant="default">Popular</Badge>
                  </div>
                )}
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
                    <p className="text-muted-foreground">Players</p>
                    <p className="font-medium">{game.players}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Prize Pool</p>
                    <p className="font-medium">{game.prize}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/games/${game.id}`}>Play Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
