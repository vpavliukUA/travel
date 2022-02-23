import axios from 'axios';
import property from 'lodash/property';
import flow from 'lodash/flow';

import { API_ENDPOINT, API_KEY, API_VERSION, BROWSE_ROUTES } from '../../constants';
import { BrowseRoutesParams } from '../../../interfaces';

const BROWSE_ROUTES_ENDPOINT = `${API_ENDPOINT}${BROWSE_ROUTES}${API_VERSION}`;

const formatResponse = property(['data']);
const formatError = flow(property(['response', 'data']), r => Promise.reject(r));

export const performBrowseRoutes = ({
  country,
  currency,
  locale,
  originPlace,
  destinationPlace,
  outboundPartialDate,
  inboundPartialDate,
}: BrowseRoutesParams) => {
  return axios({
    method: 'get',
    url: `${BROWSE_ROUTES_ENDPOINT}/${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundPartialDate}/${inboundPartialDate}`,
    params: { apiKey: API_KEY },
  })
    .then(data => {
      console.log(data);
      return formatResponse(data);
    })
    .catch(formatError);
};
