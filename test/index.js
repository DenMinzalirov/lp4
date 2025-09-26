// 3808

window.addEventListener('load', () => {
  const popup1 = document.querySelector('.popup_1')
  const popup2 = document.querySelector('.popup_2')
  const cashBtn = document.getElementById('cash-btn')
  const popupWindow1 = document.getElementById('popup__window_1')
  const popupWindow2 = document.getElementById('popup__window_2')
  const html = document.querySelector('html')
  const body = document.querySelector('body')
  const preloader = document.querySelector('.preloader')
  const particles = document.getElementById('particles-js')
  const currLangDom = document.querySelector('.curr_lang'),
    langSwitcher = document.querySelector('.lang_switcher_outer'),
    langList = document.querySelector('.lang_list'),
    langListItem = [...document.querySelectorAll('.lang_list_item')],
    userLangBrowser = navigator.language || navigator.userLanguage,
    languageParts = userLangBrowser.split('-'),
    userLang = languageParts[0],
    country = html.getAttribute('data-country')

  const hidePreloader = () => {
    // Принудительно скрываем прелоадер
    if (preloader) {
      preloader.style.display = 'none'
      preloader.classList.add('hide')
    }
    // Убираем класс hide с HTML чтобы показать контент
    if (html) {
      html.classList.remove('hide')
    }
  }

  hidePreloader()

if (cashBtn) {
  cashBtn.addEventListener('click', () => {
    popup1.classList.add('popup__show')
    popupWindow1.classList.add('popup__window_show')
    body.classList.add('popup-bg')
  })
}

function showSecondPopup() {
  popup1.classList.remove('popup__show')
  popupWindow1.classList.remove('popup__window_show')
  popup2.classList.add('popup__show')
  popupWindow2.classList.add('popup__window_show')
  body.classList.add('popup-bg')
  particles.classList.add('show')
}

  const listOfLang = [
    'en',
    'de',
    'pl',
    'ru',
    'fi',
    'pt',
    // 'cz',
    'es',
    'hu',
    'fr',
    'ph',
    'vn',
    'th',
    'jp',
    'dk',
    'no',
    'gr',
    'lt',
    'lv',
    'ee',
    'sk',
    'bg',
    'ro',
  ]

  const countryToLang = {
    de: 'de',
    pl: 'pl',
    ru: 'ru',
    fi: 'fi',
    pt: 'pt',
    // cz: 'cz',
    cs: 'cz',
    es: 'es',
    hu: 'hu',
    fr: 'fr',
    ph: 'ph',
    fil: 'ph',
    vn: 'vn',
    vi: 'vn',
    th: 'th',
    jp: 'jp',
    ja: 'jp',
    dk: 'dk',
    da: 'dk',
    nb: 'no',
    nn: 'no',
    no: 'no',
    gr: 'gr',
    el: 'gr',
    lt: 'lt',
    lv: 'lv',
    ee: 'ee',
    et: 'ee',
    sk: 'sk',
    bg: 'bg',
    ro: 'ro',
    default: 'en',
  }

  const data = {
    by: { countWB: '2000 USD' },
    am: { countWB: '2000 USD' },
    ge: { countWB: '2000 USD' },
    md: { countWB: '2000 USD' },
    mn: { countWB: '2000 USD' },
    tm: { countWB: '2000 USD' },
    kg: { countWB: '2000 USD' },
    tj: { countWB: '2000 USD' },
    pl: { countWB: '1000 EUR' },
    pe: { countWB: '8000 PEN' },
    nz: { countWB: '4000 NZD' },
    ck: { countWB: '4000 NZD' },
    nu: { countWB: '4000 NZD' },
    pn: { countWB: '4000 NZD' },
    tk: { countWB: '4000 NZD' },
    no: { countWB: '20000 NOK' },
    sj: { countWB: '20000 NOK' },
    mx: { countWB: '40000 MXN' },
    kz: { countWB: '800000 KZT' },
    hu: { countWB: '800000 HUF' },
    dk: { countWB: '15000 DKK' },
    fo: { countWB: '15000 DKK' },
    gl: { countWB: '15000 DKK' },
    co: { countWB: '8000000 COP' },
    cl: { countWB: '1600000 CLP' },
    ca: { countWB: '2800 CAD' },
    pm: { countWB: '2800 CAD' },
    // br: { countWB: '7500 BRL' },
    ar: { countWB: '1000000 ARS' },

    az: { countWB: '3500 AZN' },
    ph: { countWB: '100000 PHP' },
    jp: { countWB: '200000 JPY' },
    in: { countWB: '200000 INR' },
    bt: { countWB: '200000 INR' },
    np: { countWB: '200000 INR' },
    vn: { countWB: '51000000 VND' },
    th: { countWB: '68000 THB' },
    // cz: { countWB: '40000 CZK' },

    se: { countWB: '20000 SEK' },
    ro: { countWB: '10000 RON' },
    ch: { countWB: '2000 CHF' },
    li: { countWB: '2000 CHF' },
    bg: { countWB: '4000 BGN' },
    default: { countWB: '2000 EUR' },
  }

  const inputValue = data[country]
    ? data[country].countWB
    : data.default.countWB
  const result = processValue(inputValue)

  function processValue(inputValue) {
    const [numbers, currencyIndex] = inputValue.match(/\d+(\s+\d+)*|\D+/g)
    if (numbers && currencyIndex) {
      const numericValue = numbers.replace(/ /g, '')
      return {
        fullBonus: numericValue + currencyIndex,
        bonusHalf: Math.round(numericValue / 2) + currencyIndex,
        isoBonus: currencyIndex,
        currencyIndex,
      }
    }
    return []
  }

  function changeBonusContent(bonusWrapper, bonus) {
    let formattedNumber
    bonusWrapper.forEach((item) => {
      if (result[bonus].length > 4) {
        formattedNumber = result[bonus].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      } else {
        formattedNumber = result[bonus]
      }
      item.textContent = formattedNumber
      item.setAttribute('data-text', formattedNumber)
    })
  }

  const fullBonus = [...document.querySelectorAll('.bonus')]

  changeBonusContent(fullBonus, 'fullBonus')

  if (country) {
    Object.keys(data).forEach((item) => {
      if (item === country) {
        html.classList.add(`curr_${country}`)
      }
    })
  }

  let lang = countryToLang[userLang] || countryToLang.default

  listOfLang.forEach((item) => {
    html.classList.remove(item)
    html.classList.add(lang)
    html.setAttribute('data-lang', lang)
  })

  const changeLanguage = (item) => {
    hidePreloader()

    const lang = item.getAttribute('data-lang')

    listOfLang.forEach((item) => {
      html.classList.contains(item) && html.classList.remove(item)
    })

    html.classList.add(lang)

    html.setAttribute('data-lang', lang)

    langListItem.forEach((item) => {
      item.classList.remove('curr')
    })
    item.classList.add('curr')

    currLangDom.innerHTML = item.innerHTML
  }

  langListItem.forEach((item) => {
    item.classList.remove('curr')
    item.addEventListener('click', () => {
      changeLanguage(item)
    })
  })

  const currLangItem = langListItem.find(
    (item) => item.getAttribute('data-lang') === lang
  )

  if (currLangItem) {
    currLangItem.classList.add('curr')
    currLangDom.innerHTML = currLangItem.innerHTML
  } else {
    currLangDom.innerHTML = `<span>${countryToLang.default}</span>`
  }

  langSwitcher.addEventListener('click', () => {
    langSwitcher.classList.toggle('act')
    langList.classList.toggle('act')
  })

  document.addEventListener('click', function (e) {
    if (!langSwitcher.contains(e.target) && !langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove('act')
      langList.classList.remove('act')
    }
  })

  document.getElementById('year').textContent = new Date().getFullYear()

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 3000 },
      },
      color: { value: '#FFF389' },
      shape: {
        type: 'image', // Set shape type to image
        stroke: { width: 0, color: '#000000' },
        image: {
          src: 'img/particle-coin.png',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 14,
        random: true,
        anim: { enable: true, speed: 3, size_min: 0, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 700,
        color: '#ffffff',
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 5,
        direction: 'bottom',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: false, mode: 'repulse' },
        onclick: { enable: false, mode: 'repulse' },
        resize: true,
      },
      modes: {
        grab: { distance: 1400, line_linked: { opacity: 0.1 } },
        bubble: { distance: 400, size: 6, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  })
})
