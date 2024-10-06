const db = require('../config/db');

const SongModel = {
    getAllSongs: (callback) => {
        db.query('SELECT * FROM playlist_tbl', callback);
    },
    addSong: (newSong, callback) => {
        db.query('INSERT INTO playlist_tbl SET ?', newSong, callback);
    },
    deleteSong: (id, callback) => {
        db.query('DELETE FROM playlist_tbl WHERE id = ?', [id], callback);
    },
    getSongById: (id, callback) => {
      db.query('SELECT * FROM playlist_tbl WHERE id = ?', [id], (err, results) => {
          if (err) {
              return callback(err, null);
          } 
          return callback(null, results[0]);  // Send the first result (single song)
      });
  },  
    updateSong: (id, updatedSong, callback) => {
        db.query('UPDATE playlist_tbl SET ? WHERE id = ?', [updatedSong, id], callback);
    }
};

module.exports = SongModel;
