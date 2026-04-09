"use client";

import { useState } from "react";

type ContactCopyActionProps = {
  copiedLabel: string;
  copyLabel: string;
  value: string;
};

export function ContactCopyAction({
  copiedLabel,
  copyLabel,
  value,
}: ContactCopyActionProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        legacyCopy(value);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      try {
        legacyCopy(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } catch {
        setCopied(false);
      }
    }
  }

  return (
    <button
      className="button-secondary min-h-0 px-4 py-2 text-xs"
      onClick={handleCopy}
      type="button"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}

function legacyCopy(value: string) {
  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "true");
  input.style.position = "absolute";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}
