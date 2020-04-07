// Menu
function menuToggle() {
  if (document.body.classList.contains('menu-active')) {
    document.body.classList.remove('menu-active')
  } else {
    document.body.classList.add('menu-active')
  }
}

if (document.querySelector('.menu-toggle')) {
  document.querySelector('.menu-toggle').addEventListener('click', menuToggle)
}

// Portfolio
function portfolio() {
	if (document.querySelector('.portfolio .piece')) {
		let pieces = document.querySelectorAll('.portfolio .piece')

		for (let i = 0; i < pieces.length; i++) {
			pieces[i].addEventListener('click', function() {
				this.classList.toggle('open-piece')
				this.scrollTo(0,0)
			})
		}
	}
}
portfolio()