module.exports = (Franz, options) => {
  function getMessages() {
  	const selector = document.querySelectorAll('.left-nav__unread')
    const count = selector && selector.length ? selector[0].innerText : 0
    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
