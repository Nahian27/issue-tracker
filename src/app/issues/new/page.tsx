/* eslint-disable jsx-a11y/label-has-associated-control */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Issue',
  description: 'App Made by Al-Nahian Pulok',
};

function NewIssue() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title of the issue" required />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Description of the issue" required />
      </div>
      <button type="submit" className="btn btn-primary">Submit new issue</button>
    </form>
  );
}

export default NewIssue;
