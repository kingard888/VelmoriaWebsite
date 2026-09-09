"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Crown,
  Lock,
  Mail,
  User,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07111f] px-5 py-10 text-white">
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative w-full max-w-md">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-sm text-white/40 transition hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Velmoria
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/5">
              <Crown className="h-6 w-6 text-cyan-300" />
            </div>

            <h1 className="mt-5 text-2xl font-bold">
              Become an Adventurer
            </h1>

            <p className="mt-2 text-sm text-white/40">
              Buat akun dan mulai perjalananmu di Velmoria.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-white/60">
                Username
              </label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />

                <input
                  type="text"
                  placeholder="Nama adventurer"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-10 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-cyan-300/40"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />

                <input
                  type="email"
                  placeholder="adventurer@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-10 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-cyan-300/40"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-10 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-cyan-300/40"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">
                Confirm Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-10 py-3 text-sm outline-none transition placeholder:text-white/20 focus:border-cyan-300/40"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-cyan-300 py-3.5 text-sm font-semibold text-[#07111f] transition hover:bg-cyan-200"
            >
              Daftar
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-white/35">
            Sudah mempunyai akun?{" "}
            <Link
              href="/login"
              className="text-cyan-300 hover:text-cyan-200"
            >
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}