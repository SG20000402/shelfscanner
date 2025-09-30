import easyocr

def extract_titles(image_path):
    reader = easyocr.Reader(['en'])
    result = reader.readtext(image_path, detail=0)
    # Simple heuristic: join all text as potential titles, split by lines or common separators
    titles = ' '.join(result).split('\n')  # Basic splitting; improve with vision if needed
    return [title.strip() for title in titles if title.strip()]