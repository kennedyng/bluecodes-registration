import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log("params", params);
  const data = await prisma.child.findUnique({
    where: {
      id: params.id,
    },
    include: {
      immunizations: true,
    },
  });

  return NextResponse.json(data, { status: 200 });
}
