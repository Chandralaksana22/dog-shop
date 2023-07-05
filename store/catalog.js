export const state = () => ({
    breeds: [],
    subBreeds: [],
    selectedBreed: '',
    dogImages: []
  })
  
  export const mutations = {
    SET_BREEDS(state, breeds) {
      state.breeds = breeds
    },
    SET_SUBBREEDS(state, subBreeds) {
      state.subBreeds = subBreeds
    },
    SET_SELECTED_BREED(state, breed) {
      state.selectedBreed = breed
    },
    SET_DOG_IMAGES(state, images) {
      state.dogImages = images
    }
  }
  
  export const actions = {
    async fetchBreeds({ commit }) {
      try {
        // Uncomment the following line if you want to use the dog.ceo API
        // const response = await this.$axios.get('/breeds/list/all')
        // const breeds = Object.keys(response.data.message)
        // commit('SET_BREEDS', breeds)
  
        // Mock data
        const breeds = ['bulldog', 'terrier', 'shiba']
        commit('SET_BREEDS', breeds)
      } catch (error) {
        console.error('Error fetching breeds:', error)
      }
    },
    async fetchSubBreeds({ commit, state }) {
      try {
        commit('SET_SELECTED_BREED', state.selectedBreed)
        commit('SET_SUBBREEDS', [])
  
        if (state.selectedBreed) {
          await new Promise(resolve => setTimeout(resolve, 10000))
  
          // Uncomment the following lines if you want to use the dog.ceo API
          // const response = await this.$axios.get(`/breed/${state.selectedBreed}/list`)
          // const subBreeds = response.data.message || []
          // commit('SET_SUBBREEDS', subBreeds)
  
          // Mock data
          const subBreeds = ['akita', 'husky', 'pug']
          commit('SET_SUBBREEDS', subBreeds)
        }
      } catch (error) {
        console.error('Error fetching sub-breeds:', error)
      }
    },
    async fetchDogImages({ commit, state }) {
      try {
        commit('SET_DOG_IMAGES', [])
  
        if (state.selectedBreed) {
          await new Promise(resolve => setTimeout(resolve, 10000))
  
          // Uncomment the following lines if you want to use the dog.ceo API
          // const response = await this.$axios.get(`/breed/${state.selectedBreed}/images`)
          // const images = response.data.message || []
          // commit('SET_DOG_IMAGES', images)
  
          // Mock data
          const images = [
            'https://images.dog.ceo/breed/bulldog/boston/20200710_175933.jpg',
            'https://images.dog.ceo/breed/bulldog/boston/20200710_175946.jpg',
            'https://images.dog.ceo/breed/bulldog/boston/n02096585_10079.jpg'
          ]
          commit('SET_DOG_IMAGES', images)
        }
      } catch (error) {
        console.error('Error fetching dog images:', error)
      }
    },
    resetSelection({ commit }) {
      commit('SET_SELECTED_BREED', '')
      commit('SET_SUBBREEDS', [])
      commit('SET_DOG_IMAGES', [])
    }
  }
  