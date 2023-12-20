import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

//creating new child record
export async function POST(req: NextRequest) {
  const body = await req.json();
  const createdData = await prisma.child.create({
    include: {
      immunizations: true,
    },
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      gender: body.gender, // Corrected field name
      immunizations: {
        create: body.immunization.map((value: string) => {
          return {
            name: value,
          };
        }),
      },
    },
  });

  return NextResponse.json(createdData, { status: 200 });
}

const sortData = (sort: string): {} => {
  if (sort === "firstName") {
    return {
      firstName: "asc",
    };
  } else if (sort === "lastName") {
    return {
      lastName: "asc",
    };
  } else {
    return {};
  }
};
//get all children records
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sort = searchParams.get("sort");

  const data = await prisma.child.findMany({
    orderBy: [sortData(String(sort))],
    include: {
      immunizations: true,
    },
  });
  return NextResponse.json(data, { status: 200 });
}
