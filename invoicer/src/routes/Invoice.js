import React from "react";
import { useParams, useNavigate } from "react-router";
import { getInvoice, deleteInvoice } from "../db/Data";

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  //   return <h2>Invoice #???</h2>;
  //   return <h2>Invoice: {params.invoiceId}</h2>;
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <section className="col position-relative m-auto">
      <div class="card shadow">
        <div class="card-header bg-primary text-white">
          {invoice.name}: {invoice.number}
        </div>
        <div class="card-body">
          <h5 class="card-title">Total Due: {invoice.amount}</h5>

          <p class="card-text">Due Date: {invoice.due}</p>
          <button
            class="btn btn-danger"
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate("/invoices");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}