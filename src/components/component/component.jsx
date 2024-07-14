import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CoffeeIcon className="h-6 w-6" />
          <span className="sr-only">Buy Me a Coffee</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-[#FFF8F0]">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Buy Me a Coffee
              </h1>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Support my creative work and help me continue to produce
                high-quality content.
              </p>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF9F43] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#FF8C29] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Buy Me a Coffee
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About the Creator
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Hi, I'm John Doe, a passionate creator who loves to share my
                knowledge and insights with the world. I've been creating
                content for years, and I'm grateful for the support of my
                amazing community.
              </p>
              <p className="text-muted-foreground md:text-xl">
                Your donations will help me continue to create high-quality
                content, invest in new tools and resources, and ultimately
                provide even more value to my audience. I'm committed to using
                your support to make a positive impact and to keep creating
                content that you love.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                width="400"
                height="400"
                alt="Creator"
                className="rounded-full"
              />
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 sm:py-24 lg:py-32 bg-[#FFF8F0]"
        >
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What People Are Saying
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Hear from some of the amazing people who have supported me and
                my work.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="text-left">
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 ml-4">
                    <h4 className="font-semibold">Jane Doe</h4>
                    <p className="text-sm text-muted-foreground">
                      Loyal Supporter
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "I've been following John's work for years and I'm\n
                    constantly amazed by the quality of his content. Buying\n
                    him a coffee is the least I can do to show my\n
                    appreciation."
                  </p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 ml-4">
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-muted-foreground">
                      Frequent Supporter
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "John's content has been a game-changer for me. The\n
                    insights and value he provides are unparalleled, and\n
                    that's why I'm happy to support him through Buy Me a\n
                    Coffee."
                  </p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 ml-4">
                    <h4 className="font-semibold">Sarah Lee</h4>
                    <p className="text-sm text-muted-foreground">
                      Occasional Supporter
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "I don't always have the time to support creators, but\n
                    when I do, John is one of the first people I think of.\n His
                    content is always top-notch and worth supporting."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-[#FFF8F0] p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect with Me</h3>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <TwitterIcon className="h-5 w-5" />
              Twitter
            </Link>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <InstagramIcon className="h-5 w-5" />
              Instagram
            </Link>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <YoutubeIcon className="h-5 w-5" />
              YouTube
            </Link>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <LinkedinIcon className="h-5 w-5" />
              LinkedIn
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Quick Links</h3>
            <Link href="#" prefetch={false}>
              About
            </Link>
            <Link href="#" prefetch={false}>
              Testimonials
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Support</h3>
            <Link href="#" prefetch={false}>
              FAQ
            </Link>
            <Link href="#" prefetch={false}>
              Refund Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to stay up-to-date with our latest
              content and updates.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 text-center text-xs text-muted-foreground">
          &copy; 2024 Buy Me a Coffee. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function CoffeeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
