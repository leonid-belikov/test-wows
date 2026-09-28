const ICON_BASE_URL = 'https://wows-gloss-icons.wgcdn.co/icons'

const IconService = {
  getURL: (path: string) => `${ICON_BASE_URL}/${path}`,
}

export default IconService
