import { on, trigger } from '../../scripts/lib/util'

on('click', '.variationheader__link', e => {
  e.preventDefault()

  const link = e.target
  const targetSelector = link.getAttribute('href').substring(1)
  const target = document.getElementById(targetSelector)
  const links = link.parentNode.children
  const sections = target.parentNode.children

  for (let i = 0; i < links.length; i++) {
    const item = links[i]
    const op = (item === link) ? 'add' : 'remove'
    item.classList[op]('variationheader__link--active')
  }

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i]
    const op = (section === target) ? 'add' : 'remove'
    section.classList[op]('variation__section--active')
  }
})

const activeClass = 'variationheader__actionlist--active'

const toggleActionlist = (actionlist) =>
  actionlist.classList.toggle(activeClass)

on('modal:close', 'body', e => {
  document.querySelectorAll('.variationheader__actionlist').forEach(actionlist => {
    actionlist.classList.remove(activeClass)
  })
})

on('click', '.variationheader__actiontoggle', e => {
  e.stopImmediatePropagation()
  trigger('modal:close')

  const actionlistSelector = e.target.getAttribute('data-actionlist-target')
  const actionlist = document.getElementById(actionlistSelector)

  toggleActionlist(actionlist)
})