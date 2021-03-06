'use strict'

const { calculateApproval, calculateProductivity } = require('../../../utils/delegate-calculator')

/**
 * Turns a "delegate" object into a generic object.
 * @param  {Object} delegate
 * @return {Object}
 */
module.exports = (delegate) => {
  return {
    username: delegate.username,
    address: delegate.address,
    publicKey: delegate.publicKey,
    vote: delegate.voteBalance + '',
    producedblocks: delegate.producedBlocks,
    missedblocks: delegate.missedBlocks,
    forged: delegate.forged,
    rate: delegate.rate || 0, // forcing to 0 if undefined  as it is not yet reliable
    approval: calculateApproval(delegate),
    productivity: calculateProductivity(delegate)
  }
}
