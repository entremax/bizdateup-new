/**
 *
 * @property {string} fetchStartupsUpdate - The endpoint for fetching startup updates.
 * @property {string} fetchById - The endpoint for fetching a startup by its reference ID.
 */
export const startupApis = {
  fetchStartupsUpdate: '/fetchStartupUpdates',
  fetchById: '/startup/fetchStartupById?refId=',
  onboarding: '/startup/register',
  fetchForm: '/fetchForm',
  fetchByType: '/startup/fetchStartupByType?tos=',
  closedStartupDeals: '/getStartupsClosedView',
}

/**
 * Fetches the startup updates from the server.
 *
 * @returns {Promise} A promise that resolves with the startup updates data.
 *                   It rejects if there is an error during the fetch request.
 */
export const fetchStartupUpdates = (): Promise<any> => {
  return fetch(startupApis.fetchStartupsUpdate)
    .then((res) => res.json())
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}
