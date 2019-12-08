import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
	'en': {
		'rollTypeLabel': 'Roll type:',
		'rollButton': 'Roll',
		'addToFavoritesButton': 'Add to favorites',
		'clearFavoritesButton': 'Clear favorites',
		'favoriteRollsLabel': 'Favorite Rolls',
		'rollErrorText': 'The given roll type is not valid.',
		'noRollsInFavoritesLabel': 'There are no dice rolls in favorites.'
	},
	'es': {
		'rollTypeLabel': 'Tipo de tirada:',
		'rollButton': 'Tirar',
		'addToFavoritesButton': 'Añadir a favoritos',
		'clearFavoritesButton': 'Limpiar favoritos',
		'favoriteRollsLabel': 'Tiradas favoritas',
		'rollErrorText': 'El tipo de tirada no es válida.',
		'noRollsInFavoritesLabel': 'No hay tiradas en favoritos.'
	}
};

const i18n = new VueI18n({
	locale: 'es',
	fallbackLocale: 'es',
	messages
});

export default i18n;