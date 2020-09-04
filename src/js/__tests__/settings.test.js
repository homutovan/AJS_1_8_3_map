import Settings, { permissibleSettings as s, defaultSettings as ds } from '../settings';

describe('Check settings', () => {
  test('Test case №0: checking default settings', () => {
    const settings = new Settings(ds);
    expect(settings.settings).toEqual(new Map(ds));
  });

  test('Test case №1: checking default settings', () => {
    const settings = new Settings(ds);
    expect(settings.settings).toEqual(new Map([s[0], s[3], s[8]]));
  });

  test('Test case №2: setting user settings', () => {
    const settings = new Settings(ds);
    expect(settings.settings).not.toEqual(new Map([s[1], s[3], s[8]]));
  });

  test('Test case №3: setting user settings', () => {
    const settings = new Settings([s[1]]);
    expect(settings.settings).toEqual(new Map([s[1], s[3], s[8]]));
  });

  test('Test case №4: setting user settings', () => {
    const settings = new Settings([['music', 'blues']]);
    expect(settings.settings).toEqual(new Map(ds));
  });

  test('Test case №5: setting user settings', () => {
    const settings = new Settings([['music', 'blues'], s[11]]);
    expect(settings.settings).toEqual(new Map([s[0], s[3], s[11]]));
  });

  test('Test case №6: setting user settings', () => {
    const settings = new Settings([['music', 'blues'], s[11]]);
    expect(settings.settings).not.toEqual(new Map([s[1], s[3], s[11]]));
  });
});
