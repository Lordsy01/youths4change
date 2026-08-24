import { Link } from 'react-router-dom'
import '../styles/notFound.css'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">404</span>
        <h1>This page wandered off.</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}
