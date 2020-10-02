/**
 *
 * Asynchronously loads the component for Stories
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
