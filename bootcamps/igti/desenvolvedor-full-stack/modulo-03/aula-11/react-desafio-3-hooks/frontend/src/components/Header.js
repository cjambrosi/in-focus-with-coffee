import React from 'react'

// children: Padrão do React no exemplo "<Header>Votação</Header>".
export default function Header({ children }) {
  return (
    <h1 className="center">
      {children}
    </h1>
  )
}
