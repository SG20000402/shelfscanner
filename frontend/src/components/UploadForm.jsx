import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as bookshelfApi from '../api/bookshelfApi';
import Loader from './Loader';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handlePreferenceChange = (e) => {
    setPreferences(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('Please upload an image');

    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('preferences', preferences);

    try {
      const response = await bookshelfApi.uploadBookshelf(formData);
      navigate('/results', { state: { results: response.data.recommendations } });
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to process image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-form-container">
      <h2>Upload Bookshelf Image</h2>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Bookshelf Image</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div>
            <label>Preferences (e.g., fantasy, sci-fi, history)</label>
            <input
              type="text"
              value={preferences}
              onChange={handlePreferenceChange}
              placeholder="e.g., fantasy, sci-fi, history"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Scan Bookshelf'}
          </button>
        </form>
      )}
    </div>
  );
}

export default UploadForm;