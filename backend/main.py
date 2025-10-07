from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from src.ocr import extract_titles
from src.metadata import fetch_metadata
from src.embeddings import generate_embedding
from src.recommender import recommend_books
from src.utils import save_file
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/scan")
async def scan_shelf(image: UploadFile = UploadFile(...), preferences: str = Form(...)):
    # Save image
    image_path = save_file(image, 'data/shelf_images')
    print("[HELLO]".center(100, "@"))
    # print(preferences)
    # Phase 1: GOOGLE CLOUD VISION
    titles = extract_titles(image_path)
    
    # # Phase 2: Metadata and Embeddings
    books = [fetch_metadata(title) for title in titles if title]
    print("[CENTER]".center(100, "-"))
    print(books)
    # preference_embedding = generate_embedding(preferences)
    # book_embeddings = [generate_embedding(book.get('description', '')) for book in books if book]
    
    # # Phase 2: Similarity Scoring
    # recommendations = recommend_books(books, preference_embedding, book_embeddings)
    
    # return {"recommendations": recommendations}