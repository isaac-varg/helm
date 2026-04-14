import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./prisma/main.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.link.deleteMany();
  await prisma.section.deleteMany();
  await prisma.tab.deleteMany();
  await prisma.dashboard.deleteMany();

  const dashboard = await prisma.dashboard.create({
    data: {
      id: 1,
      title: "My Dashboard",
      subtitle: "Your aesthetic bookmark collection",
      titleGradientFrom: "#f9a8d4",
      titleGradientVia: "#d8b4fe",
      titleGradientTo: "#93c5fd",
      backgroundImage: "https://w.wallhaven.cc/full/po/wallhaven-polerm.jpg",
      bgOverlayFrom: "#581c8766",
      bgOverlayVia: "#831843",
      bgOverlayTo: "#1e3a8a66",
    },
  });

  const tabsSeed = [
    {
      slug: "home", label: "Home", icon: "LuHouse", order: 0,
      pillGradientFrom: "#ec4899", pillGradientTo: "#a855f7",
      sideImage: "https://picsum.photos/seed/home/800/1200", sideImageAlt: "Home", sideImageEdge: "gradient",
      sections: [
        { title: "Productivity", icon: "LuCalendar", order: 0, links: [
          { icon: "LuMail", title: "Gmail", description: "Email & communication", href: "https://mail.google.com", newTab: true, order: 0 },
          { icon: "LuCalendar", title: "Google Calendar", description: "Schedule & events", href: "https://calendar.google.com", newTab: true, order: 1 },
          { icon: "LuFileText", title: "Notion", description: "Notes & docs", href: "https://notion.so", newTab: true, order: 2 },
          { icon: "LuCloud", title: "Google Drive", description: "Cloud storage", href: "https://drive.google.com", newTab: true, order: 3 },
        ]},
        { title: "Social", icon: "LuMessageSquare", order: 1, links: [
          { icon: "LuMessageSquare", title: "Discord", description: "Chat with friends", href: "https://discord.com", newTab: true, order: 0 },
          { icon: "LuVideo", title: "YouTube", description: "", href: "https://youtube.com", newTab: true, order: 1 },
        ]},
      ],
    },
    {
      slug: "work", label: "Work", icon: "LuBriefcase", order: 1,
      pillGradientFrom: "#ec4899", pillGradientTo: "#a855f7",
      sideImage: "https://picsum.photos/seed/work/800/1200", sideImageAlt: "Work", sideImageEdge: "gradient",
      sections: [
        { title: "Development", icon: "LuGithub", order: 0, links: [
          { icon: "LuGithub", title: "GitHub", description: "Repositories & PRs", href: "https://github.com", newTab: true, order: 0 },
          { icon: "LuFileText", title: "Vercel", description: "Deployments", href: "https://vercel.com", newTab: true, order: 1 },
          { icon: "LuCloud", title: "AWS Console", description: "Cloud infrastructure", href: "https://aws.amazon.com", newTab: true, order: 2 },
          { icon: "LuBookOpen", title: "MDN Docs", description: "Web reference", href: "https://developer.mozilla.org", newTab: true, order: 3 },
        ]},
        { title: "Project Management", icon: "LuTrello", order: 1, links: [
          { icon: "LuTrello", title: "Linear", description: "Issue tracking", href: "https://linear.app", newTab: true, order: 0 },
          { icon: "LuFileText", title: "Confluence", description: "Team wiki", href: "https://confluence.atlassian.com", newTab: true, order: 1 },
          { icon: "LuMessageSquare", title: "Slack", description: "Team chat", href: "https://slack.com", newTab: true, order: 2 },
          { icon: "LuVideo", title: "Zoom", description: "Video meetings", href: "https://zoom.us", newTab: true, order: 3 },
        ]},
      ],
    },
    {
      slug: "entertainment", label: "Entertainment", icon: "LuSparkles", order: 2,
      pillGradientFrom: "#ec4899", pillGradientTo: "#a855f7",
      sideImage: "https://picsum.photos/seed/fun/800/1200", sideImageAlt: "Entertainment", sideImageEdge: "gradient",
      sections: [
        { title: "Media", icon: "LuTv", order: 0, links: [
          { icon: "LuTv", title: "Netflix", description: "Movies & shows", href: "https://netflix.com", newTab: true, order: 0 },
          { icon: "LuMusic", title: "Spotify", description: "Music streaming", href: "https://spotify.com", newTab: true, order: 1 },
          { icon: "LuVideo", title: "Twitch", description: "Live streams", href: "https://twitch.tv", newTab: true, order: 2 },
          { icon: "LuVideo", title: "YouTube", description: "Videos & creators", href: "https://youtube.com", newTab: true, order: 3 },
        ]},
        { title: "Gaming", icon: "LuGamepad2", order: 1, links: [
          { icon: "LuGamepad2", title: "Steam", description: "Game library", href: "https://store.steampowered.com", newTab: true, order: 0 },
          { icon: "LuGamepad2", title: "IGN", description: "Gaming news", href: "https://ign.com", newTab: true, order: 1 },
        ]},
      ],
    },
    {
      slug: "zen", label: "Zen", icon: "LuFlower2", order: 3,
      pillGradientFrom: "#ec4899", pillGradientTo: "#a855f7",
      sideImage: "https://picsum.photos/seed/zen/800/1200", sideImageAlt: "Zen", sideImageEdge: "gradient",
      sections: [
        { title: "Mindfulness", icon: "LuBrain", order: 0, links: [
          { icon: "LuBrain", title: "Headspace", description: "Guided meditation", href: "https://headspace.com", newTab: true, order: 0 },
          { icon: "LuHeart", title: "Calm", description: "Sleep & relaxation", href: "https://calm.com", newTab: true, order: 1 },
          { icon: "LuMoon", title: "Insight Timer", description: "Meditation timer", href: "https://insighttimer.com", newTab: true, order: 2 },
          { icon: "LuSunMedium", title: "Balance", description: "Personalized meditation", href: "https://balanceapp.com", newTab: true, order: 3 },
        ]},
        { title: "Reading", icon: "LuBookOpen", order: 1, links: [
          { icon: "LuBookOpen", title: "Pocket", description: "Read later", href: "https://getpocket.com", newTab: true, order: 0 },
          { icon: "LuFileText", title: "Medium", description: "Articles & blogs", href: "https://medium.com", newTab: true, order: 1 },
        ]},
      ],
    },
  ];

  for (const t of tabsSeed) {
    const { sections, ...tabData } = t;
    const tab = await prisma.tab.create({ data: { ...tabData, dashboardId: dashboard.id } });
    for (const s of sections) {
      const { links, ...sectionData } = s;
      const section = await prisma.section.create({ data: { ...sectionData, tabId: tab.id } });
      for (const l of links) {
        await prisma.link.create({ data: { ...l, sectionId: section.id } });
      }
    }
  }

  console.log("Seed complete.");
}

main().finally(() => prisma.$disconnect());
