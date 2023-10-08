// MovieForm.js
import React, { useState } from 'react';
import './MovieForm.scss'

const MovieForm = ({ initialMovieInfo, onSubmit }) => {
  const [formData, setFormData] = useState(initialMovieInfo || {});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit} className='movie-form_main-container'>
        <div className='movie-form_div1'>
            <label>
                TITLE
                <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                />
            </label>
        </div>
        <div className='movie-form_div2'>
            <label>
                RELEASE DATE
                <input
                type="number"
                name="releaseYear"
                value={formData.releaseYear || ''}
                onChange={handleInputChange}
                />
            </label>
        </div>
        <div className='movie-form_div3'>
            <label>
                MOVIE URL
                <input
                type="text"
                name="url"
                value={formData.url || ''}
                onChange={handleInputChange}
                />
            </label>
        </div>
        <div className='movie-form_div4'>
            <label>
                RATING
                <input
                type="number"
                name="rating"
                value={formData.rating || ''}
                onChange={handleInputChange}
                />
            </label>
        </div>
        <div className='movie-form_div5'>
            <label>
                GENRE
                <select
                name="genre"
                value={formData.genre || ''}
                onChange={handleInputChange}
                >
                    <option value='DOCUMENTARY'>Documentary</option>
                    <option value='COMEDY'>Comedy</option>
                    <option value='HORROR'>Horror</option>
                    <option value='CRIME'>Crime</option>
                </select>
            </label>
        </div>
        <div className='movie-form_div6'>
            <label>
                RUNTIME
                <input
                type="text"
                name="runtime"
                value={formData.runtime || ''}
                onChange={handleInputChange}
                />
            </label>
        </div>
        <div className='movie-form_div7'>
            <label>
                SINOPSIS
                <textarea
                name="sinopsis"
                value={formData.sinopsis || ''}
                onChange={handleInputChange}
                />
            </label>
        </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default MovieForm;
