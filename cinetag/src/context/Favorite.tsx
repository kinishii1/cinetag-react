import { createContext, useState } from 'react'

type FavoriteContextData = {
  favorites: string[],
  addFavorite: (id: string) => void,
  removeFavorite: (id: string) => void,
}

export const FavoriteContext = createContext({} as FavoriteContextData)
FavoriteContext.displayName = 'FavoriteContext'

export default function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([])

  const addFavorite = (id: string) => {
    setFavorites([...favorites, id])
  }

  const removeFavorite = (id: string) => {
    const newFavorites = favorites.filter(favorite => favorite !== id)
    setFavorites(newFavorites)
  }

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

