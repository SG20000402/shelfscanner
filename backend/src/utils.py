import os
import uuid

def save_file(file, directory):
    os.makedirs(directory, exist_ok=True)
    filename = f"{uuid.uuid4()}_{file.filename}"
    path = os.path.join(directory, filename)
    with open(path, "wb") as f:
        f.write(file.file.read())
    return path