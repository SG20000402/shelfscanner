function About() {
    return (
      <div className="about-container">
        <h2>About SmartBookshelf</h2>
        <p>This app scans your bookshelf photo, extracts book titles using OCR, fetches metadata, and recommends books based on your preferences using embeddings and similarity scoring.</p>
        <p>Built with React frontend and FastAPI backend.</p>
        <p>Roadmap phases: MVP with OCR and matching, smarter recommendations with embeddings, robust vision, and advanced features.</p>
      </div>
    );
  }
  
  export default About;