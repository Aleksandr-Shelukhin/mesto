export class UserInfo {
  constructor({selectorProfileName, selectorProfileJob}) {
    this._selectorProfileName = selectorProfileName;
    this._selectorProfileJob = selectorProfileJob;
  }

  getUserInfo() {
    return userInfo = {
      profileName: this._selectorProfileName.textContent,
      profileJob: this._selectorProfileJob.textContent
    }
  }

  setUserInfo(userInfo) {
    getUserInfo.profileName.textContent = userInfo.profileName
    getUserInfo.profileJob.textContent = userInfo.profileJob
  }
}
