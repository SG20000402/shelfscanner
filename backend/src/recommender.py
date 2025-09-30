from scipy.spatial.distance import cosine

def recommend_books(books, preference_embedding, book_embeddings):
    recommendations = []
    for book, embedding in zip(books, book_embeddings):
        if embedding is not None:
            score = 1 - cosine(preference_embedding, embedding)
            book['score'] = score
            book['reason'] = f"Matches your preferences with similarity score {score:.2f}"
            recommendations.append(book)
    # Sort by score descending
    recommendations.sort(key=lambda x: x['score'], reverse=True)
    return recommendations