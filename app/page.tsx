'use client'

import { useState } from 'react'

const people = [
  {
    first: 'David',
    middle: 'Young',
    last: 'Stephenson',
    personal: 'David',
    legal: 'David Y. Stephenson',
    wingspan: 175,
    height: 172,
    sports: ['Rugby Union', 'Baseball', 'Cricket', 'Basketball', 'Ice Hockey']
  },
  {
    first: 'Novak',
    middle: null,
    last: 'Djokovic',
    personal: 'Novak',
    legal: 'Novak Djokovic',
    wingspan: 188,
    height: 188,
    sports: ['Tennis', 'Basketball']
  },
  {
    first: 'Jorge',
    middle: 'Mario',
    last: 'Silva',
    personal: 'Seu',
    legal: 'Jorge Mario da Silva',
    wingspan: 183,
    height: 185,
    sports: ['Association Football', 'Volleyball']
  },
  {
    first: 'Wagner',
    middle: 'Manicoba',
    last: 'Moura',
    personal: 'Wagner',
    legal: 'Wagner Manicoba de Moura',
    wingspan: 180,
    height: 180,
    sports: ['Association Football', 'Volleyball']
  }
]

export default function Home() {
  const [query, setQuery] = useState('7')
  console.log('query', query)
  const filtered = people.filter(person => {
    const width = String(person.wingspan).split('')
    for (const character of width) {
      if (character === query) {
        return true
      }
    }
    const height = String(person.height).split('')
    for (const character of height) {
      if (character === query) {
        return true
      }
    }
    return false
  })
  const rows = filtered.map((person, index) => {
    return (
      <tr key={index}>
        <td>{person.wingspan}</td>
        <td>{person.height}</td>
      </tr>
    )
  })
  return (
    <>
      <h1 className='text-9xl'>Table Demo</h1>

      <input
        className='border'
        placeholder='Enter your filter query...'
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        value={query}
      />


      <table>
        <thead>
          <tr>
            <th>Width</th>
            <th>Height</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  )
}
