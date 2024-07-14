import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home({ state }) {
  return (
    <div className="flex flex-col min-h-[40vh] w-full">
      <header className="px-4 lg:px-8 py-2 h-20 flex items-center border-b">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CoffeeIcon className="h-6 w-6" />
          <span className="sr-only">Buy Me a Coffee</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
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
          <button
            onClick={() => connectWallet()}
            className="w-1/2 px-4 py-2 bg-gray-900 font-medium gap-1 text-white rounded-lg 600:flex 900:text-sm flex justify-center items-center"
          >
            {state ? state.slice(0, 10) + "..." : "Connect Wallet"}
            {!state && <ChevronRightIcon size={20} />}
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32">
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
      </main>
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
