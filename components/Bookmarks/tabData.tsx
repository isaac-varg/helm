import type { ReactNode } from "react";
import type { BookmarkGroupProps } from "./BookmarkGroup";
import BookmarkGroup from "./BookmarkGroup";
import {
  LuGithub,
  LuMail,
  LuCalendar,
  LuFileText,
  LuCloud,
  LuTrello,
  LuMessageSquare,
  LuVideo,
  LuMusic,
  LuGamepad2,
  LuTv,
  LuBookOpen,
  LuBrain,
  LuHeart,
  LuMoon,
  LuSunMedium,
} from "react-icons/lu";

interface TabData {
  image: string;
  imageAlt: string;
  content: ReactNode;
}

const homeGroups: BookmarkGroupProps[] = [
  {
    title: "Productivity",
    icon: LuCalendar,
    bookmarks: [
      { icon: LuMail, title: "Gmail", description: "Email & communication", href: "https://mail.google.com" },
      { icon: LuCalendar, title: "Google Calendar", description: "Schedule & events", href: "https://calendar.google.com" },
      { icon: LuFileText, title: "Notion", description: "Notes & docs", href: "https://notion.so" },
      { icon: LuCloud, title: "Google Drive", description: "Cloud storage", href: "https://drive.google.com" },
    ],
  },
  {
    title: "Social",
    icon: LuMessageSquare,
    bookmarks: [
      { icon: LuMessageSquare, title: "Discord", description: "Chat with friends", href: "https://discord.com" },
      { icon: LuVideo, title: "YouTube", href: "https://youtube.com" },
    ],
  },
];

const workGroups: BookmarkGroupProps[] = [
  {
    title: "Development",
    icon: LuGithub,
    bookmarks: [
      { icon: LuGithub, title: "GitHub", description: "Repositories & PRs", href: "https://github.com" },
      { icon: LuFileText, title: "Vercel", description: "Deployments", href: "https://vercel.com" },
      { icon: LuCloud, title: "AWS Console", description: "Cloud infrastructure", href: "https://aws.amazon.com" },
      { icon: LuBookOpen, title: "MDN Docs", description: "Web reference", href: "https://developer.mozilla.org" },
    ],
  },
  {
    title: "Project Management",
    icon: LuTrello,
    bookmarks: [
      { icon: LuTrello, title: "Linear", description: "Issue tracking", href: "https://linear.app" },
      { icon: LuFileText, title: "Confluence", description: "Team wiki", href: "https://confluence.atlassian.com" },
      { icon: LuMessageSquare, title: "Slack", description: "Team chat", href: "https://slack.com" },
      { icon: LuVideo, title: "Zoom", description: "Video meetings", href: "https://zoom.us" },
    ],
  },
];

const entertainmentGroups: BookmarkGroupProps[] = [
  {
    title: "Media",
    icon: LuTv,
    bookmarks: [
      { icon: LuTv, title: "Netflix", description: "Movies & shows", href: "https://netflix.com" },
      { icon: LuMusic, title: "Spotify", description: "Music streaming", href: "https://spotify.com" },
      { icon: LuVideo, title: "Twitch", description: "Live streams", href: "https://twitch.tv" },
      { icon: LuVideo, title: "YouTube", description: "Videos & creators", href: "https://youtube.com" },
    ],
  },
  {
    title: "Gaming",
    icon: LuGamepad2,
    bookmarks: [
      { icon: LuGamepad2, title: "Steam", description: "Game library", href: "https://store.steampowered.com" },
      { icon: LuGamepad2, title: "IGN", description: "Gaming news", href: "https://ign.com" },
    ],
  },
];

const zenGroups: BookmarkGroupProps[] = [
  {
    title: "Mindfulness",
    icon: LuBrain,
    bookmarks: [
      { icon: LuBrain, title: "Headspace", description: "Guided meditation", href: "https://headspace.com" },
      { icon: LuHeart, title: "Calm", description: "Sleep & relaxation", href: "https://calm.com" },
      { icon: LuMoon, title: "Insight Timer", description: "Meditation timer", href: "https://insighttimer.com" },
      { icon: LuSunMedium, title: "Balance", description: "Personalized meditation", href: "https://balanceapp.com" },
    ],
  },
  {
    title: "Reading",
    icon: LuBookOpen,
    bookmarks: [
      { icon: LuBookOpen, title: "Pocket", description: "Read later", href: "https://getpocket.com" },
      { icon: LuFileText, title: "Medium", description: "Articles & blogs", href: "https://medium.com" },
    ],
  },
];

function renderGroups(groups: BookmarkGroupProps[]) {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <BookmarkGroup key={group.title} {...group} />
      ))}
    </div>
  );
}

export const tabContentMap: Record<string, TabData> = {
  home: {
    image: "https://picsum.photos/seed/home/800/1200",
    imageAlt: "Home",
    content: renderGroups(homeGroups),
  },
  work: {
    image: "https://picsum.photos/seed/work/800/1200",
    imageAlt: "Work",
    content: renderGroups(workGroups),
  },
  entertainment: {
    image: "https://picsum.photos/seed/fun/800/1200",
    imageAlt: "Entertainment",
    content: renderGroups(entertainmentGroups),
  },
  zen: {
    image: "https://picsum.photos/seed/zen/800/1200",
    imageAlt: "Zen",
    content: renderGroups(zenGroups),
  },
};
