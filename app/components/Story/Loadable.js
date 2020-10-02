/**
 *
 * Asynchronously loads the component for Story
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
