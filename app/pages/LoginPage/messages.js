/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginPage container!',
  },
  meta: {
    title: 'Instagram',
    description: 'Utwórz konto lub zaloguj się do Instagramu. Instagram to prosty, zabawny i kreatywny sposób na tworzenie i edytowanie zdjęć, filmów i wiadomości oraz udostępnianie ich znajomym i rodzinie.',
  },
});
