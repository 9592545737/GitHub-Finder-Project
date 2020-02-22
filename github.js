class gitHub {
  constructor() {
    this.client_id = 'afc1e6ae2855ee722a26';
    this.client_secret = 'fa8a2c6a3a317c6504d4df2daa37bc04c0f16b39';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort="${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}"`);

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }

  }
}