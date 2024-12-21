export class Repository {
  constructor({name, description, stargazers_count, language, html_url}) {
    this.name = name;
    this.description = description;
    this.stars = stargazers_count;
    this.language = language;
    this.url = html_url;
  }
}
