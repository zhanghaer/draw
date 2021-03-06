import { memoize } from 'lodash'
import removeDiacritics from '../removeDiacritics'

const I_RE = /y|(ij)/g
const KH_RE = /kh/g
const ZH_RE = /zh/g

export default memoize(
  (s: string) => removeDiacritics(s)
    .toLowerCase()
    .replace(I_RE, 'i')
    .replace(KH_RE, 'k')
    .replace(ZH_RE, 'j'),
)
