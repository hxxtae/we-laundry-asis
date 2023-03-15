export default function App({ $target }) {
  this.$thumbnail = document.querySelector('.thumbnail-list');
  
  this.$thumbnail.addEventListener('click', (e) => {
    const target = e.target;
    const $btn = target.closest('button');
    if (!$btn) return;

    [...this.$thumbnail.children].forEach(($li) => {
      $li.children[0].removeAttribute('active');
    })
    $btn.setAttribute('active', '');
  })
}