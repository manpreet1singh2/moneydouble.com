import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserWallet } from "@/components/dashboard/user-wallet"
import { GamesList } from "@/components/dashboard/games-list"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { LeaderboardWidget } from "@/components/dashboard/leaderboard-widget"
import { UpcomingTournaments } from "@/components/dashboard/upcoming-tournaments"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Add new featured image section */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-xl mb-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wOUTuyR5XBuR1mzx6sVfOVIcvwTYCG.png"
          alt="Sports Betting Experience"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-6">
          <div className="max-w-md text-white">
            <h2 className="text-2xl font-bold mb-2">Fantasy Sports Now Live!</h2>
            <p className="text-sm text-white/80">
              Create your dream team and win big with our new Fantasy Sports feature.
            </p>
            <Button className="mt-4" variant="outline">
              Try Now
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UserWallet />
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Tournaments</CardTitle>
            <CardDescription>Your tournament participation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Win Rate</CardTitle>
            <CardDescription>Your performance statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="games">
        <TabsList>
          <TabsTrigger value="games">Popular Games</TabsTrigger>
          <TabsTrigger value="tournaments">Upcoming Tournaments</TabsTrigger>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        <TabsContent value="games" className="pt-4">
          <GamesList />
        </TabsContent>
        <TabsContent value="tournaments" className="pt-4">
          <UpcomingTournaments />
        </TabsContent>
        <TabsContent value="transactions" className="pt-4">
          <RecentTransactions />
        </TabsContent>
        <TabsContent value="leaderboard" className="pt-4">
          <LeaderboardWidget />
        </TabsContent>
      </Tabs>
    </div>
  )
}
