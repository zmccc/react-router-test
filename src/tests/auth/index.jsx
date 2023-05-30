import React from "react";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

export default function AuthTest() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <PublicPage />,
        },
        {
          path: "protect",
          element: <ProtectPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">public</Link>
        </li>
        <li>
          <Link to="protect">protect</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

function PublicPage() {
  return <h1>this is a public page</h1>;
}

function ProtectPage() {
  return <h1>this is a protect page</h1>;
}
