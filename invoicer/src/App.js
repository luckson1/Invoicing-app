function App() {
  const printinvoice= () => {window.print()}
  return (
    <>
      <main className="m-5 p-5 lg:max-w-xl lg:mx-auto pg-white">
        <header className="flex flex-col items-center justify-center mb-5">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoice Creator</h1>
          </div>

          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li><button onClick={printinvoice} className="btn btn-print">Print</button></li>
              <li><button className="btn btn-download">Download</button></li>
              <li><button className="btn btn-send">Send</button></li>
            </ul>
          </div>
        </header>

        <section className="flex items-end justify-end">

          <h2>Jack Ndiangui</h2>
          <p>Your Address</p>
        </section>
        <section>
          <h2>Client's Name</h2>
          <p> Client's Address</p>
        </section>

        <article>
          <ul>
            <li>Invoice number</li>
            <li>Date Created</li>
            <li>Due Date</li>
          </ul>
        </article>
        <section>
          <p>Notes to Client</p>
        </section>

        <footer>
          <ul>
            <li>Your name</li>
            <li>Your email</li>
            <li>Your bank</li>
            <li>Account Name</li>
            <li>Account NUmber</li>
            <li>Your Website</li>
          </ul>
        </footer>
      </main>
    </>
  );
}

export default App;
