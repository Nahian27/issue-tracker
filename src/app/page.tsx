import prisma from '../../prisma/client';

export default async function Home() {
  const issues = await prisma.issue.findMany();
  return (
    <>
      <h1>Dashboard</h1>
      {issues.map((issue) => <p key={issue.id}>{issue.title}</p>)}
    </>

  );
}
