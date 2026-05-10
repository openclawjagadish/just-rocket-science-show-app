import { useMemo, useState } from "react";
import {
  episodes,
  formatViews,
  PLAYLIST_URL,
  thumbnailFor,
  type Episode,
} from "./episodes";
import "./App.css";

type SortMode = "newest" | "oldest" | "longest" | "most-viewed";

function parseDurationSeconds(d: string): number {
  const parts = d.split(":").map((p) => parseInt(p, 10));
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] ?? 0;
}

export default function App() {
  const [sort, setSort] = useState<SortMode>("newest");

  // Source order = newest → oldest. Episode #1 is the oldest.
  const numberedEpisodes = useMemo(
    () =>
      episodes.map((e, i) => ({
        ...e,
        episodeNumber: episodes.length - i,
      })),
    []
  );

  const sortedEpisodes = useMemo(() => {
    const copy = [...numberedEpisodes];
    switch (sort) {
      case "oldest":
        return copy.sort((a, b) => a.episodeNumber - b.episodeNumber);
      case "longest":
        return copy.sort(
          (a, b) =>
            parseDurationSeconds(b.duration) - parseDurationSeconds(a.duration)
        );
      case "most-viewed":
        return copy.sort((a, b) => b.views - a.views);
      case "newest":
      default:
        return copy.sort((a, b) => b.episodeNumber - a.episodeNumber);
    }
  }, [numberedEpisodes, sort]);

  return (
    <div className="page">
      <div className="grid-bg" aria-hidden="true" />
      <div className="starfield" aria-hidden="true" />

      <header className="hero">
        <div className="hero-inner">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Now transmitting · {episodes.length} episodes
          </div>
          <h1>
            The Just <span className="accent-cyan">Rocket</span>{" "}
            <span className="accent-magenta">Science</span> Show
          </h1>
          <p className="subtitle">
            Long-form conversations with the founders, engineers, and investors
            building the future of space — rockets, satellites, in-orbit
            servicing, asteroid mining, and everything in between.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={PLAYLIST_URL} target="_blank" rel="noreferrer">
              Open YouTube Playlist
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.youtube.com/@just_rocket_science"
              target="_blank"
              rel="noreferrer"
            >
              Visit Channel
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="toolbar">
          <h2 className="section-title">Episodes</h2>
          <div className="sort-group" role="tablist" aria-label="Sort episodes">
            {(
              [
                ["newest", "Newest"],
                ["oldest", "Oldest"],
                ["longest", "Longest"],
                ["most-viewed", "Most viewed"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={sort === key}
                className={`chip ${sort === key ? "chip-active" : ""}`}
                onClick={() => setSort(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <ul className="card-grid">
          {sortedEpisodes.map((ep) => (
            <EpisodeCard key={ep.id} ep={ep} />
          ))}
        </ul>
      </main>

      <footer className="footer">
        <p>
          Episode data sourced from the public{" "}
          <a href={PLAYLIST_URL} target="_blank" rel="noreferrer">
            YouTube playlist
          </a>
          . Thumbnails © their respective rights holders.
        </p>
        <p className="footer-sig">
          A fan-made index · <span className="footer-mono">v0.1</span>
        </p>
      </footer>
    </div>
  );
}

function EpisodeCard({
  ep,
}: {
  ep: Episode & { episodeNumber: number };
}) {
  return (
    <li className="card">
      <a
        className="thumb"
        href={ep.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Watch episode ${ep.episodeNumber} on YouTube`}
      >
        <img
          src={thumbnailFor(ep.id)}
          alt=""
          width={480}
          height={360}
        />
        <span className="duration-badge">{ep.duration}</span>
        <span className="play-overlay" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
      </a>
      <div className="card-body">
        <div className="card-meta">
          <span className="ep-num">EP {String(ep.episodeNumber).padStart(2, "0")}</span>
          <span className="meta-sep">·</span>
          <span className="views">{formatViews(ep.views)}</span>
        </div>
        <h3 className="card-title">{ep.title}</h3>
        <a className="watch-link" href={ep.url} target="_blank" rel="noreferrer">
          Watch on YouTube
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
              d="M14 3h7v7M21 3l-9 9M10 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </li>
  );
}
