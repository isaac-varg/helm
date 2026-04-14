"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { dashboardSchema, tabSchema, sectionSchema, linkSchema, type DashboardInput, type TabInput, type SectionInput, type LinkInput } from "@/lib/schemas";

export async function updateDashboard(input: DashboardInput) {
  const data = dashboardSchema.parse(input);
  await prisma.dashboard.update({ where: { id: 1 }, data });
  revalidatePath("/");
}

export async function upsertTab(input: TabInput, id?: number) {
  const data = tabSchema.parse(input);
  if (id) {
    await prisma.tab.update({ where: { id }, data });
  } else {
    const count = await prisma.tab.count();
    await prisma.tab.create({ data: { ...data, order: data.order || count, dashboardId: 1 } });
  }
  revalidatePath("/");
}

export async function deleteTab(id: number) {
  await prisma.tab.delete({ where: { id } });
  revalidatePath("/");
}

export async function upsertSection(input: SectionInput, id?: number) {
  const data = sectionSchema.parse(input);
  if (id) {
    await prisma.section.update({ where: { id }, data });
  } else {
    const count = await prisma.section.count({ where: { tabId: data.tabId } });
    await prisma.section.create({ data: { ...data, order: data.order || count } });
  }
  revalidatePath("/");
}

export async function deleteSection(id: number) {
  await prisma.section.delete({ where: { id } });
  revalidatePath("/");
}

export async function upsertLink(input: LinkInput, id?: number) {
  const data = linkSchema.parse(input);
  if (id) {
    await prisma.link.update({ where: { id }, data });
  } else {
    const count = await prisma.link.count({ where: { sectionId: data.sectionId } });
    await prisma.link.create({ data: { ...data, order: data.order || count } });
  }
  revalidatePath("/");
}

export async function deleteLink(id: number) {
  await prisma.link.delete({ where: { id } });
  revalidatePath("/");
}
