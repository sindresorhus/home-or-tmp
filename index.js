import {homedir, tmpdir} from 'os';

// eslint-disable-next-line unicorn/prevent-abbreviations
const homeOrTemp = homedir() || tmpdir();

export default homeOrTemp;
