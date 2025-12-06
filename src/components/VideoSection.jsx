import Button from './Button';

function VideoSection() {
  return (
    <section
      className="section section-dark"
      aria-labelledby="video-section-title"
    >
      <div className="section-content">
        <h2 id="video-section-title" className="section-title">
          Understand your mind
        </h2>
        <p className="section-subtitle">
          Advanced AI technology that interprets your neural patterns with
          unprecedented accuracy.
        </p>
        <Button variant="outline">Explore the science</Button>
      </div>

      <div className="feature-visual">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/LNHBMFCzznE?si=-4F3eyvCfBggK10_"
            title="NeuroLink AI explainer video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
