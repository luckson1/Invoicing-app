import React from "react";

import { Outlet, NavLink, useSearchParams } from "react-router-dom";
import { getInvoices } from "../db/Data";

export default function Invoices() {
  let invoices = getInvoices();

  //  Search Params
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div
      className="container bg-light mt-5 rounded  p-2 shadow"
      style={{ maxWidth: "700px" }}
    >
      <h4 className="display-4 py-3 fw-bold">Invoices</h4>
      <div className="row ">
        <nav className="col">
          <input
            className="rounded-pill w-100 p-2"
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              filter ? setSearchParams({ filter }) : setSearchParams({});
            }}
            placeholder="Search"
          />
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <NavLink
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
                //   className=" d-flex shadow  nav-link btn rounded-pill bg-warning text-dark m-2 my-3"
                className={({ isActive }) =>
                  isActive
                    ? "d-flex shadow  nav-link btn rounded-pill bg-primary text-light m-2 my-3"
                    : "d-flex shadow  nav-link btn  rounded-pill bg-white border m-2 my-3"
                }
              >
                <i className="bi bi-envelope-exclamation-fill   me-2"></i>
                {invoice.name}
              </NavLink>
            ))}
        </nav>
        <Outlet className="col" />
      </div>
    </div>
  );
}