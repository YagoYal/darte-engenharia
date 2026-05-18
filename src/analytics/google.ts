import ReactGA from 'react-ga4'

export function initGA() {
  const id = import.meta.env.VITE_GA_ID
  if (!id) return
  ReactGA.initialize(id)
}

export function trackPageView(path: string) {
  ReactGA.send({ hitType: 'pageview', page: path })
}

export function trackEvent(category: string, action: string, label?: string) {
  ReactGA.event({ category, action, label })
}
