import React from 'react'              

import { render, screen } from '@testing-library/react'
import Hello from './Hello'   

describe('Hello', () => {
  it('Рендерит текст с технологией проекта', () => {
    render(<Hello projecTehnology="Vite/React" />)
    expect(screen.getByText('My project Vite/React')).toBeInTheDocument()
  })
})
