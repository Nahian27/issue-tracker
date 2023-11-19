import { Metadata } from 'next';
import Link from 'next/link';
import prisma from '../../../prisma/client';

export const metadata: Metadata = {
  title: 'Issues',
  description: 'App Made by Al-Nahian Pulok',
};

async function Issues() {
  const issues = await prisma.issue.findMany();
  return (
    <>
      <h1>Issues</h1>
      <Link href="issues/new" className="btn btn-primary btn-sm">New issue</Link>
      <div className="card shadow-sm p-3 mt-3 table-responsive">
        <table className="table table-hover mb-0 table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Description</th>
              <th scope="col">Created At</th>
              <th scope="col">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, index) => (
              <tr key={issue.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {issue.title}
                </td>
                <td><span className="badge bg-danger rounded-pill">{issue.status}</span></td>
                <td>{issue.description}</td>
                <td>{issue.created_at.toLocaleString()}</td>
                <td>{issue.updated_at.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
}

export default Issues;
