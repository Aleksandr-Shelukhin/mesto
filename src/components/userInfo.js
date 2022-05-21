export default class UserInfo {
  constructor({selectorProfileName, selectorProfileJob}) {
    this._profileName = document.querySelector(selectorProfileName);
    this._profileJob = document.querySelector(selectorProfileJob);
  }

  getUserInfo() {
    this.userData = {
      name: this._profileName.textContent,
      prof: this._pofileJob.textContent};
    return this.userData;
  }


  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileJob.textContent = userData.job;
  }
}
