import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {

  const favorites = ref(JSON.parse(localStorage.getItem('favorites')) || [])
  function addFavorite(item) {
    const exists = favorites.value.find(favorite => favorite.id === item.id)
    if (!exists) {
      favorites.value.push(item)
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
  }
  function removeFavorite(id) {
    favorites.value = favorites.value.filter(item => item.id !== id)
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }
  function isFavorite(id) {
    return favorites.value.some(item => item.id === id)
  }
  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  }
})