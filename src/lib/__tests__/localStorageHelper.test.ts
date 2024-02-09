import { describe, it, expect, beforeEach } from 'vitest'
import storageHelper from '../localStorageHelper'

describe('localStorageHelper', () => {
  const key = 'testKey'
  const value = { data: 'testData' }

  beforeEach(() => {
    localStorage.clear()
  })

  it('sets and gets an item correctly', () => {
    storageHelper.set(key, value)
    expect(storageHelper.get(key)).toEqual(value)
  })

  it('returns null for non-existent key', () => {
    expect(storageHelper.get('nonExistentKey')).toBeNull()
  })
})
