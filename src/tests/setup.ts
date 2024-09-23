// Next we need to import jsdom into our tests in order to use assertions like .toBeInTheDocument().
// To avoid needing to import it in every test suite we add a new file called setup.ts in
// src / test / setup.ts and add it to our config.

import '@testing-library/jest-dom';
