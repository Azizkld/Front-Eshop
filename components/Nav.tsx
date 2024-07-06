import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

// Shared
import { slugData } from "@/shared";

export default function Nav({ slug }: { slug: string }) {

    const [activeLink, setActiveLink] = useState("");
  const segment = useSelectedLayoutSegment();
  return (
    <div className="flex items-start justify-center xl:gap-4 lg:gap-2">
      {slugData.map((slug) => (
        <div key={slug} className="rounded-full lg:px-[1px] xl:px-2">
          <Link
            href={`/${slug}`}
            className={`text-[13px] font-bold uppercase decoration-primary-color-500 hover:text-primary-color-500 hover:underline hover:decoration-4 ${
              activeLink === slug && "underline decoration-4"
            }`}
          >
            {(slug)}
          </Link>
        </div>
      ))}
    </div>
  );
}
