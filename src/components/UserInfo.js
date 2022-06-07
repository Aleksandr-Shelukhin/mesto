export default class UserInfo {

  constructor({selectorProfileName, selectorProfileJob, selectorProfileAvatar}) {
    this._profileName = document.querySelector(selectorProfileName);
    this._profileJob = document.querySelector(selectorProfileJob);
    this._profileAvatar = document.querySelector(selectorProfileAvatar);
  }

  getUserInfo() {
    this.currentData = {name: this._profileName.textContent, job: this._profileJob.textContent};
    return this.currentData;
  }

  setUserInfo(userInfo) {
    this._profileName.textContent = userInfo.name;
    this._profileJob.textContent = userInfo.about;
  }

  newAvatar(newAvatar) {
    this._profileAvatar.src = newAvatar.avatar;
  }
}
