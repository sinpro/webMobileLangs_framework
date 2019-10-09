import Cookies from 'js-cookie';
const app={
	state: {
	  languages:Cookies.get('SET_LANGUAGES')? Cookies.get('SET_LANGUAGES'):'zh-CN',
	  loginstuts:'1'
	},
	mutations: {
    SET_LANGUAGES: (state, languages) => {
      state.languages = languages;
    },
    SET_LOGINSTUTS: (state, loginstuts) => {
      state.loginstuts = loginstuts;
    },
	},
	actions: {
	    
	}
}
export default app;