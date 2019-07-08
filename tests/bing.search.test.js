const AccessData = require('../src/index')

describe('bing search support', () => {
  test('referrer = https://bing.com', () => {
    expect(
      new AccessData({
        referrer: 'https://bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://bing.com'
    })
  })

  test('referral = https://bing.com', () => {
    expect(
      new AccessData({
        referral: 'https://bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://bing.com'
    })
  })

  test('referrer = http://bing.com', () => {
    expect(
      new AccessData({
        referrer: 'http://bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'http://bing.com'
    })
  })
  test('referral = http://bing.com', () => {
    expect(
      new AccessData({
        referral: 'http://bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'http://bing.com'
    })
  })

  test('referrer = https://br.bing.com', () => {
    expect(
      new AccessData({
        referrer: 'https://br.bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://br.bing.com'
    })
  })
  test('referral = https://br.bing.com', () => {
    expect(
      new AccessData({
        referral: 'https://br.bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://br.bing.com'
    })
  })

  test('referrer = br.bing.com', () => {
    expect(
      new AccessData({
        referrer: 'br.bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://br.bing.com'
    })
  })
  test('referral = br.bing.com', () => {
    expect(
      new AccessData({
        referral: 'br.bing.com'
      })
    ).toMatchObject({
      source: 'bing',
      medium: 'organic',
      referrer: 'https://br.bing.com'
    })
  })
})