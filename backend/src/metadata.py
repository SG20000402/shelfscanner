import requests

def fetch_metadata(title):
    url = 'https://www.googleapis.com/books/v1/volumes'
    params = {'q': title, 'maxResults': 1}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        items = response.json().get('items', [])
        if items:
            volume = items[0]['volumeInfo']
            return {
                'title': volume.get('title', title),
                'author': ', '.join(volume.get('authors', ['Unknown'])),
                'description': volume.get('description', ''),
                'genre': ', '.join(volume.get('categories', ['Unknown'])),
                'language': volume.get('language', 'en')
            }
    return None