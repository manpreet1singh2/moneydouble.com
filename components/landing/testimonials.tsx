import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "I've been playing Poker on SkillPlay for 6 months now. The platform is smooth, payments are quick, and the competition is fair. Already won ₹50,000!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Fantasy Cricket on SkillPlay is amazing! I love how I can create my dream team and win real money. The interface is user-friendly and withdrawals are instant.",
    rating: 4,
  },
  {
    name: "Amit Kumar",
    location: "Bangalore",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Rummy is my game and SkillPlay offers the best experience. The tables are always full, and the anti-fraud system ensures fair play. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Players Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our community has to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-background shadow-md">
              <CardContent className="p-6">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 p-6 pt-0">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
