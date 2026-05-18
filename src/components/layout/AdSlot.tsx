"use client";

type AdSize = "leaderboard" | "rectangle" | "banner" | "mobile-banner";

interface AdSlotProps {
  size: AdSize;
  className?: string;
}

const sizeConfig: Record<
  AdSize,
  { dims: string; label: string; wrapper: string }
> = {
  leaderboard: {
    dims: "w-[728px] h-[90px]",
    label: "728 × 90",
    wrapper: "hidden sm:flex justify-center",
  },
  rectangle: {
    dims: "w-[300px] h-[250px]",
    label: "300 × 250",
    wrapper: "flex justify-center",
  },
  banner: {
    dims: "w-[468px] h-[60px]",
    label: "468 × 60",
    wrapper: "flex justify-center",
  },
  "mobile-banner": {
    dims: "w-[320px] h-[100px]",
    label: "320 × 100",
    wrapper: "flex justify-center sm:hidden",
  },
};

// Replace inner content with actual AdSense script after approval
export default function AdSlot({ size, className = "" }: AdSlotProps) {
  const { dims, label, wrapper } = sizeConfig[size];

  return (
    <div className={`${wrapper} ${className}`}>
      <div
        className={`${dims} relative flex items-center justify-center rounded border border-dashed border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800`}
      >
        <span className="absolute left-1.5 top-1 text-[10px] font-medium text-gray-400 dark:text-gray-500">
          Ad
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">{label}</span>
      </div>
    </div>
  );
}
