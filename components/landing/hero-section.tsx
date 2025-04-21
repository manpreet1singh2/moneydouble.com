import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Play, Compete, Win Real Money
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join India's most trusted skill-based gaming platform. Showcase your talent in Poker, Rummy, Ludo, and
                Fantasy Sports.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button className="w-full" size="lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/games">
                <Button variant="outline" className="w-full" size="lg">
                  Explore Games
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <span className="font-medium">1M+</span>
                <span className="text-muted-foreground">Players</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">₹10Cr+</span>
                <span className="text-muted-foreground">Winnings</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">100%</span>
                <span className="text-muted-foreground">Secure</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl md:h-[450px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jy7mTHx7626pIFO2mHO15DfpVXEnmQ.png"
                alt="Mobile Gaming Experience"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-primary p-3 shadow-lg">
              <div className="flex h-full flex-col items-center justify-center text-primary-foreground">
                <span className="text-xl font-bold">₹500</span>
                <span className="text-xs">Welcome Bonus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
