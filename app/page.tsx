import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowTopRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl space-y-8 pt-10">
      <section className="space-y-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center space-x-3">
            <div className="relative h-12 w-12">
              <Image
                src="/aaron.jpeg"
                alt="Aaron"
                fill
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-medium">Aaron Lim</span>
              <span className="text-sm text-muted-foreground">
                Aspiring Product Engineer
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              target="_blank"
              href="https://github.com/aaronlimck"
              className={buttonVariants({ variant: "outline", size: "icon" })}
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </Link>

            <Link
              target="_blank"
              href="https://www.linkedin.com/in/aaronlimchengkiat/"
              className={buttonVariants({ variant: "outline", size: "icon" })}
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </Link>

            <ThemeToggle />
          </div>
        </div>

        <p>
          Hi, I'm Aaron, based in Singapore. My interests lie in designing,
          managing, and developing products that solve real-world problems.
          Let's bring those ideas to life!
        </p>
      </section>

      <section className="flex flex-col">
        <div className="mb-4 px-4 font-medium text-primary">Projects</div>

        <Link
          href="#"
          className="flex items-center justify-between p-4 hover:rounded-md hover:bg-accent"
        >
          <div className="flex flex-row items-center space-x-4">
            <div className="h-[40px] w-[40px] rounded-md bg-white"></div>
            <div className="flex flex-col">
              <span className="text-primary/80">Moolah</span>
              <span className="text-sm text-muted-foreground">
                Track and manage your finances.
              </span>
            </div>
          </div>
          <ArrowTopRightIcon className="h-5 w-5 text-muted-foreground" />
        </Link>

        <Link
          href="#"
          className="flex items-center justify-between p-4 hover:rounded-md hover:bg-accent"
        >
          <div className="flex flex-row items-center space-x-4">
            <div className="h-[40px] w-[40px] rounded-md bg-white"></div>
            <div className="flex flex-col">
              <span className="text-primary/80">Moolah</span>
              <span className="text-sm text-muted-foreground">
                Track and manage your finances.
              </span>
            </div>
          </div>
          <ArrowTopRightIcon className="h-5 w-5 text-muted-foreground" />
        </Link>
      </section>
    </main>
  );
}
