import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is SkillPlay legal in India?",
    answer:
      "Yes, SkillPlay is legal in most Indian states as we offer games of skill, not chance. Games of skill are permitted under Indian law. However, please check your local state regulations as some states have specific restrictions.",
  },
  {
    question: "How do I verify my account?",
    answer:
      "Account verification requires your PAN card and Aadhaar for KYC compliance. This process is secure and typically completes within 24 hours. Verification is necessary to withdraw winnings.",
  },
  {
    question: "How do deposits and withdrawals work?",
    answer:
      "You can deposit funds using UPI, Net Banking, Credit/Debit cards, or wallets. Withdrawals are processed within 24 hours directly to your verified bank account. The minimum withdrawal amount is ₹200.",
  },
  {
    question: "Are the games fair?",
    answer:
      "Absolutely. All our games use certified Random Number Generators (RNG) and are regularly audited by independent agencies. We have strict anti-fraud measures to ensure fair play for all users.",
  },
  {
    question: "What if I have issues or questions?",
    answer:
      "Our customer support team is available 24/7 via in-app chat, email, or phone. We typically respond within 1 hour during business hours and within 12 hours otherwise.",
  },
  {
    question: "Is there a welcome bonus for new players?",
    answer:
      "Yes! New players receive a ₹500 welcome bonus after completing KYC verification. This bonus can be used across all games on the platform and has a 1x wagering requirement.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about SkillPlay.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
