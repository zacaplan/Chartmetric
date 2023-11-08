SELECT
    users.id,
    users.username,
    artists.id,
    artists.artist_name,
    artists.tagline,
    tracks.id,
    tracks.name,
    tracks.isrc
FROM users
LEFT JOIN artists ON users.id = artists.user_id
LEFT JOIN tracks ON artists.id = tracks.artist_id
ORDER BY users.id, artists.id, tracks.id