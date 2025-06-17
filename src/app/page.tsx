import { prisma } from "@/utils/prisma";

async function getData(){
  const data = await prisma.todo.findMany(
    {
      select: {
        title: true,
        id: true,
        isCompleted:true
      },
      orderBy:{
        createdAt: "desc"
      }
    }
  );
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">

    </div>
  );
}
