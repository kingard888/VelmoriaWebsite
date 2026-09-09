"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Swords,
  Shield,
  ScrollText,
  Sparkles,
  Users,
  Map,
  ChevronDown,
  Menu,
  X,
  Crown,
  Castle,
  Gem,
  Flame,
  Globe2,
} from "lucide-react";

type Language = "id" | "en" | "ja";

const translations = {
  id: {
    home: "Beranda",
    world: "Dunia",
    features: "Fitur",
    quests: "Quest",
    login: "Masuk",
    register: "Daftar",
    heroBadge: "FANTASY RPG • WHATSAPP BOT",
    heroTitle: "Takdir Menantimu.",
    heroTitle2: "Petualangan Dimulai.",
    heroDesc:
      "Masuki dunia Velmoria, sebuah dunia fantasy RPG interaktif yang hidup langsung di dalam chat WhatsApp.",
    explore: "Jelajahi Velmoria",
    learn: "Pelajari Dunia",
    worldTitle: "Sebuah Dunia",
    worldTitle2: "Menunggu Untuk Dijelajahi",
    worldDesc:
      "Bangun karaktermu, jelajahi wilayah berbahaya, kalahkan monster, dan ukir namamu dalam sejarah Velmoria.",
    adventure: "Adventure",
    adventureDesc:
      "Jelajahi wilayah luas dan temukan rahasia yang tersembunyi.",
    kingdom: "Kingdom",
    kingdomDesc:
      "Kunjungi kerajaan, kota, guild, dan berbagai tempat unik.",
    battlefield: "Battlefield",
    battlefieldDesc:
      "Hadapi monster, boss, dungeon, dan tantangan berbahaya.",
    legendary: "Legendary",
    legendaryDesc:
      "Temukan boss legendaris dan rebut hadiah langka.",
    featuresTitle: "Bangun Legenda",
    featuresDesc:
      "Velmoria bukan sekadar bot. Ini adalah dunia RPG yang dirancang untuk terus berkembang.",
    featureAdventure: "Adventure",
    featureQuest: "Quest",
    featureDungeon: "Dungeon",
    featureBattle: "Battle",
    featureCrafting: "Crafting",
    featureGuild: "Guild",
    questTitle: "Quest Board",
    questDesc:
      "Ambil quest, selesaikan tantangan, dan dapatkan reward.",
    reward: "Reward",
    accept: "Ambil Quest",
    ctaTitle: "Takdir Dunia",
    ctaTitle2: "Berada di Tanganmu.",
    ctaDesc:
      "Daftar sekarang dan mulai perjalananmu sebagai seorang adventurer di Velmoria.",
    start: "Mulai Petualangan",
    footerDesc:
      "Fantasy RPG universe yang hadir langsung melalui WhatsApp.",
    copyright: "© 2026 Velmoria. All rights reserved.",
  },

  en: {
    home: "Home",
    world: "World",
    features: "Features",
    quests: "Quests",
    login: "Login",
    register: "Register",
    heroBadge: "FANTASY RPG • WHATSAPP BOT",
    heroTitle: "Your Destiny Awaits.",
    heroTitle2: "The Adventure Begins.",
    heroDesc:
      "Enter Velmoria, an interactive fantasy RPG world that lives directly inside WhatsApp chat.",
    explore: "Explore Velmoria",
    learn: "Discover the World",
    worldTitle: "A World",
    worldTitle2: "Waiting to Be Explored",
    worldDesc:
      "Build your character, explore dangerous lands, defeat monsters, and carve your name into Velmoria's history.",
    adventure: "Adventure",
    adventureDesc:
      "Explore vast regions and uncover hidden secrets.",
    kingdom: "Kingdom",
    kingdomDesc:
      "Visit kingdoms, cities, guilds, and unique locations.",
    battlefield: "Battlefield",
    battlefieldDesc:
      "Face monsters, bosses, dungeons, and dangerous challenges.",
    legendary: "Legendary",
    legendaryDesc:
      "Discover legendary bosses and claim rare rewards.",
    featuresTitle: "Forge Your Legend",
    featuresDesc:
      "Velmoria is more than a bot. It is an evolving RPG world built for adventure.",
    featureAdventure: "Adventure",
    featureQuest: "Quest",
    featureDungeon: "Dungeon",
    featureBattle: "Battle",
    featureCrafting: "Crafting",
    featureGuild: "Guild",
    questTitle: "Quest Board",
    questDesc:
      "Accept quests, complete challenges, and earn rewards.",
    reward: "Reward",
    accept: "Accept Quest",
    ctaTitle: "The Fate of the World",
    ctaTitle2: "Is in Your Hands.",
    ctaDesc:
      "Register now and begin your journey as an adventurer in Velmoria.",
    start: "Begin Adventure",
    footerDesc:
      "A fantasy RPG universe brought directly to WhatsApp.",
    copyright: "© 2026 Velmoria. All rights reserved.",
  },

  ja: {
    home: "ホーム",
    world: "世界",
    features: "機能",
    quests: "クエスト",
    login: "ログイン",
    register: "登録",
    heroBadge: "FANTASY RPG • WHATSAPP BOT",
    heroTitle: "運命があなたを待っている。",
    heroTitle2: "冒険が始まる。",
    heroDesc:
      "WhatsAppのチャットから直接楽しめる、インタラクティブなファンタジーRPG世界「Velmoria」へ。",
    explore: "Velmoriaを探索",
    learn: "世界を知る",
    worldTitle: "探索を待つ",
    worldTitle2: "ひとつの世界",
    worldDesc:
      "キャラクターを育て、危険な土地を探索し、モンスターを倒し、Velmoriaの歴史に名を刻もう。",
    adventure: "冒険",
    adventureDesc:
      "広大な地域を探索し、隠された秘密を見つけよう。",
    kingdom: "王国",
    kingdomDesc:
      "王国、都市、ギルド、そして様々な場所を訪れよう。",
    battlefield: "戦場",
    battlefieldDesc:
      "モンスター、ボス、ダンジョンに挑戦しよう。",
    legendary: "伝説",
    legendaryDesc:
      "伝説のボスを発見し、貴重な報酬を手に入れよう。",
    featuresTitle: "伝説を築こう",
    featuresDesc:
      "VelmoriaはただのBotではない。進化し続けるRPG世界だ。",
    featureAdventure: "冒険",
    featureQuest: "クエスト",
    featureDungeon: "ダンジョン",
    featureBattle: "バトル",
    featureCrafting: "クラフト",
    featureGuild: "ギルド",
    questTitle: "クエストボード",
    questDesc:
      "クエストを受け、試練を乗り越え、報酬を獲得しよう。",
    reward: "報酬",
    accept: "クエストを受ける",
    ctaTitle: "世界の運命は",
    ctaTitle2: "あなたの手に。",
    ctaDesc:
      "今すぐ登録して、Velmoriaの冒険者として旅を始めよう。",
    start: "冒険を始める",
    footerDesc:
      "WhatsAppから直接楽しめるファンタジーRPG。",
    copyright: "© 2026 Velmoria. All rights reserved.",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("id");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const saved = localStorage.getItem("velmoria-language");

    if (
      saved === "id" ||
      saved === "en" ||
      saved === "ja"
    ) {
      setLanguage(saved);
    }
  }, []);

  function changeLanguage(lang: Language) {
    setLanguage(lang);
    localStorage.setItem("velmoria-language", lang);
    setLanguageOpen(false);
  }

  const features = [
    {
      icon: Swords,
      title: t.featureAdventure,
      desc:
        language === "ja"
          ? "広大な世界を探索しよう。"
          : language === "en"
            ? "Explore the world and discover hidden places."
            : "Jelajahi dunia dan temukan tempat tersembunyi.",
    },
    {
      icon: ScrollText,
      title: t.featureQuest,
      desc:
        language === "ja"
          ? "様々なクエストに挑戦しよう。"
          : language === "en"
            ? "Complete quests and earn valuable rewards."
            : "Selesaikan quest dan dapatkan berbagai reward.",
    },
    {
      icon: Map,
      title: t.featureDungeon,
      desc:
        language === "ja"
          ? "危険なダンジョンへ挑もう。"
          : language === "en"
            ? "Enter dangerous dungeons and face powerful enemies."
            : "Masuki dungeon berbahaya dan hadapi musuh kuat.",
    },
    {
      icon: Shield,
      title: t.featureBattle,
      desc:
        language === "ja"
          ? "戦闘で強さを証明しよう。"
          : language === "en"
            ? "Fight monsters and powerful bosses."
            : "Lawan monster dan boss yang kuat.",
    },
    {
      icon: Gem,
      title: t.featureCrafting,
      desc:
        language === "ja"
          ? "素材から強力な装備を作ろう。"
          : language === "en"
            ? "Craft equipment and powerful items."
            : "Craft equipment dan item powerful.",
    },
    {
      icon: Users,
      title: t.featureGuild,
      desc:
        language === "ja"
          ? "仲間とギルドを作ろう。"
          : language === "en"
            ? "Build a guild and adventure together."
            : "Bangun guild dan bertualang bersama.",
    },
  ];

  const quests = [
    {
      rank: "F",
      name:
        language === "ja"
          ? "失われた村人"
          : language === "en"
            ? "The Lost Villager"
            : "Penduduk yang Hilang",
      reward: "120 Cr",
    },
    {
      rank: "D",
      name:
        language === "ja"
          ? "森のゴブリン"
          : language === "en"
            ? "Goblins in the Forest"
            : "Goblin di Hutan",
      reward: "350 Cr",
    },
    {
      rank: "B",
      name:
        language === "ja"
          ? "古代遺跡"
          : language === "en"
            ? "Ancient Ruins"
            : "Reruntuhan Kuno",
      reward: "1,250 Cr",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[-150px] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] left-[30%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#07111f_80%)]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-50 border-b border-white/10 bg-[#07111f]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10">
              <Crown className="h-5 w-5 text-cyan-300" />
            </div>

            <div>
              <div className="text-lg font-bold tracking-[0.2em]">
                VELMORIA
              </div>
              <div className="text-[9px] tracking-[0.3em] text-cyan-300/60">
                FANTASY REALM
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-white/70 transition hover:text-cyan-300"
            >
              {t.home}
            </a>

            <a
              href="#world"
              className="text-sm text-white/70 transition hover:text-cyan-300"
            >
              {t.world}
            </a>

            <a
              href="#features"
              className="text-sm text-white/70 transition hover:text-cyan-300"
            >
              {t.features}
            </a>

            <a
              href="#quests"
              className="text-sm text-white/70 transition hover:text-cyan-300"
            >
              {t.quests}
            </a>
          </nav>

          {/* RIGHT */}
          <div className="hidden items-center gap-3 md:flex">
            {/* LANGUAGE */}
            <div className="relative">
              <button
                onClick={() =>
                  setLanguageOpen(!languageOpen)
                }
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 transition hover:border-cyan-300/30 hover:text-white"
              >
                <Globe2 className="h-4 w-4" />

                {language === "id"
                  ? "ID"
                  : language === "en"
                    ? "EN"
                    : "JP"}

                <ChevronDown className="h-3 w-3" />
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-12 w-32 overflow-hidden rounded-xl border border-white/10 bg-[#0c192b] p-1 shadow-2xl">
                  {[
                    ["id", "Indonesia"],
                    ["en", "English"],
                    ["ja", "日本語"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() =>
                        changeLanguage(
                          value as Language
                        )
                      }
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-white/70 hover:bg-white/5 hover:text-cyan-300"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm text-white/70 transition hover:text-white"
            >
              {t.login}
            </Link>

            <Link
              href="/register"
              className="rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
              {t.register}
            </Link>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden"
          >
            {mobileMenu ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/10 bg-[#07111f] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setMobileMenu(false)}
                className="text-white/70"
              >
                {t.home}
              </a>

              <a
                href="#world"
                onClick={() => setMobileMenu(false)}
                className="text-white/70"
              >
                {t.world}
              </a>

              <a
                href="#features"
                onClick={() => setMobileMenu(false)}
                className="text-white/70"
              >
                {t.features}
              </a>

              <a
                href="#quests"
                onClick={() => setMobileMenu(false)}
                className="text-white/70"
              >
                {t.quests}
              </a>

              <div className="h-px bg-white/10" />

              <div className="flex gap-2">
                {(["id", "en", "ja"] as Language[]).map(
                  (lang) => (
                    <button
                      key={lang}
                      onClick={() =>
                        changeLanguage(lang)
                      }
                      className={`rounded-lg px-3 py-2 text-sm ${
                        language === lang
                          ? "bg-cyan-400/15 text-cyan-300"
                          : "bg-white/5 text-white/60"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  )
                )}
              </div>

              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="flex-1 rounded-lg border border-white/10 py-3 text-center text-sm text-white/70"
                >
                  {t.login}
                </Link>

                <Link
                  href="/register"
                  className="flex-1 rounded-lg bg-cyan-400/15 py-3 text-center text-sm text-cyan-300"
                >
                  {t.register}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-20 lg:px-8"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs tracking-[0.2em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              {t.heroBadge}
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t.heroTitle}
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              {t.heroDesc}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-200"
              >
                {t.start}

                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#world"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-white/80 transition hover:bg-white/10"
              >
                {t.learn}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-xs text-white/35">
              <div className="flex items-center gap-2">
                <Castle className="h-4 w-4 text-cyan-300/60" />
                Fantasy World
              </div>

              <div className="flex items-center gap-2">
                <Swords className="h-4 w-4 text-cyan-300/60" />
                RPG System
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-cyan-300/60" />
                Multiplayer
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-[40px] bg-cyan-400/10 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 shadow-2xl backdrop-blur-xl">
              <div className="relative h-[480px] overflow-hidden rounded-[25px] border border-white/10 bg-gradient-to-b from-[#102c48] via-[#0c1d32] to-[#07111f]">
                {/* SUN */}
                <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-cyan-200/20 blur-xl" />

                <div className="absolute right-14 top-14 h-16 w-16 rounded-full border border-cyan-100/30 bg-cyan-100/10" />

                {/* MOUNTAINS */}
                <div className="absolute bottom-0 left-[-10%] h-56 w-[120%] rotate-[-4deg] bg-[#081522]" />

                <div className="absolute bottom-24 left-[5%] h-48 w-48 rotate-45 border-l border-t border-cyan-300/10 bg-[#0a1b2b]" />

                <div className="absolute bottom-20 right-[-5%] h-52 w-52 rotate-45 border-l border-t border-blue-300/10 bg-[#091827]" />

                {/* CASTLE */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
                  <div className="relative h-36 w-52 border-x border-t border-white/15 bg-[#0c1b2b]">
                    <div className="absolute -left-5 bottom-0 h-48 w-14 border-x border-t border-white/15 bg-[#0d2032]" />
                    <div className="absolute -right-5 bottom-0 h-48 w-14 border-x border-t border-white/15 bg-[#0d2032]" />

                    <div className="absolute left-1/2 top-0 h-24 w-10 -translate-x-1/2 bg-[#11273b]" />

                    <div className="absolute left-1/2 bottom-0 h-20 w-14 -translate-x-1/2 rounded-t-full border border-cyan-300/20 bg-[#07111f]" />

                    <div className="absolute -left-1 top-[-25px] h-7 w-16 border border-white/10 bg-[#102a42]" />
                    <div className="absolute -right-15 top-[-25px] h-7 w-16 border border-white/10 bg-[#102a42]" />
                  </div>
                </div>

                {/* FLOATING RUNE */}
                <div className="absolute left-10 top-28 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/5 text-cyan-300/50">
                  <Sparkles className="h-7 w-7" />
                </div>

                <div className="absolute right-10 top-52 flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/20 bg-blue-300/5 text-blue-300/50">
                  <Gem className="h-5 w-5" />
                </div>

                {/* PLAYER CARD */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#07111f]/75 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/60">
                        Adventurer
                      </div>

                      <div className="mt-1 text-lg font-bold">
                        Unknown Hero
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-white/30">
                        Level
                      </div>

                      <div className="text-xl font-bold text-cyan-300">
                        01
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[35%] rounded-full bg-cyan-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORLD */}
      <section
        id="world"
        className="relative z-10 border-t border-white/5 py-28"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
              VELMORIA WORLD
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t.worldTitle}
              <br />
              <span className="text-white/45">
                {t.worldTitle2}
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              {t.worldDesc}
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Map,
                title: t.adventure,
                desc: t.adventureDesc,
              },
              {
                icon: Castle,
                title: t.kingdom,
                desc: t.kingdomDesc,
              },
              {
                icon: Flame,
                title: t.battlefield,
                desc: t.battlefieldDesc,
              },
              {
                icon: Crown,
                title: t.legendary,
                desc: t.legendaryDesc,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/5 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 border-t border-white/5 py-28"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
              RPG SYSTEM
            </div>

            <h2 className="text-4xl font-bold sm:text-5xl">
              {t.featuresTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-white/45">
              {t.featuresDesc}
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04]"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

                  <div className="relative">
                    <Icon className="h-6 w-6 text-cyan-300" />

                    <h3 className="mt-6 text-lg font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUEST BOARD */}
      <section
        id="quests"
        className="relative z-10 border-t border-white/5 py-28"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
                ADVENTURER GUILD
              </div>

              <h2 className="text-4xl font-bold sm:text-5xl">
                {t.questTitle}
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-white/45">
                {t.questDesc}
              </p>

              <Link
                href="/register"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-300/10"
              >
                {t.accept}
                <span>→</span>
              </Link>
            </div>

            <div className="space-y-3">
              {quests.map((quest) => (
                <div
                  key={quest.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-cyan-300/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg font-bold text-cyan-300">
                    {quest.rank}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium">
                      {quest.name}
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-xs text-white/35">
                      <Gem className="h-3.5 w-3.5" />
                      {t.reward}
                    </div>
                  </div>

                  <div className="shrink-0 text-sm font-semibold text-cyan-300">
                    {quest.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-5 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] via-blue-400/[0.04] to-transparent p-10 text-center sm:p-16">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[90px]" />

          <div className="relative">
            <Sparkles className="mx-auto h-8 w-8 text-cyan-300/70" />

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              {t.ctaTitle}
              <br />
              <span className="text-cyan-300">
                {t.ctaTitle2}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/45">
              {t.ctaDesc}
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 font-semibold text-[#07111f] transition hover:bg-cyan-200"
            >
              {t.start}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-cyan-300" />

              <span className="font-bold tracking-[0.2em]">
                VELMORIA
              </span>
            </div>

            <p className="mt-2 text-xs text-white/30">
              {t.footerDesc}
            </p>
          </div>

          <div className="text-xs text-white/25">
            {t.copyright}
          </div>
        </div>
      </footer>
    </main>
  );
}