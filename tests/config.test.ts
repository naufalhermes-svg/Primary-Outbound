import { describe, it, expect } from 'vitest'
import { site, whatsappLink } from '../src/config/site'

describe('site config', () => {
  it('has all required fields', () => {
    expect(site.name).toBeTruthy()
    expect(site.tagline).toBeTruthy()
    expect(site.description).toBeTruthy()
    expect(site.whatsapp).toMatch(/^62\d{8,13}$/)
    expect(site.email).toMatch(/@/)
    expect(site.instagram).toMatch(/^@/)
  })

  it('has a valid WhatsApp number format (62xxxxxxxxxx)', () => {
    expect(site.whatsapp).toMatch(/^62/)
  })

  it('builds correct wa.me URL via helper', () => {
    const url = whatsappLink('test message')
    expect(url).toBe(`https://wa.me/${site.whatsapp}?text=test%20message`)
  })
})
