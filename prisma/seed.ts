import { PrismaClient } from "../src/generated/prisma";


const prisma = new PrismaClient();


async function main() {
  // 기존 데이터 삭제
  await prisma.todo.deleteMany({});


  // 테스트 데이터 생성
  const todos = [
    {
      title: "운동하기",
      isCompleted: false,
    },
    {
      title: "장보기",
      isCompleted: true,
    },
    {
      title: "코딩 공부하기",
      isCompleted: false,
    },
  ];


  for (const todo of todos) {
    await prisma.todo.create({
      data: todo,
    });
  }


  console.log("테스트 데이터가 성공적으로 추가되었습니다.");
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


// {
//   "_id": "05bb6a88-24cb-475a-8f35-a520d18c1d33",
//   "title": "Buy groceries",
//   "isCompleted": false,
//   "createdAt": "2021-01-01T00:00:00.000Z"
// }




