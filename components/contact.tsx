"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, ArrowRight } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">
                Ready to get started?
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Have a question or want a demo? Drop us a message and our team
              will get back to you within 24 hours.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(252,80%,60%)]/10 to-[hsl(220,80%,56%)]/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">hello@flowrise.app</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
            {submitted ? (
              <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(252,80%,60%)]/10 to-[hsl(220,80%,56%)]/10">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
                  Message Sent
                </h3>
                <p className="text-muted-foreground">
                  {"Thanks for reaching out! We'll be in touch soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" required className="rounded-xl" />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" required className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Work Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or question..."
                    rows={4}
                    required
                    className="rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-[hsl(252,80%,60%)] to-[hsl(220,80%,56%)] shadow-md shadow-[hsl(252,80%,60%)]/20"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
