import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SEO from './SEO'

// Mock de document.head y document.title
const mockHead = {
  appendChild: vi.fn(),
  querySelector: vi.fn(),
}

const mockTitle = {
  set: vi.fn(),
}

describe('SEO Component', () => {
  beforeEach(() => {
    // Limpiar el DOM antes de cada test
    document.head.innerHTML = ''
    document.title = ''
    vi.clearAllMocks()
  })

  afterEach(() => {
    // Limpiar después de cada test
    document.head.innerHTML = ''
  })

  it('debería renderizar sin errores', () => {
    const { container } = render(
      <MemoryRouter>
        <SEO path="/" />
      </MemoryRouter>
    )
    expect(container.firstChild).toBeNull()
  })

  it('debería establecer el título correcto para la página de inicio', () => {
    render(
      <MemoryRouter>
        <SEO path="/" />
      </MemoryRouter>
    )
    
    expect(document.title).toBe('Fundación Estoy Contigo | Tecnología que une, futuro que incluye')
  })

  it('debería establecer el título correcto para la página Quiénes Somos', () => {
    render(
      <MemoryRouter>
        <SEO path="/quienes-somos" />
      </MemoryRouter>
    )
    
    expect(document.title).toBe('Quiénes Somos | Fundación Estoy Contigo')
  })

  it('debería establecer el título correcto para la página Qué Hacemos', () => {
    render(
      <MemoryRouter>
        <SEO path="/que-hacemos" />
      </MemoryRouter>
    )
    
    expect(document.title).toBe('Qué Hacemos | Fundación Estoy Contigo')
  })

  it('debería establecer el título correcto para la página Contacto', () => {
    render(
      <MemoryRouter>
        <SEO path="/contacto" />
      </MemoryRouter>
    )
    
    expect(document.title).toBe('Contacto | Fundación Estoy Contigo')
  })

  it('debería usar la ruta por defecto cuando no se proporciona path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SEO />
      </MemoryRouter>
    )
    
    expect(document.title).toBe('Fundación Estoy Contigo | Tecnología que une, futuro que incluye')
  })

  it('debería manejar rutas desconocidas usando la configuración por defecto', () => {
    render(
      <MemoryRouter>
        <SEO path="/ruta-inexistente" />
      </MemoryRouter>
    )
    
    expect(document.title).toBe('Fundación Estoy Contigo | Tecnología que une, futuro que incluye')
  })
})
