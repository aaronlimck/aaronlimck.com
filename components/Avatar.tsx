import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

export default function Avatar() {
  return (
    <div className="relative h-12 w-12">
      <Image src="/aaron.jpeg" alt="Aaron" fill className="rounded-full" />
    </div>
  );
}

Avatar.Skeleton = () => {
  return <Skeleton className="h-12 w-12 rounded-full" />;
};