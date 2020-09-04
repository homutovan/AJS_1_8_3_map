export const defaultSettings = [
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
];

export const permissibleSettings = [
  ['theme', 'dark'],
  ['theme', 'light'],
  ['theme', 'gray'],
  ['music', 'trance'],
  ['music', 'pop'],
  ['music', 'rock'],
  ['music', 'chillout'],
  ['music', 'off'],
  ['difficulty', 'easy'],
  ['difficulty', 'normal'],
  ['difficulty', 'hard'],
  ['difficulty', 'nightmare'],
];

export default class Settings {
  constructor(userSettings) {
    this.defaultSettings = new Map(defaultSettings);
    this.permissibleSettings = permissibleSettings;
    this.userSettings = new Map(this.filterSettings(userSettings));
  }

  filterSettings(settings) {
    return settings
      .filter((setting) => this.permissibleSettings
        .some((element) => setting
          .every((e, i) => e === element[i])));
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
