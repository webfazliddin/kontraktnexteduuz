import Vue from 'vue'
import VueI18n from 'vue-i18n'
import uz_cyrl from './translate/uz_cyrl.json'
import uz_latn from './translate/uz_latn.json'
import ru from './translate/ru.json'

Vue.use(VueI18n)
const locale = localStorage.getItem('locale') || 'uz_latn' 
const messages = {
	uz_cyrl: uz_cyrl,
	uz_latn : uz_latn,
	ru: ru,
};
const i18n = new VueI18n({
	locale,
	messages
});

export default i18n;