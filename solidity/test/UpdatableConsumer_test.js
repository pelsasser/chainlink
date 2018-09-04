import * as h from './support/helpers'

contract('UpdatableConsumer', () => {
  const sourcePath = 'examples/UpdatableConsumer.sol'
  let specId = '4c7b7ffb66b344fbaa64995af81e355a'
  let link, oc, cc

  beforeEach(async () => {
    link = await h.deploy('LinkToken.sol')
    oc = await h.deploy('Oracle.sol', link.address)

    cc = await h.deploy(sourcePath, 0, 0, specId)
  })

  describe('initialization', () => {
    it('pulls the LINK address from the resolver', async () => {
    })
  })
})
