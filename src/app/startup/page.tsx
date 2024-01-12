import { redirect, RedirectType } from 'next/navigation'

export default function StartupOnboarding() {
  return redirect('/startup/onboarding',RedirectType.push)
}
