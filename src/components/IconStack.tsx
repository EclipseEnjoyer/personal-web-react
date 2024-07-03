import Link from "next/link"
import { Icon } from "./icons"

// Think
export default function IconStack( { icons } : { icons: Array<{name: string, url: string}> } ) {
  const iconList = icons.map(iconInfo => <li><Link key={iconInfo.name} href={iconInfo.url}></Link></li>)
  return (
    <ul>
      <li><Icon name="Github"/></li>
      <li><Icon name="LinkedIn"/></li>
    </ul>
  )
}