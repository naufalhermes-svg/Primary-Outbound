import { describe, it, expect } from 'vitest'
import { site, whatsappLink, generalWhatsappLink } from '../src/config/site'

describe('site config', () => {
  it('has all required fields', () => {
    expect(site.name).toBeTruthy()
    expect(site.tagline).toBeTruthy()
    expect(site.description).toBeTruthy()
    expect(site.whatsapp).toMatch(/^62\d{8,13}$/)
    expect(site.email).toMatch(/@/)
    expect(site.instagram).toMatch(/^@/)
    expect(site.defaultWhatsappMessage).toBeTruthy()
  })

  it('has a valid WhatsApp number format (62xxxxxxxxxx)', () => {
    expect(site.whatsapp).toMatch(/^62/)
  })

  it('builds correct wa.me URL via custom-message helper', () => {
    const url = whatsappLink('test message')
    expect(url).toBe(`https://wa.me/${site.whatsapp}?text=test%20message`)
  })

  it('builds correct wa.me URL via default-message helper', () => {
    const url = generalWhatsappLink()
    expect(url).toBe(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.defaultWhatsappMessage)}`
    )
    expect(url).toContain('wa.me/')
    expect(url).toContain('text=')
  })
})
