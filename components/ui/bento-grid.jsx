import { cn } from "@/lib/utils";
import Link from "next/link";
export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  title,
  description,
  link,
  status,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 hover:scale-[1.02] hover:shadow-xl ease-in-out dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{ transition: 'all 0.1s ease-in-out' }}>
      {header}
      <div className="transition duration-200">
        <div
          className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div
          className="flex md:hidden my-2 font-sans text-xs text-neutral-600 dark:text-neutral-200">
          {description}
        </div>
        <div className="flex items-center justify-between">
          {link && <Link href={link} target="_blank" className="flex justify-center items-center text-[12px]">{icon} Github</Link>}
          {status && <div className="text-[10px] ">[ {status} ]</div>}
        </div>
      </div>
    </div>
  );
};
