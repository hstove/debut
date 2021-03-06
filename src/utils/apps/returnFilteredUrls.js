import _ from 'lodash'

const returnFilteredUrls = (userDapps) => {
  return removeTestUrls(userDapps)
}

const removeTestUrls = (dapps) => {
  return _.filter(dapps, (dapp) => {
    return !dapp.includes('localhost') && !dapp.includes('netlify') && !dapp.includes('ykliao')
  })
}

export default returnFilteredUrls
