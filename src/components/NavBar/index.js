function NavBar({ data, setData }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.posts.length / data.postPerPage); i++) {
    pageNumbers.push(i);
  }

  // console.log(pageNumbers.slice(-1)[0] );
  return (
    <>
      <br />
      <nav>
        <ul className="pagination">
          <li className="pagination-item">
            <a
              className={data.currentPage === 1 ? "noclick" : ""}
              onClick={() =>
                setData({ ...data, currentPage: data.currentPage - 1 })
              }
              href="!#"
            >
              &laquo;
            </a>
          </li>
          {pageNumbers.map((page) => (
            <li key={page} className="pagination-item">
              <a
                onClick={() => setData({ ...data, currentPage: page })}
                href="!#"
              >
                {page}
              </a>
            </li>
          ))}
          <li className="pagination-item">
            <a
              className={data.currentPage === pageNumbers.slice(-1)[0] ? "noclick" : ""}
              onClick={() =>
                setData({ ...data, currentPage: data.currentPage + 1 })
              }
              href="!#"
            >
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
