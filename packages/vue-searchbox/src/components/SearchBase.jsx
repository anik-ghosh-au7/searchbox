import { SearchBase as Headless } from '@appbaseio/searchbase';
import { func } from 'vue-types';
import { types } from '../utils/types';

const SearchBase = {
	name: 'search-base',
	props: {
		index: types.app,
		url: types.url,
		credentials: types.credentials,
		headers: types.headers,
		appbaseConfig: types.appbaseConfig,
		transformRequest: func,
		transformResponse: func
	},
	provide() {
		this.searchbase = new Headless({
			index: this.$props.index,
			url: this.$props.url,
			credentials: this.$props.credentials,
			headers: this.$props.headers,
			appbaseConfig: this.$props.appbaseConfig,
			transformRequest: this.$props.transformRequest,
			transformResponse: this.$props.transformResponse
		});
		return {
			searchbase: this.searchbase
		};
	},
	render() {
		return <div>{this.$slots.default}</div>;
	}
};

SearchBase.install = function(Vue) {
	Vue.component(SearchBase.name, SearchBase);
};

export default SearchBase;
