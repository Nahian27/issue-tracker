'use server';

import { redirect } from 'next/navigation';
import prisma from '../../prisma/client';

export default async function SubmitIssue(formData:FormData) {
  'use server';

  await prisma.issue.create({
    data: {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
    },
  });
  redirect('/');
}
