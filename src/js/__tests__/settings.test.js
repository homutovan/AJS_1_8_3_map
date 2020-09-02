import Settings from '../settings';

const allSettings = [
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

describe('Check settings', () => {
  test('Test case №1: checking default settings', () => {
    const settings = new Settings();
    expect(settings.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
  });

  test('Test case №2: setting user settings', () => {
    const settings = new Settings();
    settings.setSettings(...allSettings[1]);
    expect(settings.settings).toEqual(new Map([allSettings[1], ['music', 'trance'], ['difficulty', 'easy']]));
  });

  test('Test case №3: setting user settings', () => {
    const settings = new Settings();
    settings.setSettings(...allSettings[1]);
    settings.setSettings(...allSettings[2]);
    expect(settings.settings).toEqual(new Map([allSettings[2], ['music', 'trance'], ['difficulty', 'easy']]));
  });
  test('Test case №4: setting user settings', () => {
    const settings = new Settings();
    settings.setSettings(...allSettings[1]);
    settings.setSettings(...allSettings[2]);
    settings.setSettings(...allSettings[4]);
    expect(settings.settings).toEqual(new Map([allSettings[2], allSettings[4], ['difficulty', 'easy']]));
  });
  test('Test case №5: setting user settings', () => {
    const settings = new Settings();
    settings.setSettings(...allSettings[1]);
    settings.setSettings(...allSettings[2]);
    settings.setSettings(...allSettings[4]);
    settings.setSettings(...allSettings[7]);
    expect(settings.settings).toEqual(new Map([allSettings[2], allSettings[7], ['difficulty', 'easy']]));
  });
  test('Test case №6: setting user settings', () => {
    const settings = new Settings();
    settings.setSettings(...allSettings[1]);
    settings.setSettings(...allSettings[2]);
    settings.setSettings(...allSettings[4]);
    settings.setSettings(...allSettings[7]);
    settings.setSettings(...allSettings[9]);
    expect(settings.settings).toEqual(new Map([allSettings[2], allSettings[7], allSettings[9]]));
  });
  test('Test case №7: setting user settings', () => {
    const settings = new Settings();
    settings.setSettings(...allSettings[1]);
    settings.setSettings(...allSettings[2]);
    settings.setSettings(...allSettings[4]);
    settings.setSettings(...allSettings[7]);
    settings.setSettings(...allSettings[9]);
    settings.setSettings(...allSettings[10]);
    expect(settings.settings).toEqual(new Map([allSettings[2], allSettings[7], allSettings[10]]));
  });
  test('Test case №8: setting user settings', () => {
    const settings = new Settings();
    settings.setSettings(...allSettings[1]);
    settings.setSettings(...allSettings[2]);
    settings.setSettings(...allSettings[4]);
    settings.setSettings(...allSettings[7]);
    settings.setSettings(...allSettings[9]);
    settings.setSettings(...allSettings[10]);
    settings.setSettings(...allSettings[11]);
    expect(settings.settings).toEqual(new Map([allSettings[2], allSettings[7], allSettings[11]]));
  });
});
