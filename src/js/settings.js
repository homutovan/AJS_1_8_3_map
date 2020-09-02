const defaultSettings = [
  { theme: 'dark' },
  { music: 'trance' },
  { difficulty: 'easy' },
];

export default class Settings {
  constructor() {
    this.defaultSettings = new Map(defaultSettings.map((setting) => Object.entries(setting)[0]));
    this.userSettings = new Map();
  }

  setSettings(key, value) {
    this.userSettings.set(key, value);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
