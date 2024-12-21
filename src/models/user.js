export class User {
  constructor({login, avatar_url, followers, following, email, bio}) {
    this.username = login;
    this.avatar = avatar_url;
    this.followers = followers;
    this.following = following;
    this.email = email;
    this.bio = bio;
  }
}
