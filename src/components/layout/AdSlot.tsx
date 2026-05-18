"use client";

import { useEffect } from "react";

interface AdSlotProps {
  size: "leaderboard" | "rectangle" | "banner" | "mobile-banner";
  className?: string;
  live?: boolean;
}

const dimensions = {
  leaderboard: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  banner: { width: 468, height: 60 },
  "mobile-banner": { width: 320, height: 100 },
};

const isProduction = process.env.NODE_ENV === "production";

export default function AdSlot({ size, className = "", live = false }: AdSlotProps) {
  const { width, height } = dimensions[size];
  const showLive = live && isProduction;

  useEffect(() => {
    if (showLive) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [showLive]);

  if (size === "leaderboard") {
    return (
      <div className={`hidden md:block ${className}`}>
        {showLive ? (
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "728px", height: "90px" }}
            data-ad-client="ca-pub-6211404446210803"
            data-ad-slot="auto"
            data-ad-format="horizontal"
          />
        ) : (
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className="mx-auto flex items-center justify-center rounded border border-dashed border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
          >
            <span className="text-xs text-gray-400">Ad {width}×{height}</span>
          </div>
        )}
      </div>
    );
  }

  if (size === "mobile-banner") {
    return (
      <div className={`block md:hidden ${className}`}>
        {showLive ? (
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "320px", height: "100px" }}
            data-ad-client="ca-pub-6211404446210803"
            data-ad-slot="auto"
            data-ad-format="horizontal"
          />
        ) : (
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className="mx-auto flex items-center justify-center rounded border border-dashed border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
          >
            <span className="text-xs text-gray-400">Ad {width}×{height}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`mx-auto ${className}`}>
      {showLive ? (
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: `${width}px`, height: `${height}px` }}
          data-ad-client="ca-pub-6211404446210803"
          data-ad-slot="auto"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div
          style={{ width: `${width}px`, height: `${height}px` }}
          className="mx-auto flex items-center justify-center rounded border border-dashed border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
        >
          <span className="text-xs text-gray-400">Ad {width}×{height}</span>
        </div>
      )}
    </div>
  );
}
