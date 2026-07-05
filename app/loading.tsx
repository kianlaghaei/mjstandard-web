export default function Preloader() {
  return (
    <div id="preloader" role="status" aria-live="polite" aria-label="Loading page">
      <div id="loader" className="site-loader">
        <div className="site-loader-card">
          <div className="site-loader-mark" aria-hidden="true">
            <img src="/assets/imgs/template/favicon.svg" alt="" />
          </div>
          <div className="site-loader-copy">
            <strong>MJ Standard</strong>
            <span>Loading page...</span>
          </div>
          <div className="site-loader-bar" aria-hidden="true" />
          <div className="site-loader-skeleton" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}
