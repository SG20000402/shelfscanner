# SmartBookshelf

A smart bookshelf recommender that scans your shelf photo, extracts titles, fetches metadata, and recommends books based on preferences.

## Setup

### Frontend
1. cd frontend
2. npm install
3. npm run dev

### Backend
1. cd backend
2. python -m venv venv
3. venv\Scripts\activate
4. pip install -r requirements.txt
5. uvicorn main:app --reload

## Usage
- Open http://localhost:5173
- Upload a bookshelf photo and enter preferences (comma-separated genres).
- View recommendations on /results.

## Roadmap Implementation
- Phase 1: OCR with EasyOCR + basic keyword matching (fallback if embeddings fail).
- Phase 2: Google Books metadata + sentence-transformers embeddings + cosine similarity.
- Phase 3: React UI with upload and results; basic CLIP not implemented (stretch).
- Phase 4: Not implemented (explanations via GPT, deployment).

Improve OCR for sideways books, add CLIP for cover recognition.