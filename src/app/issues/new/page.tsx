/* eslint-disable jsx-a11y/label-has-associated-control */
import { Metadata } from 'next';
import SubmitIssue from '@/libs/ServerActions';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New Issue',
  description: 'App Made by Al-Nahian Pulok',
};

async function NewIssue() {
  return (
    <>
      <h1>Create a new issue</h1>
      <form action={SubmitIssue}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input name="title" type="text" className="form-control" id="inputEmail3" placeholder="Title of an issue" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea name="description" className="form-control" rows={3} id="inputPassword3" placeholder="Description of an issue" required />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Status</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label badge bg-danger" htmlFor="gridRadios1">
                Open
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                defaultValue="option2"
              />
              <label className="form-check-label badge bg-success" htmlFor="gridRadios2">
                Closed
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                defaultValue="option3"
              />
              <label className="form-check-label badge bg-warning" htmlFor="gridRadios3">
                In Progress
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Submit issue
        </button>
        <Link href="/issues" className="btn btn-outline-primary">
          Back
        </Link>
      </form>

    </>

  );
}

export default NewIssue;
