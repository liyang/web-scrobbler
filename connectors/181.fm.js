'use strict';

/**
 * This connector is for 181fm.mystreamplayer.com website.
 * 181.fm contains `iframe` element, and this makes the scrobbling
 * from this website impossible.
 */

/* global Connector */

const DEFAULT_TRACK_ART = 'configs/images/noalbum-white.png';

Connector.playerSelector = '.player';

Connector.artistSelector = '.heading-group .fill_artist';

Connector.trackSelector = '.heading-group .fill_song';

Connector.getAlbum = () => {
	// Artist / Album
	let artistAlbumStr = $('#artist').text();
	let artistSlash = `${Connector.getArtist()} / `;
	if (artistAlbumStr && artistAlbumStr.includes(artistSlash)) {
		return artistAlbumStr.replace(artistSlash, '');
	}

	return null;
};

Connector.trackArtSelector = '.songimg';

Connector.isTrackArtDefault = (trackArtUrl) => {
	return trackArtUrl.endsWith(DEFAULT_TRACK_ART);
};

Connector.isPlaying = () => $('#playbtn').hasClass('jp-stopx');
