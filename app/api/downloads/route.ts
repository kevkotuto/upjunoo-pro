import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "downloads.json");

interface DownloadData {
  total: number;
  client: number;
  driver: number;
}

async function getDownloadData(): Promise<DownloadData> {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return { total: 0, client: 0, driver: 0 };
  }
}

async function saveDownloadData(data: DownloadData): Promise<void> {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const data = await getDownloadData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { type } = await request.json() as { type: string };

  if (type !== "client" && type !== "driver") {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const data = await getDownloadData();
  if (type === "client") {
    data.client++;
  } else {
    data.driver++;
  }
  data.total++;

  await saveDownloadData(data);

  return NextResponse.json(data);
}
