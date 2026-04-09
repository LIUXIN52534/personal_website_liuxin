"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

import styles from "@/components/site/HeroInteractiveField.module.css";

type PointerState = {
  active: boolean;
  x: number;
  y: number;
};

type Cluster = {
  id: string;
  top: number;
  left: number;
  width: number;
  depth: number;
  lines: string[];
};

const baseClusters: Cluster[] = [
  {
    id: "left-top",
    top: 10,
    left: 8,
    width: 22,
    depth: 0.32,
    lines: ["1100101 0100111", "packet drift .01", "01001001 0101010", "fault map:: 01 01"],
  },
  {
    id: "left-mid",
    top: 42,
    left: 10,
    width: 26,
    depth: 0.48,
    lines: ["010101010101010", "signal drift ++", "00011001 011011", "[bits] [bits] [bits]"],
  },
  {
    id: "center-low",
    top: 68,
    left: 34,
    width: 20,
    depth: 0.54,
    lines: ["0 1 0 1 0 1 0", "break line_006", "010101 110000", "render lag / 01"],
  },
  {
    id: "right-top",
    top: 16,
    left: 72,
    width: 18,
    depth: 0.38,
    lines: ["ENABLE_SYSTEM", "USER_ID : 01", "LOG DATA : 0001", "PROGRAM :: alive"],
  },
  {
    id: "right-mid",
    top: 45,
    left: 78,
    width: 14,
    depth: 0.62,
    lines: ["000000000000", "001001001001", "fault/fault/fault", "0101 0101 0101"],
  },
  {
    id: "bottom-right",
    top: 76,
    left: 70,
    width: 20,
    depth: 0.42,
    lines: ["0x01 0x01 0x01", "cache break [ ]", "010 110 010 110", "drift / recover / drift"],
  },
];

export function HeroInteractiveField() {
  const [pointer, setPointer] = useState<PointerState>({ active: false, x: 50, y: 50 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const effectivePointer = useMemo(
    () => (reducedMotion ? { ...pointer, active: false } : pointer),
    [pointer, reducedMotion],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(mediaQuery.matches);

    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      const target = document.querySelector<HTMLElement>("[data-hero-poster='true']");

      if (!target) {
        return;
      }

      const rect = target.getBoundingClientRect();
      const withinX = event.clientX >= rect.left && event.clientX <= rect.right;
      const withinY = event.clientY >= rect.top && event.clientY <= rect.bottom;

      if (!withinX || !withinY) {
        setPointer((current) => (current.active ? { ...current, active: false } : current));
        return;
      }

      const nextX = ((event.clientX - rect.left) / rect.width) * 100;
      const nextY = ((event.clientY - rect.top) / rect.height) * 100;

      setPointer({ active: true, x: nextX, y: nextY });
    };

    const handleLeave = () => {
      setPointer((current) => (current.active ? { ...current, active: false } : current));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handleLeave);
    };
  }, [reducedMotion]);

  const computedClusters = useMemo(() => {
    return baseClusters.map((cluster) => {
      const deltaX = effectivePointer.x - cluster.left;
      const deltaY = effectivePointer.y - cluster.top;
      const distance = Math.hypot(deltaX, deltaY);
      const active = effectivePointer.active && distance < 26;
      const shiftX = effectivePointer.active ? deltaX * cluster.depth * 0.16 : 0;
      const shiftY = effectivePointer.active ? deltaY * cluster.depth * 0.1 : 0;

      return {
        ...cluster,
        active,
        shiftX,
        shiftY,
      };
    });
  }, [effectivePointer]);

  return (
    <div
      aria-hidden="true"
      className={styles.field}
      style={
        {
          "--pointer-x": `${effectivePointer.x}%`,
          "--pointer-y": `${effectivePointer.y}%`,
          "--pointer-active": effectivePointer.active ? 1 : 0,
        } as CSSProperties
      }
    >
      <div className={styles.cursorPulse} />
      <div className={styles.gridFault} />
      {computedClusters.map((cluster) => (
        <div
          key={cluster.id}
          className={`${styles.cluster} ${cluster.active ? styles.clusterActive : ""}`}
          style={
            {
              top: `${cluster.top}%`,
              left: `${cluster.left}%`,
              width: `${cluster.width}%`,
              transform: `translate(${cluster.shiftX}px, ${cluster.shiftY}px)`,
            } as CSSProperties
          }
        >
          {cluster.lines.map((line) => (
            <span key={`${cluster.id}-${line}`} className={styles.clusterLine}>
              {line}
            </span>
          ))}
        </div>
      ))}
      <div className={styles.binaryColumn} style={{ left: "37%", animationDelay: "0s" }}>
        010101010101
      </div>
      <div className={styles.binaryColumn} style={{ left: "53%", animationDelay: "1.4s" }}>
        001100110011
      </div>
      <div className={styles.binaryColumn} style={{ left: "84%", animationDelay: "2.6s" }}>
        111000111000
      </div>
    </div>
  );
}
