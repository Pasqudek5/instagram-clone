/**
 *
 * Asynchronously loads the component for Portal
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
