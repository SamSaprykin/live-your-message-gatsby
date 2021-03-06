import { orderBy } from 'lodash'

export class SimilarArticlesFactory {
    constructor (articles, currentArticlePath) {
        
        this.articles = articles.filter(
        (aArticle) => aArticle.node.slug !== currentArticlePath);
  
        this.currentArticlePath = currentArticlePath;
        this.maxArticles = 3;
        this.categories = null;
    }

    setMaxArticles(m) {
      this.maxArticles = m;
      return this;
    }
  
    setCategories(aCategory) {
      this.categories = aCategory;
      return this;
    }

    getArticles() {
      const {articles, categories, maxArticles } = this;
      const identityMap = {};


      if(!!categories === false ) {
        console.error('SimilarArticlesFactory: Categories not provided, use setCategories().');
        return [];
      }

      function getPath(article) {
        return article.node.slug;
      }
  
      function addToMap(article) {
        const path = getPath(article);
  
        if (!identityMap.hasOwnProperty(path)) {
          identityMap[path] ={
            article: article,
            points: 0
          }
        }
      }
  
      function addCategoriesPoints(article, categories) {
        const points = 3;
        const path = getPath(article);

        if (article.node.blogPostCategory === categories) {
          identityMap[path].points += points;
        }
      }

      function getIdentityMapAsArray() {
        return Object.keys(identityMap).map((path) => identityMap[path]);
      }
  
      for (let article of articles) {
        addToMap(article);
        addCategoriesPoints(article, categories);
      }
  
      const arrayIdentityMap = getIdentityMapAsArray();
  
      const similarArticles = orderBy(
        arrayIdentityMap, ['points'], ['desc']
      )
      
      return similarArticles.splice(0, maxArticles);
    }
  }
