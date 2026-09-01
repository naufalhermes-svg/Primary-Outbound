import { describe, it, expect } from 'vitest'
import { categories } from '../src/content/categories'
import { processSteps } from '../src/content/process'
import { testimonials } from '../src/content/testimonials'
import { faqs } from '../src/content/faq'

describe('categories', () => {
  it('has exactly 6 categories', () => {
    expect(categories).toHaveLength(6)
  })

  it('each category has required fields', () => {
    for (const c of categories) {
      expect(c.id).toBeTruthy()
      expect(c.title).toBeTruthy()
      expect(c.description).toBeTruthy()
      expect(c.icon).toBeTruthy()
      expect(c.waMessage).toBeTruthy()
    }
  })

  it('all category ids are unique', () => {
    const ids = categories.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('last category is by-request', () => {
    expect(categories[categories.length - 1].id).toBe('by-request')
  })
})

describe('process steps', () => {
  it('has exactly 5 steps', () => {
    expect(processSteps).toHaveLength(5)
  })

  it('step numbers are 1-5 sequential', () => {
    expect(processSteps.map((p) => p.step)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('testimonials', () => {
  it('has 3-6 testimonials', () => {
    expect(testimonials.length).toBeGreaterThanOrEqual(3)
    expect(testimonials.length).toBeLessThanOrEqual(6)
  })

  it('each testimonial has all fields', () => {
    for (const t of testimonials) {
      expect(t.name).toBeTruthy()
      expect(t.role).toBeTruthy()
      expect(t.quote).toBeTruthy()
      expect(t.photo).toBeTruthy()
    }
  })
})

describe('faqs', () => {
  it('has 6-8 questions', () => {
    expect(faqs.length).toBeGreaterThanOrEqual(6)
    expect(faqs.length).toBeLessThanOrEqual(8)
  })
})
