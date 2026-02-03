"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // TODO: replace with your login call
      await new Promise((r) => setTimeout(r, 800));

      // Example: redirect after login
      router.push("/home");
      alert("Logged in (demo)");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-50 px-4 font-sans dark:bg-zinc-950">
      <main className="w-full max-w-md rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-black">
        {/* Header / Logo */}
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Sign in to your account
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none ring-indigo-500/30 transition focus:ring-4 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Forgot?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none ring-indigo-500/30 transition focus:ring-4 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-950/30 dark:text-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-black px-5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </main>
    </div>
  );
}
