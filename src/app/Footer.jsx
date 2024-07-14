import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t mt-6 p-6 md:py-12 w-full">
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
  );
};

export default Footer;
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
