export default class UserInfo {

  constructor({selectorProfileName, selectorProfileJob}) {
    this._profileName = document.querySelector(selectorProfileName);
    this._profileJob = document.querySelector(selectorProfileJob);
  }

  getUserInfo() {
    this.currentData = {name: this._profileName.textContent, prof: this._profileJob.textContent};
    return this.currentData;
  }

  setUserInfo(userInfo) {
    this._profileName.textContent = userInfo.name;
    this._profileJob.textContent = userInfo.job;
  }
}
