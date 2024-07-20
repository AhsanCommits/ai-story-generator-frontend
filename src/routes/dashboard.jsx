import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard page</h1>
      <p className="text-red-600">This is a protected page.</p>
      <ul>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
}
