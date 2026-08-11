"use client";
import React, { useState } from "react";
import type { ParsedPageMeta } from "../lib/parsed-meta";
interface Props {
  onPrefill: (data: ParsedPageMeta) => void;
}
export default function PrefillUrl(Props: Props) {
  const { onPrefill } = Props;
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setNotice("");
    try {
      const response = await fetch(
        `/api/prefill?url=${encodeURIComponent(url.trim())}`,
      );
      const payload = (await response.json()) as {
        ok: boolean;
        error?: string;
        data?: ParsedPageMeta;
      };
      if (!payload.ok || !payload.data) {
        throw new Error(payload.error ?? "Could not fetch that URL.");
      }
      onPrefill(payload.data);
      setNotice("Loaded tags from the page. Review the fields before copying.");
    } catch (fetchError) {
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Could not fetch that URL.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="rounded-normal border border-borderLight bg-headerLight p-4 dark:border-border dark:bg-secondary">
      <form onSubmit={onSubmit} className="flex flex-col gap-y-3">
        <label
          htmlFor="prefill-url"
          className="text-base font-semibold text-primary dark:text-white"
        >
          Prefill from URL
        </label>
        <p className="text-sm text-grayLight">
          Paste a live page address to read its existing title, description,
          Open Graph, and Twitter tags into the form.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            id="prefill-url"
            type="text"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://example.com/page"
            className="customInput mt-0 h-10 w-full flex-1 sm:min-w-0"
          />
          <button
            type="submit"
            disabled={loading || url.trim() === ""}
            className="h-10 shrink-0 whitespace-nowrap rounded-small bg-primary px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-primary"
          >
            {loading ? "Fetching..." : "Fetch tags"}
          </button>
        </div>
        {error && (
          <p role="alert" className="text-sm font-medium text-red-400">
            {error}
          </p>
        )}
        {notice && (
          <p role="status" className="text-sm font-medium text-[#32da34]">
            {notice}
          </p>
        )}
      </form>
    </div>
  );
}
