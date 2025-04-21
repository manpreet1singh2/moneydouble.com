// Create a new games page that showcases the mobile gaming image
"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Games</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-[300px] overflow-hidden rounded-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jy7mTHx7626pIFO2mHO15DfpVXEnmQ.png"
            alt="Mobile Casino Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white">Casino Games</h2>
            <p className="text-white/80 mb-4">Play Poker, Rummy and more skill-based card games</p>
            <Button asChild>
              <Link href="/dashboard/games/poker">Play Now</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t7g2sajjqmb6hCfVYeGSo13xah0UUZ.png"
            alt="Sports Betting Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white">Sports Betting</h2>
            <p className="text-white/80 mb-4">Create your fantasy team and bet on live matches</p>
            <Button asChild>
              <Link href="/dashboard/games/fantasy">Play Now</Link>
            </Button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6">Popular Games</h2>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="card">Card Games</TabsTrigger>
          <TabsTrigger value="board">Board Games</TabsTrigger>
          <TabsTrigger value="fantasy">Fantasy Sports</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <GameCard
              title="Poker"
              description="Test your strategy and bluffing skills"
              image="/placeholder.svg?height=200&width=300"
              entryFee="₹50"
              prize="₹1 Lakh Daily"
              players="50,000+"
              tags={["Strategy", "Cards"]}
              href="/dashboard/games/poker"
            />
            <GameCard
              title="Rummy"
              description="India's favorite card game of skill"
              image="/placeholder.svg?height=200&width=300"
              entryFee="₹25"
              prize="₹2 Lakh Daily"
              players="100,000+"
              tags={["Cards", "Skill"]}
              href="/dashboard/games/rummy"
            />
            <GameCard
              title="Ludo"
              description="Classic board game with strategic moves"
              image="/placeholder.svg?height=200&width=300"
              entryFee="₹30"
              prize="₹50,000 Daily"
              players="200,000+"
              tags={["Board", "Strategy"]}
              href="/dashboard/games/ludo"
            />
            <GameCard
              title="Fantasy Cricket"
              description="Create your dream team and win big"
              image="/placeholder.svg?height=200&width=300"
              entryFee="₹100"
              prize="₹5 Lakh Per Match"
              players="500,000+"
              tags={["Sports", "Fantasy"]}
              href="/dashboard/games/fantasy-cricket"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="card" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <GameCard
              title="Poker"
              description="Test your strategy and bluffing skills"
              image="/placeholder.svg?height=200&width=300"
              entryFee="₹50"
              prize="₹1 Lakh Daily"
              players="50,000+"
              tags={["Strategy", "Cards"]}
              href="/dashboard/games/poker"
            />
            <GameCard
              title="Rummy"
              description="India's favorite card game of skill"
              image="/placeholder.svg?height=200&width=300"
              entryFee="₹25"
              prize="₹2 Lakh Daily"
              players="100,000+"
              tags={["Cards", "Skill"]}
              href="/dashboard/games/rummy"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function GameCard({ title, description, image, entryFee, prize, players, tags, href }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Entry Fee</p>
            <p className="font-medium">{entryFee}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Prize Pool</p>
            <p className="font-medium">{prize}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={href}>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
