import icon from '../assets/link.svg'

function Sources({ urls }: { urls: string[] }) {
  const items = urls.map(url => (
    <li key={url}>
      <a href={url} target="_blank" rel="nofollow">{url}</a>
      <img src={icon} alt="External link icon" />
    </li>
  ))

  return (
    <div className="Sources">
      <p>Source</p>
      <ul>{items}</ul>
    </div>
  )
}

export default Sources
