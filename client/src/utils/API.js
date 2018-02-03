import axios from "axios";
const API_KEY ="f69be8ef3949474485006b5dde04a86a"

export default {
    searchArticle: (search, startYear, endYear) => {
        const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        let params = `?api-key=${API_KEY}`;
        params += `&q=${search}`;
		if(parseInt(startYear, 10))
			params += `&begin_date=${startYear}0101`;
		if(parseInt(endYear, 10))
			params += `&end_date=${endYear}1231`;
		return axios.get(URL + params);
    },
    getArticle: function() {
        return axios.get("/api/articles/");
    },
    deleteArticle: function(id) {
        return axios.delete(`/api/articles/${id}`);
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles/", articleData)
    }
};