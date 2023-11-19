import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Issues',
  description: 'App Made by Al-Nahian Pulok',
};

function Issues() {
  return (<Link href="issues/new" className="btn btn-primary">New issue</Link>);
}

export default Issues;
