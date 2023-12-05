export const startupApis = {
  fetchStartupsUpdate: '/fetchStartupUpdates',
  fetchById: '/startup/fetchStartupById?refId=',
}

export const fetchStartupUpdates = () => {
  return fetch(startupApis.fetchStartupsUpdate)
    .then((res) => res.json())
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}
