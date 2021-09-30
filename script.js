window.addEventListener('load', function () {
  // Commented this out because I need to manipulate the carousel
  // class Project {
  //   constructor(title, url, purpose, objective, approach, duration, tidbit) {
  //     this.title = title;
  //     this.url = url;
  //     this.purpose = purpose;
  //     this.objective = objective;
  //     this.approach = approach;
  //     this.duration = duration;
  //     this.tidbit = tidbit;
  //   }
  // }

  const myCarousel = this.document.getElementById('portfolioCarousel');
  const projectTitle = this.document.getElementById('projectTitle');
  myCarousel.addEventListener('slide.bs.carousel', (event) => {
    let id = event.relatedTarget.id;
    projectTitle.innerHTML = id;
    console.log(`slide occured: ${id}`);
  });
});
