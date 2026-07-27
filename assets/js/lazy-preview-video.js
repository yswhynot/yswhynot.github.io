document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video.lazy-preview-video[data-src]');
  if (!videos.length) return;

  const loadVideo = (video) => {
    const src = video.dataset.src;
    if (!src || video.getAttribute('src')) return;
    video.src = src;
    video.removeAttribute('data-src');
    video.load();
    if (video.hasAttribute('autoplay')) {
      video.play().catch(() => {});
    }
  };

  if (!('IntersectionObserver' in window)) {
    videos.forEach(loadVideo);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadVideo(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: '200px 0px', threshold: 0.01 }
  );

  videos.forEach((video) => observer.observe(video));
});
