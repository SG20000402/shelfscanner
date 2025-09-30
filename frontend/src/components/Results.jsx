import { useLocation, useNavigate } from 'react-router-dom';

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const results = state?.results || [];

  return (
    <div className="results-container">
      <h2>Book Recommendations</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Language: {book.language}</p>
              <p>Reason: {book.reason}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations found.</p>
      )}
      <button onClick={() => navigate('/')}>Scan Another Bookshelf</button>
    </div>
  );
}

export default Results;