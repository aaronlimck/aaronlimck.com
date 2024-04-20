import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

export default function ProjectItem() {
  return (
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
  );
}

ProjectItem.Skeleton = () => {
  return (
    // Show 6 skeleton rows
    Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="mt-6 space-y-2 px-4">
        <Skeleton className="h-4 w-[260px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    ))
  );
};
